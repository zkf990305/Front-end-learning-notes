## HJ1 字符串最后一个单词的长度

题目链接：[字符串最后一个单词的长度](https://www.nowcoder.com/practice/8c949ea5f36f422594b306a2300315da?tpId=37&tqId=21224&rp=1&ru=/exam/oj/ta&qru=/exam/oj/ta&sourceUrl=%2Fexam%2Foj%2Fta%3FtpId%3D37&difficulty=undefined&judgeStatus=undefined&tags=&title=)

描述：

计算字符串最后一个单词的长度，单词以空格隔开，字符串长度小于5000。（注：字符串末尾不以空格为结尾）

输入描述：

输入一行，代表要计算的字符串，非空，长度小于5000。

输出描述：

输出一个整数，表示输入字符串最后一个单词的长度。

示例1
```html
输入：hello nowcoder

输出：8

说明：最后一个单词为nowcoder，长度为8   
```

## 解题思路 & 编码实现
空格分割字符串并将结果存入数组，获取数组最后一个元素的索引，返回最后该索引对应元素的单词长度。

## 代码

```javascript
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    // Write your code here
    while ((line = await readline())) {
        // 转数组，最后返回数组中最后一个元素（字符串）的长度
        let tokens = line.split(" ");
        console.log(tokens[tokens.length - 1].length);
    }
})();
```