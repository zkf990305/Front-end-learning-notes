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
    switch (urlObj.pathname) {
        case "/api/aaa":
            res.end(`${urlObj.query.callback} (${JSON.stringify({
                name:"sail",
                age:18
            })})`)
            break;
        default:
            res.end("404")
    }
})
