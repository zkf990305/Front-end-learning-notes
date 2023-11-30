
const http = require('http')
const fs = require('fs')
const zlib = require('zlib')
const gzip = zlib.createGzip()



http.createServer((req, res) => {
    // res 可写流
    const readstream = fs.createReadStream('./index.txt')
    res.writeHead(200, {
        'Content-Type': 'text/plain',
        'charset': 'utf-8',
        'Content-Encoding': 'gzip'
    })
    readstream.pipe(gzip).pipe(res)

}).listen(3000,()=>{
    console.log('server is running at port 3000')
})
