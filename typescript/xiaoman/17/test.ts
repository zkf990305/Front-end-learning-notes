// 默认导出 导出的东西可以任何类型 一个模块只能出现一个默认导出
export default {
  a: 1
}

export function add<T extends number>(a: T, b: T) {
  return a + b
}

export let xxx = 123
