const fs = require('fs');
/**
 * 删除文件夹
 */
fs.rmdir('tests', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Directory deleted');
  }
});
