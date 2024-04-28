// 泛型

// 函数泛型
function num(x: number, y: number): Array<number> {
  return [x, y]
}

console.log(num(1, 2))

function str(x: string, y: string): Array<string> {
  return [x, y]
}
console.log(str('xiaoman1', 'xiaoman2'))

// 泛型优化
function Add<T>(x: T, y: T): Array<T> {
  return [x, y]
}
console.log(Add(1, 2))
console.log(Add('xiaoman1', 'xiaoman2'))

function Sub<T, U>(a: T, b: U): Array<T | U> {
  const params: Array<T | U> = [a, b]
  return params
}

console.log(Sub<Boolean, number>(false, 1))

// 定义泛型接口
interface MyInter<T> {
  (arg: T): T
}

function fn<T>(arg: T): T {
  return arg
}

let result: MyInter<number> = fn

console.log(result(1))

// 对象字面量泛型
let foo: { <T>(arg: T): T }

foo = function <T>(arg: T): T {
  return arg
}

console.log(foo(123))

// 泛型约束
interface Len {
  length: number
}

function getLegnth<T extends Len>(arg: T) {
  return arg.length
}

getLegnth<string>('123')

// 使用keyof 约束对象
function prop<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]
}

let o = { a: 1, b: 2, c: 3 }

prop(o, 'a')
// prop(o, 'd') //此时就会报错发现找不到

// 泛型类
class SubClass<T> {
  attr: T[] = []
  add(a: T): T[] {
    return [a]
  }
}

let s = new SubClass<number>()
console.log(s)
s.attr = [1, 2, 3]
console.log(s)
s.add(123)
console.log(s)
let s2 = new SubClass<string>()
console.log(s2)
s2.attr = ['1', '2', '3']
console.log(s2)
s2.add('123')
console.log(s2)
