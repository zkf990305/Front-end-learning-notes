// any 任意类型 unknown 不知道的类型
let anys1: any = 123
anys1 = '123'
anys1 = true
console.log(anys1)

let anys2
anys2 = '123'
anys2 = true
console.log(anys2)

//unknown 可以定义任何类型的值
let value: unknown

value = true // OK
value = 42 // OK
value = 'Hello World' // OK
value = [] // OK
value = {} // OK
value = null // OK
value = undefined // OK
value = Symbol('type') // OK

//这样写会报错unknow类型不能作为子类型只能作为父类型 any可以作为父类型和子类型
//unknown类型不能赋值给其他类型
// let names: unknown = '123'
// console.log(names)
// let names1: string = names

//这样就没问题 any类型是可以的
let names2: any = '123'
let names3: string = names2
console.log(names2, names3)

//unknown可赋值对象只有unknown 和 any
let bbb: unknown = '123'
let aaa: any = '456'

aaa = bbb

console.log(aaa, bbb)
// 如果是any类型在对象没有这个属性的时候还在获取是不会报错的
let obj: any = { b: 1 }
obj.a
console.log(obj.a, obj.b)

// 如果是unknow 是不能调用属性和方法
// let obj1: unknown = { b: 1, ccc: (): number => 213 }
// obj1.b
// obj1.ccc()
