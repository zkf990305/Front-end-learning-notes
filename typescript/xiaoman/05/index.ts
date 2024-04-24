// 函数的类型
//注意，参数不能多传，也不能少传 必须按照约定的类型来
const fn = (name: string, age: number): string => {
  return name + age
}
fn('张三', 18)
console.log(fn('张三', 18))

// 函数的可选参数？
// 通过？表示该参数为可选参数
const fn1 = (name: string, age?: number): string => {
  return name + age
}
console.log(fn1('张三', 20))
console.log(fn1('李四'))

// 函数参数的默认值
const fn2 = (name: string = '我是默认值'): string => {
  return name
}
console.log(fn2())

// 接口定义函数
interface Add {
  (add: number, summand: number): number
}

const fn3: Add = (add: number, summand: number): number => {
  return add + summand
}

console.log(fn3(1, 2))

interface User {
  name: string
  age: number
  sex: '男' | '女' // 限制性别为男或女
  say: (word: string) => string
}
// 添加数据校验逻辑的getUser函数
const getUser = (user: User): User => {
  // 数据校验: 确保user对象符合User接口定义
  if (
    typeof user.name !== 'string' ||
    typeof user.age !== 'number' ||
    (user.sex !== '男' && user.sex !== '女') ||
    typeof user.say !== 'function'
  ) {
    throw new Error('Invalid user data')
  }

  // 因为数据已经校验，所以这里直接返回传入的user对象是安全的
  return user
}

const user: User = {
  name: '张三',
  age: 18,
  sex: '男',
  say: () => '我是'
}

// 使用try-catch捕获潜在的错误
try {
  console.log(getUser(user))
} catch (error: any) {
  console.error(error.message)
}

// 定义剩余参数
const fn5 = (array: number[], ...items: any[]): any[] => {
  console.log(array, items)
  return items
}

let a: number[] = [1, 2, 3]

fn5(a, '4', '5', '6')

// 函数重载
function fn6(params: number): void

function fn6(params: string, params2: number): void

function fn6(params: any, params2?: any): void {
  console.log(params)

  console.log(params2)
}

fn6(123)

fn6('123', 456)
