# TypeScript
- TypeScript 入门, 基础语法
- [TypeScript 官网 typescriptlang.org](https://www.typescriptlang.org/)
- 视频教程
    - [【慕课】2小时极速入门 TypeScript](https://www.imooc.com/learn/1306)
    - [基于TypeScript从零重构axios](https://www.bilibili.com/video/BV13T4y1J74J)
    - [2020千锋TypeScript全套视频（程序员必备）](https://www.bilibili.com/video/BV1jJ411X7bi?p=1)
- 小技巧
    - [ts和vscode设置中文错误提示](https://blog.csdn.net/promiseCao/article/details/109578886)
        - vscode设置中文错误提示需要打开设置页面，搜索“typescript local”，然后设置中文就行了
----
- 提示
    - 在项目中的 `pageage.json` 里
        - 如果有 `@types/...` 开头的依赖包, 如: `'@types/react-native-vector-icons': '^6.4.1'` 
        - 这种是 `第三方库 的 类型声明` 
        - 只有我们使用了这种 `第三方库 的 类型声明`， 当我们在 IDE 中编写代码的时候，这个组件 `有那些属性是必选的、那些属性是可选的、它的类型是什么？`
        - 这样编辑器 才能给我们 `提示 对应的信息`, 减少错误的发生, 减少BUG
----

- 目录
    - [第1章 TypeScript简介](#第1章-TypeScript简介)
        - [1-1 TypeScript简介](#1-1-TypeScript简介)
            - [1-什么是TypeScript](#1-什么是TypeScript)
            - [2-TypeScript-的历史](#2-TypeScript-的历史)
            - [3-TypeScript-出现的原因](#3-TypeScript-出现的原因)
            - [4-TypeScript-的作用](#4-TypeScript-的作用)
        - [1-2 TypeScript 的优点和缺点](#1-2-TypeScript-的优点和缺点)
        - [1-3 安装使用 TypeScript](#1-3-安装使用-TypeScript)
    - [第2章 TS数据类型](#第2章-TS数据类型)
        - `string  nummber  boolean  null  undefined  enum  symbol  any`
        - []()
        - []()
        - []()
        - []()
        - []()
        - []()
        - []()
        - []()
        - []()
    - [第3章 联合类型](#第3章-联合类型)
        - [3-2 接口 Interface](#3-2-接口-Interface) - `可选属性、只读属性、任意属性`
    - [第4章 数组类型](#第4章-数组类型)
        - 数组表示法 `array[], Array<elemType>, 接口表示法`
    - [第5章 函数类型](#第5章-函数类型)
        - 参数约束，返回值约束
    - [第6章 类型断言 (类型指定)](#第6章-类型断言-类型指定)
        - 语法: `value as string , num as boolean`
    - [第7章 类型别名](#第7章-类型别名)
        - `type Name = string | number`
    - [第8章 枚举 enum](#第8章-枚举-enum)
        - `enum Days { Sun, Mon, Tue, Wed, Thu, Fri, Sat }`
    - [第9章 class 类的修饰符](#第9章-class-类的修饰符)
        - `public、private、protected、static`
    - [第10章 泛型](#第10章-泛型)
        - 不预先指定具体类型，而在使用的时候再指定类型的一种特性
    - []()

----
# 第1章 TypeScript简介
- ## 1-1 TypeScript简介
    - ![](./img/1-1.typescript.jpg)
    - ### 1 什么是TypeScript?
        - TypeScript 是 JavaScript 的一个 `超集`
        - 基于 `ES6 的语法`
        - 提供 `类型系统` （这也是它之所以称之为 `TypeScript` 的原因）
        - > 注意: TypeScript 无法在浏览器中运行, 所以 TypeScript 要经过 编辑 (Compile) 成为 JavaScript 才行
        - ![](./img/1-1-1.jpg)
        <br><br>

    - ### 2 TypeScript 的历史
        - 它由Microsoft开发，代码开源与Github上
        - 微软在 2012年10月份 发布了 TypeScript 公开版本
        - > 目标是用于 **`开发大规模`** JavaScript 应用, 更强大、更健壮、更容易维护 的大型项目
    - ### 3 TypeScript 出现的原因
        - 由于 JavaScript 是 `弱类型语言`
        - 在代码执行之前 变量的类型是不确定的
            - 它的`好处是 灵活`
            - 坏处是 项目变大 之后，会增加程序员的负担，因为在我们使用 某一个属性、变量的时候，我们 **`无法确定变量当前的类型`**，这样会导致很多BUG
            - 这也是微软 要开发 TypeScript 的原因之一
    - ### 4 TypeScript 的作用
        - TypeScript 提供超集编译期 类型检查
        - 增强了 编辑器 和 IDE 的功能
        > 在编译期 就暴露问题 <br>
        > 让问题尽早暴露，而不是等到 上线之后才 暴露问题. ( **`减小 问题的影响范围`** )

- ## 1-2 TypeScript 的优点和缺点
    - ### TypeScript 的优点 - `Typing 强类型`
        - 1 规范我们的代码。TypeScript 增加了代码的`可读性`和`可维护性`
            - TypeScript 主要增加了 `类型系统`
                - 它就是最好的文档，大部分函数 我们只要看一下 类型的定义，就知道 应该如何去调用它
            - 能像Java一样 对变量类型做约束，使得代码更严谨
        - 2 在编译阶段就可以发现大部分错误
            - 这可以帮助我们 减少很多的BUG
        - 3 TypeScript 非常包容
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
        - 4 TypeScript 拥有活跃的社区
        - 5 再举个例子
            - 我们在进行 `加法运算` 的时候, `a + b`
                - JavaScript 不会对 a, b变量的类型进行检查，如果是字符串就 就将字符串 相链接，如
                    ```js
                    var a = '10'
                    var b = '5'
                    console.log(a + b) // 返回 '105'
                    ```
                - 而这 在某些 时刻却是不符合 预期的 （例如我们希望做的是加法运算时），也容易导致很多的BUG
                - 所以 就衍生出了以下解决方案
                    ```js
                    function add (a, b) {
                        if (typeof a === 'number' && typeof b === 'number') {
                            return a + b
                        } else {
                            return +a + +b  // String 类型前面 放个 + 号，会自动转成 Number 类型
                        }
                    }
                    ```
                - 这就导致了 额外的工作量，和 低水平的重复 
            - TypeScript 带来的好处
                - 自动进行 `类型检查`
                - 避免低级错误
                - 解放劳动力
        - 6 TeypScript 提示健全
            - 当鼠标放在 `.js` 文件的 函数形参 上时
                - ![](./img/1-1-6.jpg)
            - 当鼠标放在 `.ts` 文件的 函数形参 上时
                - ![](./img/1-1-7.jpg)

            ```ts
            var button = document.querySelector('button');
            var a = document.getElementById('a') as HTMLInputElement;
            var b = document.getElementById('b') as HTMLInputElement;

            function add (a:number, b:number) {
                return a + b
            }

            button.addEventListener('click', () => {
                console.log(add(+a.value, +b.value))
            })
            ```
            - 关键词 `as` + 类型 ==> 强制类型转换
            - 告诉代码，我100% 确定 a 变量的类型
            - 如下
                - 没加 as 的时候
                    - ![](./img/1-1-8.jpg)
                - 加了 as 的时候
                    - ![](./img/1-1-9.jpg)
    - ### TypeScript 的缺点
        - 1 学习成本，需要理解一些新的知识点，如 接口、泛型、枚举
        - 2 开发成本
            - 短期内 会增加一定的开发成本
            - 但是长期来看 这些都是值得的
        - 3 第三方库可能不支持
    - ### 是否应该在项目中使用 TypeScript
        - 使用 TypeScript 带来的收益是否大于其支出
        - 就是想学习 TypeScript


- ## 1-3 安装使用 TypeScript
    - 全局安装命令 `npm i -g typescript`
    - 编译文件 `tsc hello.ts`
    - 查看TS版本 
        ```
        tsc -v
        Version 3.9.5
        ```

    - 约定文件以 `.ts` 为后缀，编写react时，以`.tsx`为后缀
    - 主流IDE中都支持TS，包括代码补全，接口提示，跳转定义，重构

# 第2章 TS数据类型
- ## 2-1.TypeScript 数据类型分类
    - [【文档】Basic Types](https://www.typescriptlang.org/docs/handbook/basic-types.html)
    - ### 基础类型 Basic Types
        ```
        string  nummber  boolean  null  undefined  array  object  symbol

        enum  tuple  void  never any
        ```
    - ### 高级类型
        ```
        union 组合类型

        Nullable 可空类型

        Literal 预定义类型

        ...
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

- ## 2-2.Number, Boolean, String
    - Number 数字类型
        - TypeScript 对数字的定义 只有一个很笼统的 number 来表示 (基于JS的灵活性 继承过来的)
        - 既能表示整数、也能表示浮点数，甚至也可以表示正负数
        - 例如：`1, 5.3, -10`
        - 举例
            ```ts
            let num1: number = 5 // 显式指定类型
            let num2 = 1         // 自动进行 类型推断
            ```
    - String 字符串类型
        - ```"hello", '  hello', `hello` ```
        - 反引号: ``` `` ```, 可以创建一个字符串模版
        - 与 JavaScript 一致

        - 举例
            ```ts
            let firstName: string = '阿雷克斯'
            let str = `我叫${firstName}`
            ```
    - Boolean 布尔类型
        - 真假 `true, false`
        - 处理判断逻辑
        ```ts
        let isTrue = true
        let isFalse: boolean = false
        ```
- ## 2-3.Array数组 和 Tuple元组
    - Array 数组类型
        - `[]`
        - 数组中 可以存放任意类型的数据
        - JS中数组的宽容度非常大，而TS也 很好的继承了这一点
        - 举例
            ```ts
            let list1 = [1,2,3,4]           // 会自动进行 类型推断
            let list2: number[] = [1,2,3,4]
            let list3: Array<number> = [1,2,3,4]
            // 这三种声明方式完全等价，都是声明 一个 number 类型的 数组


            // 声明 任意类型 数组
            let list4 = [1, 'ddd']  // 不显式指定类型, 但是 声明变量的同时 赋值不同类型 给数组。鼠标放到变量上 会显示 let list4: (string | number)[]
            let list5: any[] = [1, 'dds', true]  // 显式声明 任意类型 数组
            ```
    - tuple 元组类型
        - 读音: Tiu破，踏破 [ˈtjʊpəl; ˈtʌpəl]
        - 元组 是一个特殊的 数组, 它是 **`固定长度，固定类型`** 的
        - 声明元组时，一定要指明数据类型
        - 举例
            ```ts
            // 元组 tuple
            let person: [number, string] = [1, 'alex']          // 鼠标 hover 上去，显示 let person: [number, string]
            person[0] = 'ddd'  // 不能将类型“string”分配给类型“number”
            person[1] = 1      // 不能将类型“number”分配给类型“string”
            person[2] = 111    // 不能将类型“111”分配给类型“undefined”
            ```
        - 那么这个 固定长度 固定类型 的元组 有什么好处呢？
            - 如果这个 person 用于存放学生
                - 那么我们可以 `person[0]` 用于存放 学号
                - `person[0]` 用于存放 学生姓名
                - 这样 就自然形成了 `key - value` 的键值对 对应关系
                - 非常有利于 我们在代码中 进行逻辑判断 和 数据处理
        - 注意: tuple 现在还存在 **`BUG`**
            ```ts
            person[2] = 3   // 取下标为2的值, 这样 会报错
            person.push(3)  // 这样不会报错, IDE 和 编译 都可以通过
            // 这里是 有问题的，因为 person 已经固定 长度了，是2个长度，但是现在又可以 放3个元素 在里面
            ```
        - 声明元组时，一定要指明数据类型
            - 如
            ```ts
            let person2 = [1, 'alex']  // let person2: (string | number)[]
            // 否则，我们声明后发现 person `变成 数组` 了
            
            person2[0] = 'ddd'  // 都可以正常赋值
            person2[1] = 1      // 都可以正常赋值
            person2[2] = 111    // 都可以正常赋值
            ```

- ## 2-4.Union联合 和 Literal类型
    - Union 联合类型
        - 一个变量 可以同时支持 两个 甚至多个 不同的 类型
            ```ts
            let union : string | number

            union = 2
            union = 'alex'
            union = true    // 不能将类型“boolean”分配给类型 “string | number”



            let union2 : number | string | boolean | string[]
            ```
        - 例2
            - 先看一下 之前的一个 加法函数
                ```ts
                function merge (n1: number, n2: number) {
                    return n1 + n2
                }

                let mergeNumber = merge(2, 5)
                ```
            - 如果我们希望拓展一下这个函数，希望它 既可以 做加法，也可以做 字符串合并。 改如何做呢？
                ```ts
                function merge (n1: number | string, n2: number | string) {
                    if (typeof n1 === 'string' || typeof n2 === 'string')
                        return n1.toString() + n2.toString()
                    else
                        return n1 + n2
                }

                let mergeNumber = merge(2, 5)               //  7
                let mergeString = merge('hello', 'world')   //  helloworld
                ```
        - **`确定值的 联合 Union`**
            ```ts
            let union : 0 | 1 | 2   // 确定值的联合，一旦 指定之后, 该变量 就只能取 这3个值 中的一个
            union3 = 4  // 不能将类型“4”分配给类型 “0 | 2 | 1”

            // 那么 像这种 明确取值的类型 就是 字面量类型 Literal
            ```
    - Literal 字面量类型
        ```ts
        let number3 = 4
        let union : 0 | 1 | 2
        let literal : 1 | '2' | true | [1,2,3,4]
        ```
        > 当我们把 字面量类型 和 联合类型 结合起来使用的时候，就能够产生 非常强大的 代码逻辑
        ```ts
        // 我们再来改造一下 上面的 加法函数
        function merge (
            n1: number | string,
            n2: number | string,
            resultType: 'as-number' | 'as-string'
        ) {
            if (resultType === 'as-string') {
                return n1.toString() + n2.toString()
            }
            if (typeof n1 === 'string' || typeof n2 === 'string')
                return n1.toString() + n2.toString()
            else
                return n1 + n2
        }

        let mergeNumber = merge(2, 5, 'as-number')  // 7
        let mergeNumber = merge(2, 5, 'as-string')  // 25
        let mergeNumber = merge('hello', 'world')   // helloworld
        ```

- ## 2-5.Enum枚举
    > Java, C# 语言 都有 Enum枚举类型，但是 JavaScript 没有 <br><br>
    > 虽然在 ES3 中，就把 Enum 这个关键字 保留了，但是  JavaScript 并没有 枚举这个概念，也没有真正的实用过
    - Enum 枚举类型
        - 读音：`[ɪˌnjuːm]`, 类似于: eNum
        - 枚举类型 究竟是什么呢？下面我们来看代码
            ```ts
            enum Color {
                red,
                green,
                blue
            }

            // 使用该 枚举类型
            let color = Color.blue  // 2
            console.log(color)
            ```
            - 鼠标 hover 到 red 上
                - ![](./img/2-5.jpg)
            - > 默认情况下，枚举类型 **`真正的类型`** 是 `Number `   (与 C++ 非常类似)
                ```ts
                // 默认情况下
                enum Color {
                    red,        // 0
                    green,      // 1
                    blue        // 2
                }
                ```
        - 指定数据
            - 当然，除了默认情况下，我们还可以 指定数据，如
                ```ts
                enum Color {
                    red = 5,    // 5
                    green,      // 6
                    blue        // 7
                }

                // 这种特性 与 C++ 也完全一致
                ```
            - 我们还可以
                ```ts
                enum Color {
                    red = 5,        // 5
                    green = 10,     // 10
                    blue =  1       // 1
                }
                ```
            - 还可以 指定 别的数据类型
                ```ts
                enum Color {
                    red = 'red',        // 'red'
                    green = 'green',    // 'green'
                    blue =  1           // 1
                }
                ```
    > 总结: TypeScript 的 Enum 枚举类型 非常强大，配合 Switch 语句 非常好用
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

# 第3章 联合类型
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
    - 1.可描述类的一部分抽象行为，也可描述对象的结构形状
    - 2.接口一般手写字母大写，有的编程语言上面建议接口名称加上 "I" 前缀
    - 3.赋值的时候，变量的形状必须要跟接口的形状保持一致
    - 4.接口中可定义 `可选属性、只读属性、任意属性`
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

# 第4章 数组类型
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

# 第5章 函数类型
- 1.函数约束：参数约束，返回值约束
- 2.函数本身赋值变量的约束
    ```ts
    // 声明式函数
    function funType (name:string, age:number):number {
        return age
    }
    var ageNum:number = funType('nick', 12)


    // 参数不确定
    function funType2 (name:string, age:number, sex?:string):number {
        return age
    }
    var ageNum2:number = funType2('nick', 12)


    // 参数默认值
    function funType3 (name:string='nick', age:number=18):number {
        return age
    }
    ```
    ```ts
    var funType4 = function (name:string, age:number):number {
        return age
    }


    // 表达式函数

    // 对于左边 funType5变量 的约束, 最终 funType5函数 的返回值是 =>number类型
    var funType5:(name:string, age:number)=>number = function (name:string, age:number):number {
        return age
    }


    // 接口方式约束
    interface funType6 {
        (name:string, age:number):number
    }
    var funType6:funType6 = function (name:string, age:number):number {
        return age
    }
    ```
- 3.可采用重载的方式才支持`联合类型`的函数关系
    ```ts
    // 对于联合类型的函数，可以采用重载的方式
    function getValue (value:number|string):number|string {
        return value
    }
    // 我想要 当我输入number时 就给我返回number, 输入string时 就给我返回string,
    let a:number = getValue(1)      // a 报错: 不能将类型“string | number”分配给类型“number”
    let b:string = getValue('1')    // b 报错: 不能将类型“string | number”分配给类型“string”


    // 解决方法: 重载的方式
    function getValue1 (value:number):number
    function getValue1 (value:string):string
    function getValue1 (value:number|string):number|string {
        return value
    }
    let aa:number = getValue1(1)      // a 报错: 不能将类型“string | number”分配给类型“number”
    let bb:string = getValue1('1')    // b 报错: 不能将类型“string | number”分配给类型“string”
    ```

    
# 第6章 类型断言 (类型指定)
- 1.类型断言 在复合类型中 可以用来手动 **指定一个值的类型**
    - 语法: `<类型>值` 或 `值 as 类型`
- 2.在jsx语法 (React的jsx语法的ts版) 必须采用 `值 as 类型` 这种
    - 因为 `<类型>值` 这种写法带有 `尖括号<>`, 会跟其他`尖括号<>`冲突
- 3.类型断言不是类型转换，断言成一个联合类型中不存在的类型是不允许的
```ts
// 问题
let num:number|string = '12'
num = 10
console.log(num.length)     // 报错: 类型“number”上不存在属性“length”


// 类型断言
function get (value:number|string) {
    // return value.length     // 报错: 类型“number”上不存在属性“length”
    // return (<string>value).length   // 类型断言 写法1
    return (value as string).length    // 类型断言 写法2
}


let num2:number|string = '12'
console.log((num2 as boolean).length)
// 转联合类型中 不存在的 boolean类型，就报错
```
    
# 第7章 类型别名
- 1.类型别名可以用来给一个类型起一个新的名字
    - 语法: 关键字 type, 例如 `type Name = string | number`
    - 例子中的 `Name` 就表示可设置字符串和数值类型
- 2.也可采用 type 来约束取值只能是 某些字符串中的一个
    - 如: `type EventName= "click"|"scroll"|"mousemove"`
```ts
ar temp:string|number = '10'

// 类型别名
type strType = string|number|boolean
var str:strType = '10'
str = 10
str = true


// 可以对于接口也采用类型别名
interface muchType1 {
    name: string
}
interface muchType2 {
    age: number
}
type muchType = muchType1 | muchType2
var ojb:muchType = {name: 'nick'}
var ojb:muchType = {age: 12}
var ojb:muchType = {name: '1', age: 1}



// 限制字符串的选择
type sex = 'male'|'female'
function getSex (s:sex):string {
    return s
}
getSex('1')     // 报错: 类型“"1"”的参数不能赋给类型“sex”的参数
getSex('male')  // 无报错, 且写到 '' 引号内时，会自动提示 字符串的选择 'male'|'female'
```


# 第8章 枚举 enum
- 1.枚举 (enumerate) 类型用于取值被限定在一定范围内的场景
    - 关键字: enum
    - 例如: `enum Days { Sun, Mon, Tue, Wed, Thu, Fri, Sat }`
    - 枚举成员会被赋值为 从0开始递增的数字, 同时也会被 `枚举值` 到 `枚举名` 进行反向映射
```ts
enum Days {
    Sun,
    Mon,
    Tue,
    Wed,
    Thu,
    Fri,
    Sat
}

console.log(Days.Sun)   // 0
console.log(Days.Sat)   // 6
console.log(Days[0])    // Sun



console.log(Days)    // 枚举类型 最终会被编译成 双向映射的对象

// { '0': 'Sun',
//   '1': 'Mon',
//   '2': 'Tue',
//   '3': 'Wed',
//   '4': 'Thu',
//   '5': 'Fri',
//   '6': 'Sat',
//   Sun: 0,
//   Mon: 1,
//   Tue: 2,
//   Wed: 3,
//   Thu: 4,
//   Fri: 5,
//   Sat: 6 }





// 使用枚举类型可以定义一些有名字的数字常量
enum Days2 {
    Sun=3,      // 给定初始默认值, 下面会按顺序递增
    Mon,
    Tue,
    Wed,
    Thu,
    Fri,
    Sat
}

console.log(Days2.Sun)   // 3
console.log(Days2.Sat)   // 9

console.log(Days2)
// { '3': 'Sun',
//   '4': 'Mon',
//   '5': 'Tue',
//   '6': 'Wed',
//   '7': 'Thu',
//   '8': 'Fri',
//   '9': 'Sat',
//   Sun: 3,
//   Mon: 4,
//   Tue: 5,
//   Wed: 6,
//   Thu: 7,
//   Fri: 8,
//   Sat: 9 }

```


# 第9章 class 类的修饰符
```
public
private
protected
static
```
- `public` 修饰的 `属性` 或 `方法` 是共有的，可以做任何地方被访问到，默认所有 `属性` 或 `方法` 都是public
- `private` 修饰的 `属性` 或 `方法` 是私有的，不能在声明它的类外面访问
- `protected` 修饰的 `属性` 或 `方法` 是受保护的，它和 `private` 类似
```ts
// 创建 Person类
class Person {
    name = 'nick'
    age = 18
    say () {
        console.log('my name is ' + this.name + ', my age is ' + this.age)
    }
}

// 创建 person 实例
var p = new Person()
p.say()
console.log(p.name) // 当一个类成员变量没有被修饰的时候，外界是可以进行访问的，默认就是public进行修饰
```
- 但是如果加了 private
    ```ts
    // 创建 Person类
    class Person {
        private name = 'nick'
        age = 18
        say () {
            console.log('my name is ' + this.name + ', my age is ' + this.age)
        }
    }

    // 创建 person 实例
    var p = new Person()
    p.say()
    console.log(p.name) // 报错: 属性“name”为私有属性，只能在类“Person”中访问
    ```
- protected
    ```ts
    // 创建 Person类
    class Person {
        private name = 'nick'
        age = 18
        protected sex = 'male'
        say () {
            console.log('my name is ' + this.name + ', my age is ' + this.age)
        }
    }

    // 创建 person 实例
    var p = new Person()
    // p.say()
    // console.log(p.name) // 报错: 属性“name”为私有属性，只能在类“Person”中访问




    // 创建子类
    class Child extends Person {
        callParent () {
            console.log(this.sex) // male
            super.say()
        }
    }
    var c = new Child()
    console.log(c.age)  // 18
    console.log(c.sex)  // 报错: 属性“sex”受保护，只能在类“Person”及其子类中访问
    c.callParent()      // 无报错
    ```
- static
    ```ts
    // 创建 Person类
    class Person {
        private name = 'nick'
        age = 18
        protected sex = 'male'
        say () {
            console.log('my name is ' + this.name + ', my age is ' + this.age)
        }
    }

    // 创建子类
    class Child extends Person {
        number = 12

        callParent () {
            console.log(this.sex) // male
            super.say()
        }
        static test () {
            console.log('test')
            console.log(this.number)  // 报错: 类型“typeof Child”上不存在属性“number”。
            // 类的静态方法里，是不允许用 this 的
        }
    }
    var c = new Child()

    c.test()      // 报错: Property 'test' is a static member of type 'Child'
    Child.callParent() // 报错: 类型“typeof Child”上不存在属性“callParent”, 非静态方法不能通过 Class类 直接访问
    Child.test()  // 静态方法 可以直接通过 Class类 来访问
    ```

# 第10章 泛型
- ### 什么是泛型？
    - 泛型是指 在定义 函数、接口、类 的时候，不预先指定具体类型，而在使用的时候再指定类型的一种特性
- 先看个例子
    ```ts
    function creatArr (length:number, value:string):Array<any> {
        let arr = []
        for (let i = 0; i < length; i++) {
            arr[i] = value
        }
        return arr
    }
    ```
    - 这种函数存在什么问题呢？
    - 没有确切定义返回值类型，运行的数组每一项都可以是任意类型

- 如果我们希望限制 返回值类型，该怎么办呢？
    ```ts
    // 下面我们 使用泛型进行改造
    function creatArr2<T> (length:number, value:T):Array<T> {   // T 可以是任意类型
        let arr = []
        for (let i = 0; i < length; i++) {
            arr[i] = value
        }
        return arr
    }

    var strArray: string[] = creatArr2<string>(3, '1')
    这样 我们就能直接限制了，函数返回值 都是 字符串数组


    var strArray2: string[] = creatArr2<string>(3, 1)  // 报错: 类型“1”的参数不能赋给类型“string”的参数
    当我们 尝试传入 number 类型的参数时, 就会报错。因为跟前面传入的 string类型 相矛盾

    var strArray3: number[] = creatArr2(3,1)
    简写。因为左边已经限制了返回值类型，所以右边可以省略。它会自己进行 类型反推 (类型推论)

    ```
    - 泛型可以用来帮我们 限定约束规范
- ### 在接口中采用泛型
    ```ts
    interface ICreate1 {
        (name:string, value:any):Array<any>
    }

    // 在接口中采用泛型
    interface ICreate {
        <T>(name:string, value:T):Array<T>
    }

    let func:ICreate
    func = function <T>(name:string, value:T):Array<T> {
        return [value]
    }

    let temp = func('nick', 'str')
    // 这样子 通过传入的 value值的类型，就自动限定了 返回值的类型
    // 比如这里 传入的是 string类型，返回的就是 string Array

    console.log(temp) // [ 'str' ]

    
    let temp2:number[] = func('nick', 10)
    console.log(temp) // [ 10 ]
    ```