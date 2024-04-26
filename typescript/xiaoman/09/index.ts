// 元组就是数组的变种
let arr: [number, string] = [1, 'string']
arr[0] = 123
// arr[0].length //error
// arr[1].length //success

//数字是没有length 的
console.log(arr)

let arr1: readonly [number, string, boolean, undefined] = [
  1,
  'string',
  true,
  undefined
]
// arr1[0] = 123
console.log(arr1)

let a: [x: number, y?: boolean] = [1]
a[1] = true
console.log(a)

// 越界元素
let arr2: [number, string] = [1, 'string']

// arr2.push(true)//error

// 应用场景 例如定义excel返回的数据
let excel: [string, string, number, string][] = [
  ['title', 'name', 1, '123'],
  ['title', 'name', 1, '123'],
  ['title', 'name', 1, '123'],
  ['title', 'name', 1, '123'],
  ['title', 'name', 1, '123']
]
console.log(excel)
