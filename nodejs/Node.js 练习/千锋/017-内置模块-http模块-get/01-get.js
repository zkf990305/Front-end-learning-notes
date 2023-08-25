/**
 * @Author: sail
 * @Description: 创建 get 服务器
 * @Date: create in 2023/8/25 23:48
 */
let http = require("http")
let https = require("https")
let url = require("url")

http.createServer((req, res) => {
    const urlObj = url.parse(req.url, true)

    // 跨域
    res.writeHead(200, {
        'content-type': 'application/json;charset=utf-8',
        // cors头
        'Access-Control-Allow-Origin': '*'
    })
    switch (urlObj.pathname) {
        case "/api/aaa":
            // 客户端 去猫眼要数据
            httpGet((data) => {
                res.end(data)
            })
            break;
        default:
            res.end("404")
    }
}).listen(3000)

function httpGet(cb) {
    let data = ""
    https.get("https://i.maoyan.com/api/mmdb/movie/v3/list/hot.json?ct=%E4%B8%9C%E8%8E%9E&ci=91&channelId=4", res => {
        res.on("data", (chunk) => {
            data += chunk;
        })
        res.on("end", () => {
            console.log(data)
            cb(data)
        })
    })
}
