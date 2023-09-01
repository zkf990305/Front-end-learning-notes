/**
 * @Author: sail
 * @Description:
 * @Date: create in 2023/9/1 23:00
 */

let http = require("http")
let https = require("https")
let url = require("url")
const cheerio = require('cheerio')

function spider(data) {
    // 通过cheerio对获取到的html文本进行解析
    let $ = cheerio.load(data);
    let $movieList = $(".column.content")
    // console.log($movieList)
    let movies = []
    $movieList.each((index, value) => {
        movies.push({
            title: $(value).find('.movie-title .title').text(),
            detail: $(value).find('.detail .actor').text(),
        })
    })

    return JSON.stringify(movies)
}

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
                res.end(spider(data));
            })
            break;
        default:
            res.end("404")
    }
}).listen(3000)

function httpGet(cb) {
    let data = ""
    https.get("https://i.maoyan.com", res => {
        res.on("data", (chunk) => {
            data += chunk;
        })
        res.on("end", () => {
            console.log(data)
            cb(data)
        })
    })
}
