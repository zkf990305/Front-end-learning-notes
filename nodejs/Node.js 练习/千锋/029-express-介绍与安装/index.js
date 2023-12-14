const express = require('express');

const app = express();

/**
 * send('login') =>
 * res.write('login');
 * +
 * res.end()
 */
app.get('/', (req, res) => {
  //   字符串
  // res.send('Hello World!');
  // html代码片段
  //   res.send('' +
  //       '<html>' +
  //       '<h1>Hello World!</h1>' +
  //       '</html>')
    res.send({
        name: "sail",
        age: 123
    })
});

app.get('/login', (req, res) => {
    res.write('login');
    res.end()
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
})
