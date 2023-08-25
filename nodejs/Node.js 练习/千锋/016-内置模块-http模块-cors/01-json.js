/**
 * @Author: sail
 * @Description:
 * @Date: create in 2023/6/25 22:58
 */
let http = require("http")
let url = require("url")

http.createServer((req, res) => {
    const urlObj = url.parse(req.url, true)
    console.log(urlObj.query.callback)
    // 跨域
    res.writeHead(200, {
        'content-type': 'application/json;charset=utf-8',
        // cors头
        'Access-Control-Allow-Origin': '*'
    })
    switch (urlObj.pathname) {
        case "/api/aaa":
            res.end(`${JSON.stringify({
                name:"sail",
                age:18
            })}`)
            break;
        default:
            res.end("404")
    }
}).listen(3000)
