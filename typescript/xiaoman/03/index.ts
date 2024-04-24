// 预习
// object
let o: object = {} //正确
let o1: object = [] //正确
let o2: object = () => 123 //正确
// let b: object = '123' //错误
// let c: object = 123 //错误
console.log(o, o1, o2)
// {}
let a1: {} = { name: 1 }
//  字面量模式是不能修改值的
// a1.name = 2
let a2: {} = 123
let a3: {} = () => 123
console.log(a1, a2, a3)

// 接口和对象类型
//这样写是会报错的 因为我们在person定义了a，b但是对象里面缺少b属性
//使用接口约束的时候不能多一个属性也不能少一个属性
//必须与接口保持一致
// interface Person {
//   b: string
//   a: string
// }

// const person: Person = {
//   a: '213',
// }
// console.log(person)

// 重名interface 可以合并
// interface A {
//   a: string
// }
// interface A {
//   b: string
// }

// let x: A = {
//   a: '123',
//   b: '123'
// }
// console.log(x)
// 继承
interface A {
  name: string
}
interface B extends A {
  age: number
}
let obj: B = {
  name: '123',
  age: 123
}

console.log(obj)

// 可选属性 使用?操作符
//可选属性的含义是该属性可以不存在
//所以说这样写也是没问题的
// interface Person {
//   b?: string
//   a: string
// }

// const person: Person = {
//   a: '213'
// }

// console.log(person)

// 任意属性 [propName: string]

// interface Person {
//   name: string
//   age?: number
//   [propName: string]: any
// }

// const person: Person = {
//   name: '123',
//   //   age: 123,
//   a: '123',
//   b: '123'
// }

// console.log(person)

// 只读属性 readonly
//这样写是会报错的
//应为a是只读的不允许重新赋值
// interface Person {
//   b?: string
//   readonly a: string
//   [propName: string]: any
// }

// const person: Person = {
//   a: '213',
//   c: '123'
// }

// // person.a = 123
// console.log(person)

// 添加函数
interface Person {
  b?: string
  readonly a: string
  [propName: string]: any
  cb: () => void
}

const person: Person = {
  a: '213',
  c: '123',
  cb: () => {
    console.log(123)
  }
}
person.cb()
console.log(person)
