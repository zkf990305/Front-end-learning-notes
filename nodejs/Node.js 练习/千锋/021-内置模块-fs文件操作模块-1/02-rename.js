const fs = require('fs');
/**
 * 文件夹改名
 */
fs.rename('test','tests',(err) =>{
    if (err) {
        console.log(err);
    } else {
        console.log('Directory rename success');
    }
})
