"use strict";
//record 约束对象的key和value
let obj = {
    c: '唱',
    x: '跳',
    k: 'rap'
};
//嵌套约束
let obj1 = {
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
};
//  ReturnType<Fn> 适用于函数，能够提取函数所返回的类型。
const fn = () => [1, 2, 3, 'sad'];
