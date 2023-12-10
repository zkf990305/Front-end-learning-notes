const fs = require("fs")
const path = require("path")
const mime = require("mime")

function render(res, path, type = "") {
  res.writeHead(200, {
    "Content-Type": `${type?type:"text/html"};charset=utf8`
  })
  res.write(fs.readFileSync(path, "utf8"))
  res.end()
}


const route = {
  "/login": (req, res) => {
    render(res, "./static/login.html")
  },

  "/home": (req, res) => {
    render(res, "./static/index.html")
  },
  "/404": (req, res) => {
    if (readStaticFile(req, res)) {
      return
    }
    res.writeHead(404, {
      "Content-Type": "text/html;charset=utf8"
    })
    res.write(fs.readFileSync("./static/404.html", "utf8"))
  }
}

// 静态资源管理
function readStaticFile(req, res) {
  // 获取路径
  const myURL = new URL(req.url, "http://localhost")
  // console.log(path.join(__dirname, "static", myURL.pathname));
  const pathname = path.join(__dirname, "/static", myURL.pathname);
  if (myURL.pathname === "/") return false
  if (fs.existsSync(pathname)) {
    // 处理返回结果
    render(res, pathname, mime.getType(myURL.pathname.split(".")[1]))
    return true
  } else {
    return false
  }
}
module.exports = route;