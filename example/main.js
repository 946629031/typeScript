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
// 枚举类型
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
// 使用该 枚举类型
// let color = Color.blue
console.log(Color.red, Color.green);