const fs = require('fs');

/**
 * 同步生成文件夹
 */
try {
      fs.mkdirSync('./test')
} catch (e) {
    console.log(e)
}
