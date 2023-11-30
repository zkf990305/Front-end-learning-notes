const fs = require('fs');
/**
 *  创建文件夹
 */
fs.mkdir('test', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Directory created');
  }
});
