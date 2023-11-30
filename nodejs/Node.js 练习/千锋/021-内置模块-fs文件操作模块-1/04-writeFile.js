const fs = require('fs');

/**
 * 写内容到文件里
 */
fs.writeFile('text.txt', 'Hello, World!', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('File was created');
  }
});

/**
 * 批量写文件
 */
for (let i = 0; i < 10; i++) {
  fs.writeFile(`text${i}.txt`, `Hello, World! ${i}`, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('File was created');
    }
  });
}
