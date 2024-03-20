## HJ4 字符串分隔
题目链接：[字符串分隔](https://www.nowcoder.com/practice/d9162298cb5a437aad722fccccaae8a7?tpId=37&tqId=21227&rp=1&ru=/exam/oj/ta&qru=/exam/oj/ta&sourceUrl=%2Fexam%2Foj%2Fta%3FtpId%3D37&difficulty=undefined&judgeStatus=undefined&tags=&title=)

描述：

•输入一个字符串，请按长度为8拆分每个输入字符串并进行输出；

•长度不是8整数倍的字符串请在后面补数字0，空字符串不处理。

输入描述：

连续输入字符串(每个字符串长度小于等于100)

输出描述：

依次输出所有分割后的长度为8的新字符串

示例1
```html
输入：abc

输出：abc00000
```

## 解题思路 & 编码实现
先补0，这样最后长度肯定大于8，最后按长度为8拆分每个输入字符串，多余的0不会显示。

`substring` 的参数一，截取的起始位置；参数二是截取返回这个字符串的结束点，并且不包含这个结束点。

## 代码

```javascript
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    // Write your code here
    while ((line = await readline())) {
        // 先补0，这样最后长度肯定大于8
        let str = line + "00000000";
        // 上边已经补0，i从8开始 保证substring从0开始
        for (let i = 8; i < str.length; i += 8) {
            console.log(str.substring(i - 8, i));
        }
    }
})();
```