// 数字枚举
// enum Types {
//   Red,
//   Green,
//   Blue
// }
// enum Types {
//   Red = 0,
//   Green = 1,
//   BLue = 2
// }
//默认就是从0开始的 可以不写值

enum Types {
  Red = 1,
  Green,
  BLue
} // 增长枚举
console.log(Types)

// 字符串枚举
enum StrTypes {
  Red = 'red',
  Green = 'green',
  BLue = 'blue'
}
console.log(StrTypes)

// 异构枚举
enum Types {
  No = 'No',
  Yes = 1
}
console.log(Types)

// 接口枚举
enum Types {
  yyds,
  dddd
}
interface A {
  red: Types.yyds
}

let obj: A = {
  red: Types.yyds
}
console.log(obj)

// const枚举
const enum ConstTypes {
  No = 'No',
  Yes = 1
}

// 反向映射
enum Enum {
  fall
}
let a = Enum.fall
console.log(a) //0
let nameOfA = Enum[a]
console.log(nameOfA) //fall
