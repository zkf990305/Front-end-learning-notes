## HJ8 合并表记录
题目链接：[合并表记录](https://www.nowcoder.com/practice/de044e89123f4a7482bd2b214a685201?tpId=37&tqId=21231&rp=1&ru=/exam/oj/ta&qru=/exam/oj/ta&sourceUrl=%2Fexam%2Foj%2Fta%3FtpId%3D37&difficulty=undefined&judgeStatus=undefined&tags=&title=)

描述：

数据表记录包含表索引index和数值value（int范围的正整数），请对表索引相同的记录进行合并，即将相同索引的数值进行求和运算，输出按照index值升序进行输出。


提示:

0 <= index <= 11111111

1 <= value <= 100000

输入描述：

先输入键值对的个数n（1 <= n <= 500）

接下来n行每行输入成对的index和value值，以空格隔开

输出描述：

输出合并后的键值对（多行）

示例1
```html
输入：  4
		0 1
		0 2
		1 2
		3 4

输出：  0 3
		1 2
		3 4

```

示例2
```html
输入：  3
		0 1
		0 2
		8 9

输出：  0 3
		8 9
```

## 解题思路 & 编码实现
将输入的n个键值对对应进行分割，下标index已存在的,对应值为arrRes[index] = arrRes[index]  + values; 下标index不存在的,对应值为arrRes[index] = 0 + values。最后按照下标（对应index值）遍历输出。

## 代码

```javascript
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    // Write your code here
    while ((line = await readline())) {
        let n = parseInt(line);
        // 保存对象数组
        let arrRes = [];
        for (let i = 0; i < n; i++) {
            line = await readline();
            line = line.split(" ");
            // 分割 键-值
            let index = parseInt(line[0]);
            let values = parseInt(line[1]);
            arrRes[index] = (arrRes[index] || 0) + values;
        }
        // 数组保存，下标已经有序
        for (let i = 0; i < arrRes.length; i++) {
            if (arrRes[i] !== undefined) {
                console.log(i + " " + arrRes[i]);
            }
        }
    }
})();
```
