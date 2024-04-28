// symbol类型
let sym1 = Symbol()
let sym2 = Symbol('keyboard')
console.log(sym1, sym2)

// Symbol的值是唯一的
let sym3 = Symbol()
console.log(sym1 === sym3) // false

// 用作对象属性的键
let sym4 = Symbol()

let obj = {
  [sym4]: 'value'
}

console.log(obj[sym4]) // "value"

// 使用symbol定义的属性，是不能通过如下方式遍历拿到的
const symbol1 = Symbol('666')
const symbol2 = Symbol('777')
const obj1 = {
  [symbol1]: '小满',
  [symbol2]: '二蛋',
  age: 19,
  sex: '女'
}
// 1 for in 遍历
for (const key in obj1) {
  // 注意在console看key,是不是没有遍历到symbol1
  console.log(key)
}
// 2 Object.keys 遍历
Object.keys(obj1)
console.log(Object.keys(obj1))
// 3 getOwnPropertyNames
console.log(Object.getOwnPropertyNames(obj1))
// 4 JSON.stringfy
console.log(JSON.stringify(obj1))

// 1 拿到具体的symbol 属性,对象中有几个就会拿到几个
// Object.getOwnPropertySymbols(obj1)
console.log(Object.getOwnPropertySymbols(obj1))
// 2 es6 的 Reflect 拿到对象的所有属性
// Reflect.ownKeys(obj1)
console.log(Reflect.ownKeys(obj1))

// Symbol.iterator 迭代器 和 生成器 for of
var arr = [1, 2, 3, 4]
let iterator = arr[Symbol.iterator]()

console.log(iterator.next()) //{ value: 1, done: false }
console.log(iterator.next()) //{ value: 2, done: false }
console.log(iterator.next()) //{ value: 3, done: false }
console.log(iterator.next()) //{ value: 4, done: false }
console.log(iterator.next()) //{ value: undefined, done: true }
