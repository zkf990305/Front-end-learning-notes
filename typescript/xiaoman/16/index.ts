// 如果不用export 导出是无法读取其值的
// namespace a {
//   export const Time: number = 1000
//   export const fn = <T>(arg: T): T => {
//     return arg
//   }
//   fn(Time)
// }

// namespace b {
//   export const Time: number = 1000
//   export const fn = <T>(arg: T): T => {
//     return arg
//   }
//   fn(Time)
// }

// a.Time
// b.Time

// 嵌套命名空间
namespace a {
  export namespace b {
    export class Vue {
      parameters: string
      constructor(parameters: string) {
        this.parameters = parameters
      }
    }
  }
}

let v = a.b.Vue
new v('1')
console.log(new v('1').parameters)

// 抽离命名空间

// 简化命名空间
namespace A {
  export namespace B {
    export const C = 1
  }
}

import X = A.B.C
console.log(X)

// 合并命名空间 ———— 重名的命名空间会合并
namespace a1 {
  export const b1 = 123
}

namespace a1 {
  export const b2 = 456
}
