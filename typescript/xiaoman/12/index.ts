// never 类型

// 返回never的函数必须存在无法达到的终点

// 因为必定抛出异常，所以 error 将不会有返回值
function error(message: string): never {
  throw new Error(message)
}
// error('error')
// 因为存在死循环，所以 loop 将不会有返回值
function loop(): never {
  while (true) {}
}
// loop()

// never 与 void 的差异
//void类型只是没有返回值 但本身不会出错
function Void(): void {
  console.log('void')
}
Void()
//只会抛出异常没有返回值
function Never(): never {
  throw new Error('aaa')
}
// Never()

//  never在联合类型中会被直接移除
type A = void | number | never

// never 类型的一个应用场景
type AStr = '中杯' | '大杯' | '超大杯' | '小杯'

function isStarbucks(value: AStr) {
  switch (value) {
    case '中杯':
      break
    case '大杯':
      break
    case '超大杯':
      break
    case '小杯':
      break
    default:
      //是用于场景兜底逻辑
      const error: never = value
      return error
  }
}
isStarbucks('中杯')
