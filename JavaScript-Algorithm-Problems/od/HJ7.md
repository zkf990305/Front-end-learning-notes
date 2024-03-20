## HJ7 取近似值
题目链接：[取近似值](https://www.nowcoder.com/practice/3ab09737afb645cc82c35d56a5ce802a?tpId=37&tqId=21230&rp=1&ru=/exam/oj/ta&qru=/exam/oj/ta&sourceUrl=%2Fexam%2Foj%2Fta%3FtpId%3D37&difficulty=undefined&judgeStatus=undefined&tags=&title=)

描述：

写出一个程序，接受一个正浮点数值，输出该数值的近似整数值。如果小数点后数值大于等于 0.5 ,向上取整；小于 0.5 ，则向下取整。

数据范围：保证输入的数字在 32 位浮点数范围内

输入描述：

输入一个正浮点数值

输出描述：

输出该数值的近似整数值

示例1
```html
输入：5.5

输出：6

说明：0.5>=0.5，所以5.5需要向上取整为6   
```

示例2
```html
输入：2.499

输出：2

说明：0.499<0.5，2.499向下取整为2  
```

## 解题思路 & 编码实现
分割字符串，查看小数点后一位的数字，大于5，整数+1

## 代码

```javascript
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    while(line = await readline()){
        let tokens = line.split('.');
        let res = parseInt(tokens[0]);
        let b = parseInt(tokens[1][0]);
        if(b >= 5){
            res++;
        }
        console.log(res);
    }
}()
```