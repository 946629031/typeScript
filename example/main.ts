// let a = '10'
// let b = '5'

// function add (a:number, b:number) {
//     return a + b
// }

// add(a, bb)


// ---------- 分割线 ----------

// var button = document.querySelector('button');
// var a = document.getElementById('a');
// var b = document.getElementById('b') as HTMLInputElement;

// function add (a:number, b:number) {
//     return a + b
// }

// button.addEventListener('click', () => {
//     console.log(add(+a.value, +b.value))
// })




// // 元组 tuple
// let person: [number, string] = [1, 'alex']
// // person[0] = 'ddd'  // 不能将类型“string”分配给类型“number”
// // person[1] = 1      // 不能将类型“number”分配给类型“string”
// // person[2] = 111    // 不能将类型“111”分配给类型“undefined”




// // Union 联合类型
// let union : string | number = 2
// // console.log(union);
// union = 2
// union = '123'
// union = true


// let union3 : 0 | 1 | 2   // 确定值的联合，一旦 指定之后, 该变量 就只能取 这3个值 中的一个
// union3 = 4  // 不能将类型“4”分配给类型 “0 | 2 | 1”



let aaa : number | string
aaa = 123






// // 枚举类型
// enum Color {
//     red = 5,
//     green,
//     blue
// }

// // 使用该 枚举类型
// let color = Color.blue
// console.log(color)
// // console.log(Color.red, Color.green)






// // Any 任意类型
// // let randomValue : any = 666
// let randomValue : unknown = 666
// randomValue = true
// randomValue = 'alex'
// randomValue = {}
// randomValue()
// randomValue.toUpperCase()






// // Void
// function printResult () : void {
//     console.log('lalala')
// }


// // Void
// function printResult2 () : undefined {
//     console.log('lalala')
// }


// // never
// function throwError (message: string, errorCode: number) {
//     throw {
//         message,
//         errorCode
//     }
// }
// throwError('not found', 404)


// function whileLoop () : never {
//     while (true) {
//         console.log('haha')
//     }
// }











// class Animal {
//     private name: string;
//     constructor(theName: string) { this.name = theName; }
// }

// class Rhino extends Animal {
//     constructor() { super("Rhino"); }
// }

// class Employee {
//     private name: string;
//     age = 1
//     constructor(theName: string) { this.name = theName; }
// }

// let animal = new Animal("Goat");
// let rhino = new Rhino();
// let employee = new Employee("Bob");

// // animal = rhino;
// animal = employee;
// console.log(animal);








// 创建 Person类
class Person {
    // private name : string
    protected name : string

    constructor (name) {
        this.name = name
    }
}

class Student extends Person {
    constructor (name) {
        super(name)
    }

    public learn () {
        console.log(`${this.name} is learning`)
    }
}

let aleax = new Student('Aleax')
// console.log(aleax.learn());
console.log(aleax.name);












// Type Asserttions / 类型适配 / 类型断言
let message : any
message = 'abc'
message.endWith('c')

let ddd = <string>message // 方法一, <> 尖括号
ddd.endsWith('c')

let ddd2 = message as string  // 方法二, as 关键字
ddd2.endsWith('c')







// 函数类型
let log = function (message) { // 传统函数定义
    console.log(message);
}

let log2 = (message: string) => console.log(message) // ES6 箭头函数 定义
// TypeScript 可以给 函数入参 指定类型
log2('hello')
log2(2)    // 传入 非指定 入参类型 会报错 // 类型“number”的参数不能赋给类型“string”的参数
log2(true) // 传入 非指定 入参类型 会报错 // 类型“boolean”的参数不能赋给类型“string”的参数


// 如果 TypeScript 定义了 2个 参数, 在调用函数的时候 必须填写 所有参数, 否则会报错
let log3 = (message: string, code: number) => {
    console.log(message, code);
}
log3('hello') // 报错: 入参不够 // 应有 2 个参数，但获得 1 个


// '?' 问号表示 可选参数
// 如果我们希望 函数 能像 JavaScript 一样, 有的参数是 可填可不填的
let log4 = (message: string, code?: number) => { // '?' 问号表示 可选参数
    console.log(message, code);
}
log4('hello')


// 当使用了 可选参数, 剩下的参数没有传时, 默认为 undefined
// 如果 不希望 其他参数 默认为 undefined, 可以使用 ES6 参数的默认值
let log5 = (message: string, code: number = 0) => { // '?' 问号表示 可选参数
    console.log(message, code);
}
log5('hello')

// 1.在 TypeScript 中, 可选参数 和 默认参数, 都可以实现 在调用函数时 不用输入全部参数 的功能
// 2.不管 可选参数, 还是 默认参数, 都是要 从后往前写。 否则如果是 从左往右写 就会报错












/**
 * 面向对象
 */

// 3-1 object 对象

const person : any = {
    firstName: 'Alex',
    lastName: 'Liu',
    age: 18
}

console.log(person)             // 正常执行
console.log(person.age)         // 正常执行
console.log(person.nickName)    // 调用不存在的属性, 也能正常执行







// 3-2 Interface 接口
interface Point {
    x: number,
    y: number
}

let drawPoint = (point : Point) => {
    console.log({ x: point.x, y: point.y })
}

drawPoint({ x: 105, y: 23 })
drawPoint({ x: 'Alex', y: '刘老师' })
drawPoint({ wether: 'dry', temperature: '50C' })

