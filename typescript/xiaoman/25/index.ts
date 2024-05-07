//record 约束对象的key和value

type Key = 'c' | 'x' | 'k'

type Value = '唱' | '跳' | 'rap' | '篮球'

let obj: Record<Key, Value> = {
  c: '唱',
  x: '跳',
  k: 'rap'
}
// 原理
type CustomRecord<K extends keyof any, T> = {
  [P in K]: T
}

//嵌套约束
let obj1: CustomRecord<Key, Record<Key, Value>> = {
  c: {
    c: '唱',
    x: '跳',
    k: 'rap'
  },
  x: {
    c: '唱',
    x: '跳',
    k: 'rap'
  },
  k: {
    c: '唱',
    x: '跳',
    k: 'rap'
  }
}

//  ReturnType<Fn> 适用于函数，能够提取函数所返回的类型。
const fn = () => [1, 2, 3, 'sad']

type num = ReturnType<typeof fn>

// 原理
type CustomFn<F extends Function> = F extends (...args: any[]) => infer Res
  ? Res
  : never
