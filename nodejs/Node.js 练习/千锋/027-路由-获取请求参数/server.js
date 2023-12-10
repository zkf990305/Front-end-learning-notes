const http = require('http');

const Router = {}
// express use
function use(obj) {
  Object.assign(Router, obj)
}

// TODO: 调用失败
function start() {
  http.createServer((req, res) => {
    const myURL = new URL(req.url, `http://127.0.0.1`);
    console.log(myURL.pathname);
    try {
      Router[myURL.pathname](req, res)
    } catch (e) {
      Router["/404"](req, res)
    }
    // route[myURL.pathname](res)
    // res.end()
  }).listen(3000, () => {
    console.log('server is running at port 3000')
  })
}

exports.start = start
exports.use = use