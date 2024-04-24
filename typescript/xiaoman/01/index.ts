// 字符串类型
let a: string = '123'

//也可以使用es6的字符串模板
let strNum: string = `dddd${a}`

console.log('字符串类型=>', strNum)

// 数字类型
let notANumber: number = NaN //Nan
let num: number = 123 //普通数字
let infinityNumber: number = Infinity //无穷大
let decimal: number = 6 //十进制
let hex: number = 0xf00d //十六进制
let binary: number = 0b1010 //二进制
let octal: number = 0o744 //八进制

console.log(notANumber, num, infinityNumber, decimal, hex, binary, octal)

let str: string = `${num}`

console.log('数字类型=>', str)

// 布尔类型

// let createdBoolean: boolean = new Boolean(1)
//这样会报错 应为事实上 new Boolean() 返回的是一个 Boolean 对象

let booleand: boolean = true //可以直接使用布尔值

let booleand2: boolean = Boolean(1) //也可以通过函数返回布尔值

console.log('布尔类型=>', booleand, booleand2)

// 空值类型
function voidFn(): void {
  console.log('test void')
}

voidFn()

// Null和undefined类型
let u: undefined = undefined //定义undefined
let n: null = null //定义null

console.log('Null和undefined类型=>', u, n)

//这样写会报错 void类型不可以分给其他类型
// let test: void = undefined
// let num2: string = '1'

// num2 = test

//这样是没问题的
let test2: null = null
let num2: string = '1'

num2 = test2

console.log('Null和undefined类型=>', num2)

//或者这样的
let test3: undefined = undefined
let num3: string = '1'

num3 = test3
console.log('Null和undefined类型=>', num3)
