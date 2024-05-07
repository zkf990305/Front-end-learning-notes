// infer 推导泛型参数(infer声明只能出现在extends子语句中)
interface User {
  name: string
  age: number
}

type Result = Promise<User>

type PromiseRes<T> = T extends Promise<infer R> ? R : never

// 遇到了多层的情况可以使用递归
// type Result = Promise<Promise<Promise<User>>>

// type PromiseRes<T> = T extends Promise<infer R> ? PromiseRes<R> : T

type r = PromiseRes<Result>

// infer 的协变
let obj = {
  name: 'xiaoman',
  age: 123
}
type protyKey<T> = T extends { name: infer N; age: infer A } ? [N, A] : T

type res = protyKey<typeof obj>

// infer的逆变
type FnType<T> = T extends {
  a: (args: infer U) => void
  b: (args: infer U) => void
}
  ? U
  : never

type T = FnType<{ a: (args: number) => void; b: (args: string) => void }>
