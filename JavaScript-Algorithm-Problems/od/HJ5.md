## HJ5 进制转换
题目链接：[进制转换](https://www.nowcoder.com/practice/8f3df50d2b9043208c5eed283d1d4da6?tpId=37&tqId=21228&rp=1&ru=/exam/oj/ta&qru=/exam/oj/ta&sourceUrl=%2Fexam%2Foj%2Fta%3FtpId%3D37&difficulty=undefined&judgeStatus=undefined&tags=&title=)

描述：

写出一个程序，接受一个十六进制的数，输出该数值的十进制表示。

数据范围：保证结果在 1≤n≤2<sup>31</sup> -1

 
输入描述：

输入一个十六进制的数值字符串。

输出描述：

输出该数值的十进制字符串。不同组的测试用例用\n隔开。

示例1
```html
输入：0xAA

输出：170
```

## 解题思路 & 编码实现
Number.parseInt() 方法可以根据给定的进制数把一个字符串解析成整数。

## 代码

```javascript
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    while(line = await readline()){
        console.log(Number.parseInt(line + "", 16));
    }
}()
```