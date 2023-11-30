const fs = require('fs');

/**
 * 删除文件
 */
fs.unlink('text.txt', (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('File deleted');
  }
});
