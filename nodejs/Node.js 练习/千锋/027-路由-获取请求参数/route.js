const fs = require("fs")
const path = require("path")

function render(res, path) {
  res.writeHead(200, {
    "Content-Type": "text/html;charset=utf8"
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
    res.writeHead(404, {
      "Content-Type": "text/html;charset=utf8"
    })
    res.write(fs.readFileSync("./static/404.html", "utf8"))
  }
}

module.exports = route;