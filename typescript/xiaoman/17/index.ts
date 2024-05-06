// 引入，如果是默认导出名字随便起
import xxx from './test'
console.log(xxx)

// import obj, { xxx, add } from './test'
// console.log(obj, xxx, add(1, 2))

// 重名问题
import obj, { xxx as bbb, add } from './test'

console.log(bbb)

// 动态引入
if (true) {
  import('./test').then((res) => {
    console.log(res)
  })
}
