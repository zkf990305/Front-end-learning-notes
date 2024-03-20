## HJ2 计算某字符出现次数

题目链接：[计算某字符出现次数](https://www.nowcoder.com/practice/a35ce98431874e3a820dbe4b2d0508b1?tpId=37&tqId=21225&rp=1&ru=/exam/oj/ta&qru=/exam/oj/ta&sourceUrl=%2Fexam%2Foj%2Fta%3FtpId%3D37&difficulty=undefined&judgeStatus=undefined&tags=&title=)

描述：

写出一个程序，接受一个由字母、数字和空格组成的字符串，和一个字符，然后输出输入字符串中该字符的出现次数。（不区分大小写字母）

数据范围： 1≤n≤1000 

输入描述：

第一行输入一个由字母、数字和空格组成的字符串，第二行输入一个字符（保证该字符不为空格）。

输出描述：

输出输入字符串中含有该字符的个数。（不区分大小写字母）

示例1
```html
输入：ABCabc
	  A

输出：2
```

## 解题思路 & 编码实现
字符串同字符中的字母一起转化为小写，再进行 for 遍历！！！

## 代码

```javascript
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    // Write your code here
    while ((line = await readline())) {
        // 一个由字母、数字和空格组成的字符串 全转化为小写
        let tokens = line.toLowerCase();
        // 接收一个字符
        let str = await readline();
        let count = 0;
        for (const e of tokens) {
            // 不计较大小写
            if (e == str.toLowerCase()) {
                count++;
            }
        }
        console.log(count);
    }
})();
```