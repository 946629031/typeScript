# TypeScript
- [基于TypeScript从零重构axios](https://www.bilibili.com/video/BV13T4y1J74J)
- [2020千锋TypeScript全套视频（程序员必备）](https://www.bilibili.com/video/BV1jJ411X7bi?p=1)

# 1.TypeScript简介
- ## 1-1.什么是TypeScript?
    - TypeScript 是 JavaScript 的一个超集，主要提供了`系统类型`和`对ES6的支持`。它由Microsoft开发，代码开源与Github上

- ## 1-2.为何选择TypeScript
    - TypeScript 增加了代码的`可读性`和`可维护性`
        - 能像Java一样 对变量类型做约束，使得代码更严谨
    - TypeScript 非常包容
        - 举个例子
        ```ts
        // hello.ts

        console.log('hello')
        var a:string = 1 // 错误提示：不能将类型“1”分配给类型“string”
        ```
        - 但是继续执行 `tsc hello.ts`后，虽然会有错误提示，但是仍然能编译
        ```js
        // hello.js

        console.log('hello');
        var a = 1;
        ```

    - TypeScript 拥有活跃的社区

- ## 1-3.安装使用 TypeScript
    - 全局安装命令 `npm i -g typescript`
    - 编译文件 `tsc hello.ts`
    - 查看TS版本 
        ```
        tsc -v
        Version 3.9.5
        ```

    - 约定文件以 `.ts` 为后缀，编写react时，以`.tsx`为后缀
    - 主流IDE中都支持TS，包括代码补全，接口提示，跳转定义，重构

# 2.TS数据类型
- ## 2-1.TypeScript 原始数据类型
    ```
    string  nummber  boolean  null  undefined  enum  symbol
    ```
    - 空值一般采用 `void` 来表示，void可以表示变量，也可以表示函数返回值
    - 举例
    ```ts
    var str:string = 'hello'
    var num:number = 1
    var flag:boolean = true
    var un:undefined = undefined
    var nul:null = null

    str = 1             // 这会报错
    str = null          // 不会报错
    str = undefined     // 不会报错
    // 因为 null 和 undefined 是其它类型的子类型


    // void 用来规定函数无返回值
    var callback = function ():void {
        return 1    // 报错：不能将类型“1”分配给类型“void”
    }

    var num2:void = 3 // 报错: 不能将类型“3”分配给类型“void”
    ```
- ## 2-2.TypeScript 中的任意值
    - 任意值 ( Any ) 用来表示允许赋值为任意类型
    - 声明一个变量为任意值后，对它的任何操作，返回的内容的类型都是任意值
    - 变量如果在声明的时候，未指定其类型，那么它就会被识别为任意值类型
    ```ts
    var num:any = 1
    num = true
    num = '3'

    var num2;  // 没有赋值操作，就会被认为任意值类型  等价于 var num2:any;
    num2 = 1
    num2 = true
    ```
    - ### 类型推论
        - 给变量赋初始值时，如果没有声明类型，就会根据 初始值倒推变量类型
            ```ts
            var b = 1;
            b = '2'    // 不能将类型“"2"”分配给类型“number”
            ```
        - 如果定义时没有赋值，不管之后有没有赋值，都会被推断成any类型，而完全不被类型检查
            ```ts
            var num2;  // 没有赋值操作，就会被认为任意值类型  等价于 var num2:any;
            num2 = 1
            num2 = true
            ```

# 3.联合类型
- ## 3-1 联合类型
    - 联合类型 表示可以取值可以是多种类型中的一种
        ```ts
        var muchtype:string = 'hello'
        muchtype = 1  // 报错: 不能将类型“1”分配给类型“string”

        // 联合类型
        var muchtype2:string|number
        muchtype2 = 2
        ```
    - 如果定义时没有赋值，不管之后有没有赋值，都会被推断成any类型，而完全不被类型检查
    - 只能访问此联合类型内的所有类型里共有的属性和方法
        ```ts
        var muchtype3:string|number = 'hello'
        console.log(muchtype3.length)  // 无报错
        muchtype3 = 2
        console.log(muchtype3.length)  // 报错: 类型“number”上不存在属性“length”
        console.log(muchtype3.toString())  // toString() 方法 number 和 string 都支持
        // 只能访问此联合类型内 都支持的属性和方法
        ```
- ## 3-2 接口 Interface
    - 可描述类的一部分抽象行为，也可描述对象的结构形状
    - 接口一般手写字母大写，有的编程语言上面建议接口名称加上 "I" 前缀
    - 赋值的时候，变量的形状必须要跟接口的形状保持一致
    - 接口中可定义 `可选属性、只读属性、任意属性`
    - 举例子
        - ### 3-2-1 定义接口  强约束规范
            ```ts
            // 定义接口
            interface Istate {
                name:string
            }

            var obj:Istate
            obj = 1    // 报错: 不能将类型“1”分配给类型“Istate”
            obj = {}   // 报错: Property 'name' is missing in type '{}' but required in type 'Istate'
                    //       属性“name”在类型“{}”中缺失，但在类型“Istate”中是必需的。
            obj = {name: 'nick'}    // 无报错
            ```
        - ### 3-2-2 可选属性
            ```ts
            // 可选属性
            interface Istate2 {
                name:string,
                age?:number     // '?' 问号表示 存疑，可有可无：可选属性
            }
            var obj2:Istate2
            obj2 = {name: 'no', age: 20}    // 无报错
            obj2 = {name: 'no'}             // 无报错
            ```
        - ### 3-2-3 动态属性
            - 属性个数不确定的时候，可随时添加属性
            ```ts
            // 动态属性
            interface Istate3 {
                name:string,
                age?:number,
                [propName:string]:any   // 必须是any类型, propName 变量名可以随意取
            }
            var obj3:Istate3 = {name: 'nick', age: 12, sex: 'male', isMarry: true} // 可随时添加属性
            ```
            - 问题：为什么 ` [propName:string]:any`  必须是any类型 ?
                ```ts
                // 动态属性
                interface Istate4 {
                    name:string,               // name 报错：类型“string”的属性“name”不能赋给字符串索引类型“number”
                    age?:number,
                    [propName:string]:number   // 不是any类型
                                               // 跟上面类型冲突
                }
                ```
                - 报错原因：因为 `name: string` 类型，跟下面的 `[propName:string]:number` 冲突了
                - 如果改成这样
                ```ts
                interface Istate4 {
                    name:string,
                    age?:number,             // age 报错: 类型“number”的属性“age”不能赋给字符串索引类型“string”
                    [propName:string]:string
                }
                ```
        - ### 3-2-4 只读属性
            ```ts
            // 只读属性
            interface Istate5 {
                name:string,
                readonly age:number
            }
            var obj4:Istate5 = {name: 'nick', age: 10}
            obj4.name = 'li'
            obj4.age = 111  // age 报错: 只读属性一旦赋值后，就不可更改
            ```

# 4.数组类型
## 数组表示法
- 1.类型 + 方括号
    ```ts
    var arr :number [] = [1,2,3]            // 数字类型数组
    var arr1:string [] = ['1', '2', '3']    // 字符串类型数组
    var arr2:any    [] = [1,'2', true]      // 任意类型数组
    ```
- 2.数组范型 `Array<elemType>` 表示法
    ```ts
    // 数组泛型 Array <elemType>
    var arrType: Array<number> = [1,2,3]
    var arrType2:Array<string> = ['1','2','3']
    var arrType3:Array<any>    = [1,'2',true]
    ```
- 3.接口表示法
    ```ts
    // 接口表示法
    interface IArr {
        [index:number]:number
    }
    var arrType4:IArr = [1,2,3]
    ```
- 4.进阶用法
    - 例子1
        ```ts
        // 如果是这样
        interface Istate {
            name:string,
            age:number
        }

        interface IArr {
            [index:number]:Istate
        }
        var arrType4:IArr = [1,2,3]  // 赋值报错: 不能将类型“number”分配给类型“Istate”
        ```
        - 正确方法如下
        ```ts
        // 接口表示法
        interface Istate {
            name:string,
            age:number
        }

        interface IArr {
            [index:number]:Istate
        }
        var arrType4:IArr = [{name: 'nick', age: 12}]
        ```
        这样做就能强制规定 数组内的子元素的格式
    - 例子2
        ```ts
        interface Istate {
            name:string,
            age:number
        }

        var arrType5: Array<Istate> = [{name: 'nick', age: 12}] // 泛型表示法
        var arrType6: Istate[] = [{name: 'nick', age: 12}]      // 方括号表示法
        ```