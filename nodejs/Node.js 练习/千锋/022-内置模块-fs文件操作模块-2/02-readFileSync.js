const fs = require('fs');

/**
 * 同步读取文件
 */
try {
    const content = fs.readFileSync('test/text.txt', 'utf-8')
    console.log(content)
    console.log(0)
} catch (e) {
    console.log(e.message)
}
