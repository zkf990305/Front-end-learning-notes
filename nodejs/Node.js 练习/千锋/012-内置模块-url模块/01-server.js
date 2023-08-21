/**
 * @Author: sail
 * @Description:
 * @Date: create in 2023/6/24 19:08
 */
var http = require("http")
const url = require("url")
var moduleRenderHTML = require("./module/renderHTML")
var moduleRenderStatus = require("./module/renderStatus")

// 创建服务器
var server = http.createServer()

server.on("request",(req,res)=>{
    //req 接受浏览器传的参数
    //res 返回渲染的内容

    // res.write("hello wolrd")
    // res.write("hello wolrd22")
    // res.end([1,2,3])

    // res.write("aaaaa")
    if(req.url==="/favicon.ico"){
        // 读取本地图标
        return
    }
    // console.log(url.parse(req.url).pathname,222)
    // http://localhost:3000/api/list?name=sail&age=18
    const urlobj = url.parse(req.url,true)
    console.log(urlobj.query.name, urlobj.query.age)
    const pathname = url.parse(req.url).pathname
    res.writeHead(moduleRenderStatus.renderStatus(pathname), {"Content-Type":"text/html;charset=utf-8"})
    res.write(moduleRenderHTML.renderHTML(pathname))
    res.end()
})

server.listen(3000,()=>{
    console.log("server start")
})



// const url = require('url')
// const urlString = 'https://www.baidu.com:443/ad/index.html?id=8&name=mouse#tag=110'
// // 解析
// const parsedStr = url.parse(urlString)
// console.log(parsedStr)
// // 格式化
// const parsedObj = url.format(parsedStr)
// console.log(parsedObj)

var a = url.resolve('/one/two/three/', 'four')
console.log(a)

var b = url.resolve('http://example.com/aaaa/bbbbb/', '/one')

console.log(b)
