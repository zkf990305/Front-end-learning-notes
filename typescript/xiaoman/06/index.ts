// 联合类型
//例如我们的手机号通常是13XXXXXXX 为数字类型 这时候产品说需要支持座机
//所以我们就可以使用联合类型支持座机字符串
let myPhone: number | string = '010-820'

//这样写是会报错的应为我们的联合类型只有数字和字符串并没有布尔值
// let myPhone1: number | string = true

const fn = (something: number | boolean): boolean => {
  return !!something
}

console.log(fn(0))

// 交叉类型
interface People {
  age: number
  height: number
}
interface Man {
  sex: string
}
const fn1 = (man: People & Man) => {
  console.log(man.age)
  console.log(man.height)
  console.log(man.sex)
}
fn1({ age: 24, height: 180, sex: 'male' })

// 类型断言
interface A {
  run: string
}

interface B {
  build: string
}

// const fn2 = (type: A | B): string => {
//   return type.run
// }

//这样写是有警告的应为B的接口上面是没有定义run这个属性的

const fn3 = (type: A | B): string => {
  return (type as A).run
}
// 可以使用类型断言来推断他传入的是A接口的值

// 使用any临时断言
// window.abc = 123
//这样写会报错因为window没有abc这个东西

// (window as any).abc = 123
//可以使用any临时断言在 any 类型的变量上，访问任何属性都是允许的。

// as const
const names = 'abc'
// names = 'cde' //报错,无法修改

let name1 = 'abc' as const
// name1 = 'cde' //报错,无法修改

// 数组
let a1 = [10, 20] as const
const a2 = [10, 20]

// a1.unshift(30); // 错误，此时已经断言字面量为[10, 20],数据无法做任何修改
a2.unshift(30) // 通过，没有修改指针
console.log(a1, a2)

// 类型断言是不具影响力的
function toBoolean(value: any): boolean {
  return value as boolean
}

console.log(toBoolean(1))
