## HJ9 提取不重复的整数
题目链接：[提取不重复的整数](https://www.nowcoder.com/practice/253986e66d114d378ae8de2e6c4577c1?tpId=37&tqId=21232&rp=1&ru=/exam/oj/ta&qru=/exam/oj/ta&sourceUrl=%2Fexam%2Foj%2Fta%3FtpId%3D37&difficulty=undefined&judgeStatus=undefined&tags=&title=)

描述：

输入一个 int 型整数，按照从右向左的阅读顺序，返回一个不含重复数字的新的整数。

保证输入的整数最后一位不是 0 。

数据范围： 1≤n≤10<sup>8</sup>

  
输入描述：

输入一个int型整数

输出描述：

按照从右向左的阅读顺序，返回一个不含重复数字的新的整数

示例1
```html
输入：9876673

输出：37689
```

## 解题思路 & 编码实现
将输入的字符串转化为数组，进行反转，再将生成的数组存入集合中（去重），对去重后的数组使用join拼接

## 代码

```javascript
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    while(line = await readline()){
        // 将输入的字符串转化为数组，进行反转，再将生成的数组存入集合中（去重），对去重后的数组使用join拼接
        line = [...new Set([...line].reverse())].join("")
        console.log(line);
    }
}()
```