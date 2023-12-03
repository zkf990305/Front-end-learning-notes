const http = require('http');
const route = require('./route');
// TODO: 调用失败
http.createServer((req, res) => {
  const myURL = new URL(req.url, `http://127.0.0.1`);
  console.log(myURL.pathname);
  try {
    route[myURL.pathname](req, res)
  } catch (e) {
    route["/404"](req, res)
  }
  // route[myURL.pathname](res)
  res.end()
}).listen(3000, () => {
  console.log('server is running at port 3000')
})