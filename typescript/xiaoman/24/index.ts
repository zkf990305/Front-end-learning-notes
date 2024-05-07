// TypeScript 泛型工具：提升类型灵活性和重用性

interface User {
  name?: string
  age: number
}
// Partial(可选)
type PartialUser = Partial<User>
//原理
type PratialUser<T, K extends keyof T> = {
  [P in K]?: T[P]
}

// Required(必选)
type RequiredUser = Required<User>
//原理
type CustomRequired<T> = {
  [P in keyof T]-?: T[P]
}

// Pick 提取部分属性
type PickUser = Pick<User, 'age' | 'name'>
//原理
type CoustomPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

// Exclude 排除部分属性
type ExcludeUser = Exclude<'a' | 'b' | 'c', 'c'>
//原理
type CustomExclude<T, K> = T extends K ? never : T
// 为什么是 never
// never 在联合类型会被排除掉的

// Omit 排除部分属性 并且返回新的类型
type OmitUser = Omit<User, 'name'>
//原理
type coustomOmit<T, K> = Pick<T, Exclude<keyof T, K>>
