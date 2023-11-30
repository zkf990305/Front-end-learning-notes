const fs = require('fs');

/**
 * 给文件追加内容
 */
fs.appendFile('text.txt', 'Hello Node.js', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('The file has been saved!');
  }
});
