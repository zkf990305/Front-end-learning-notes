/**
 * @Author: sail
 * @Description:
 * @Date: create in 2023/6/24 19:08
 */
const http = require("http")
const url = require("url")
const { fileURLToPath ,urlToHttpOptions} = require('url');
const moduleRenderHTML = require("./module/renderHTML")
const moduleRenderStatus = require("./module/renderStatus")

// 创建服务器
const server = http.createServer()

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
    // const urlobj = url.parse(req.url,true)
    // console.log(urlobj.query.name, urlobj.query.age)
    // const pathname = url.parse(req.url).pathname
    const myURL = new URL(req.url, 'https://127.0.0.1:3000/');
    console.log(myURL)
    console.log(myURL.searchParams.get('a'));
    // myURL.searchParams.forEach((value, name, searchParams) => {})
    myURL.searchParams.forEach((value, key)=> {
        console.log(key , value)
    })
    const pathname = myURL.pathname
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

// const a = url.resolve('/one/two/three/', 'four')
// console.log(a)
//
// const b = url.resolve('http://example.com/aaaa/bbbbb/', '/one')
//
// console.log(b)


const b = new URL('/one', 'http://example.com/aaaa/bbbbb/')

console.log(b.href)


const myURL = new URL('https://a:b@測試?abc#foo');
console.log(url.format(myURL,{unicode:true,auth:false,fragment:false,search:false}));

console.log(new URL('file://c://你好.txt').pathname);      // 错误: /%E4%BD%A0%E5%A5%BD.txt
console.log(fileURLToPath('file://c://你好.txt'));         // 正确: /你好.txt (POSIX)


const myURL2 = new URL('https://a:b@測試?abc#foo');
console.log(myURL2)
console.log(urlToHttpOptions(myURL2));
