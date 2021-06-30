// let a = '10'
// let b = '5'
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name) {
        return _super.call(this, name) || this;
    }
    Student.prototype.learn = function () {
        console.log(this.name + " is learning");
    };
    return Student;
}(Person));
var aleax = new Student('Aleax');
console.log(aleax.learn());
