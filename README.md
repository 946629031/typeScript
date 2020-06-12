# TypeScript
- TypeScript 入门, 基础语法
- 视频教程
    - [基于TypeScript从零重构axios](https://www.bilibili.com/video/BV13T4y1J74J)
    - [2020千锋TypeScript全套视频（程序员必备）](https://www.bilibili.com/video/BV1jJ411X7bi?p=1)

----

目录
- #### [1.TypeScript简介](#1TypeScript简介)
    - 安装 编译
- #### [2.TS数据类型](#2TS数据类型)
    - `string  nummber  boolean  null  undefined  enum  symbol  any`
- #### [3.联合类型](#3联合类型)
    - [3-2 接口 Interface](#3-2-接口-Interface) - `可选属性、只读属性、任意属性`
- #### [4.数组类型](#4数组类型)
    - 数组表示法 `array[], Array<elemType>, 接口表示法`
- #### [5.函数类型](#5函数类型)
    - 参数约束，返回值约束
- #### [6.类型断言 (类型指定)](#6类型断言-(类型指定))
    - 语法: `value as string , num as boolean`
- #### [7.类型别名](#7类型别名)
    - `type Name = string | number`
- #### [8.枚举 enum](#8枚举-enum)
    - `enum Days { Sun, Mon, Tue, Wed, Thu, Fri, Sat }`
- #### [9.class 类的修饰符](#9class-类的修饰符)
    - `public、private、protected、static`
- #### [10.泛型](#10泛型)
    - 不预先指定具体类型，而在使用的时候再指定类型的一种特性
- []()

----
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

# 5.函数类型
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

    
# 6.类型断言 (类型指定)
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
    
# 7.类型别名
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


# 8.枚举 enum
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


# 9.class 类的修饰符
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

# 10.泛型
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