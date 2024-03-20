## HJ6 质数因子
题目链接：[质数因子](https://www.nowcoder.com/practice/196534628ca6490ebce2e336b47b3607?tpId=37&tqId=21229&rp=1&ru=/exam/oj/ta&qru=/exam/oj/ta&sourceUrl=%2Fexam%2Foj%2Fta%3FtpId%3D37&difficulty=undefined&judgeStatus=undefined&tags=&title=)

描述：

功能:输入一个正整数，按照从小到大的顺序输出它的所有质因子（重复的也要列举）（如180的质因子为2 2 3 3 5 ）

数据范围： 1≤n≤2×10<sup>9</sup>+14

输入描述：

输入一个整数

输出描述：

按照从小到大的顺序输出它的所有质数的因子，以空格隔开。

示例1
```html
输入：180

输出：2 2 3 3 5
```

## 解题思路 & 编码实现
质因子就是质数的因子，也称质因数或质约数。

题干输入的整数因式分解，注意的是因子必须都是质数。

循环到平方根：只要判断一半的数就可以了 如果一半的数都没有，说明该数字是个质数。

## 代码

```javascript
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    while(line = await readline()){
        // 转化为整数
        let tokens = parseInt(line);
        // 平方根
        let sqrtNum = Math.sqrt(tokens);
        // 保存结果
        let result = '';
        for(let i = 2; i <= sqrtNum; i ++) {
            // 获取因子
            while(tokens % i === 0) {
                result += i + ' ';
                tokens /= i;
            }
        }
        if(tokens != 1) {
            result += tokens;
        }
        console.log(result);
    }
}()
```