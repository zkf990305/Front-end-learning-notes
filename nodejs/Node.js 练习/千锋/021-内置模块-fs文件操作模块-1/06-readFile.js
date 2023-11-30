const fs = require('fs');

/**
 * 读取文件内容
 */
fs.readFile('01-mkdir.js', 'utf8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
