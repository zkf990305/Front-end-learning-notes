/**
 * @Author: sail
 * @Description:
 * @Date: create in 2023/6/24 19:08
 */

const http = require("http")

// 创建服务器
http.createServer((req, res) => {
    // req 接受浏览器传的参数
    // res 返回渲染的内容
    // res.write("hello world")
    // res.write("hello world22")
    // res.end([1,2,3])

    // res.write("aaaaa")
    res.writeHead(200, {"Content-Type": "text/html;charset=utf-8"})
    res.write(`
        <html>
            <b>hello world</b>
            <div>大家好</div>
    </html>
    `)
    res.end()


}).listen(3000, () => {
    console.log("server start")
})
