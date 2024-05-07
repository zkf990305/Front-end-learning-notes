// 1. 什么是 发布订阅模式 它是设计模式的其中一种
// 2. 面试经常问得 其次手写这个 它的思想被人们广泛所使用的
// 3. 有谁在用呢 vue2 eventBus $on监听 $emit派发
// 4. electron ipcRenderer ipcMain 通讯
// 5. DOM2 addEventListener removeEventListener

// // 监听器
// const cb = () => {
//   console.log('出发了')
// }
// document.addEventListener('asd', cb, {
//   once: true
// })

// // 支持删除监听器函数
// document.removeEventListener('asd', cb)

// // 订阅中心
// const e = new Event('asd')

// // 派发
// document.dispatchEvent(e)
// document.dispatchEvent(e)

// 实现 once on emit off 订阅中心 Map<事件的名称, [Function]订阅者集合>
interface I {
  events: Map<string, Function[]> // 订阅中心
  once(event: string, callback: Function): void // 触发一次订阅器
  on(event: string, callback: Function): void // 订阅
  emit(event: string, ...args: any[]): void // 派发
  off(event: string, callback: Function): void // 删除监听器
}

class Emiter implements I {
  events: Map<string, Function[]>
  constructor() {
    this.events = new Map()
  }
  once(event: string, callback: Function): void {
    // 创建一个自定义函数 通过 on 触发 触发完之后立马通过 off 删除
    const cb = (...args: any[]) => {
      callback(...args)
      this.off(event, cb)
    }
    this.on(event, cb)
  }
  on(event: string, callback: Function): void {
    if (this.events.has(event)) {
      // 证明存过了
      const callbackList = this.events.get(event)
      callbackList && callbackList.push(callback)
    } else {
      // 否则就是第一次存
      this.events.set(event, [callback])
    }
  }
  emit(event: string, ...args: any[]): void {
    const callbackList = this.events.get(event)
    if (callbackList) {
      callbackList.forEach((callback) => {
        callback(...args)
      })
    }
  }
  off(event: string, callback: Function): void {
    if (this.events.has(event)) {
      const callbackList = this.events.get(event)
      if (callbackList) {
        const index = callbackList.indexOf(callback)
        if (index !== -1) {
          callbackList.splice(index, 1)
        }
      }
    }
  }
}

const bus = new Emiter()
const fn = (b: boolean, n: number) => {
  console.log(1, b, n)
}
// bus.on('message', fn)
// bus.off('message', fn)
bus.once('message', fn)
// console.log(bus)
bus.emit('message', false, 123)
bus.emit('message', false, 123)
bus.emit('message', false, 123)
bus.emit('message', false, 123)
