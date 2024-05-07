"use strict";
// 1. 什么是 发布订阅模式 它是设计模式的其中一种
// 2. 面试经常问得 其次手写这个 它的思想被人们广泛所使用的
// 3. 有谁在用呢 vue2 eventBus $on监听 $emit派发
// 4. electron ipcRenderer ipcMain 通讯
// 5. DOM2 addEventListener removeEventListener
class Emiter {
    constructor() {
        this.events = new Map();
    }
    once(event, callback) {
        // 创建一个自定义函数 通过 on 触发 触发完之后立马通过 off 删除
        const cb = (...args) => {
            callback(...args);
            this.off(event, cb);
        };
        this.on(event, cb);
    }
    on(event, callback) {
        if (this.events.has(event)) {
            // 证明存过了
            const callbackList = this.events.get(event);
            callbackList && callbackList.push(callback);
        }
        else {
            // 否则就是第一次存
            this.events.set(event, [callback]);
        }
    }
    emit(event, ...args) {
        const callbackList = this.events.get(event);
        if (callbackList) {
            callbackList.forEach((callback) => {
                callback(...args);
            });
        }
    }
    off(event, callback) {
        if (this.events.has(event)) {
            const callbackList = this.events.get(event);
            if (callbackList) {
                const index = callbackList.indexOf(callback);
                if (index !== -1) {
                    callbackList.splice(index, 1);
                }
            }
        }
    }
}
const bus = new Emiter();
const fn = (b, n) => {
    console.log(1, b, n);
};
// bus.on('message', fn)
// bus.off('message', fn)
bus.once('message', fn);
// console.log(bus)
bus.emit('message', false, 123);
bus.emit('message', false, 123);
bus.emit('message', false, 123);
bus.emit('message', false, 123);
