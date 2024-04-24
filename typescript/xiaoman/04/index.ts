// 类型
//类型加中括号
let arr: number[] = [123]
console.log(arr)
//这样会报错定义了数字类型出现字符串是不允许的
// let arr1: number[] = [1, 2, 3, '1']
//操作方法添加也是不允许的
let arr2: number[] = [1, 2, 3]
// arr.unshift('1')

var arr3: number[] = [1, 2, 3] //数字类型的数组
var arr4: string[] = ['1', '2'] //字符串类型的数组
var arr5: any[] = [1, '2', true] //任意类型的数组
console.log(arr3, arr4, arr5)

// 数组泛型
let arr6: Array<number> = [1, 2, 3, 4, 5]
console.log(arr6)

// 用接口表示数组
interface NumberArray {
  [index: number]: number
}
let fibonacci: NumberArray = [1, 1, 2, 3, 5]
//表示：只要索引的类型是数字时，那么值的类型必须是数字。
console.log(fibonacci)

// 多维数组
let data: number[][] = [
  [1, 2],
  [3, 4]
]
console.log(data)

// arguments类数组
function Arr(...args: any): void {
  console.log(args)
  //错误的arguments 是类数组不能这样定义
  //   let arr: number[] = arguments
}
Arr(111, 222, 333)

function Arr1(...args: any): void {
  console.log(arguments)
  //ts内置对象IArguments 定义
  let arr: IArguments = arguments
}
Arr1(111, 222, 333)

//其中 IArguments 是 TypeScript 中定义好了的类型，它实际上就是：
// interface IArguments {
//   [index: number]: any
//   length: number
//   callee: Function
// }

// any 在数组中的应用
let list: any[] = [1, '2', true, [], { a: 1 }]
console.log(list)
