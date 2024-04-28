// 类型推论: TypeScript 会在没有明确的指定类型的时候推测出一个类型，这就是类型推论
let str = 'xiaoman'
let num = 123
let bool = true

// 如果你声明变量没有定义类型也没有赋值这时候TS会推断成any类型可以进行任何操作
let anyTs
// anyTs = str
// anyTs = num

// 类型别名
// 定义类型别名
type str = string
let s1: str = 'xiaoman'
console.log('s1=>', s1)

// 定义函数别名
type myFn = (a: number, b: number) => number
let s2: myFn = (a, b) => {
  return a + b
}
console.log('s2=>', s2(1, 2))

// 定义联合类型别名
type myType = string | number | boolean
let s: myType = 'xiaoman'
console.log(typeof s)
s = 123
console.log(typeof s)
console.log(s)

// 定义值的别名
type myValue = boolean | 0 | '123'
let s3: myValue = true // 变量s3的值只能是上面myValue定义的值
console.log('s3=>', s3)

// type高级用法
type a1 = 1 extends number ? 1 : 0 //1

type a2 = 1 extends Number ? 1 : 0 //1

type a3 = 1 extends Object ? 1 : 0 //1

type a4 = 1 extends any ? 1 : 0 //1

type a5 = 1 extends unknown ? 1 : 0 //1

type a6 = 1 extends never ? 1 : 0 //0
