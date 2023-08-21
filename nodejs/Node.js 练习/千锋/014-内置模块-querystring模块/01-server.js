/**
 * @Author: sail
 * @Description:
 * @Date: create in 2023/6/25 22:45
 */
const str = "name=sail&age=100&location=beijing"

const querystring = require("querystring")

const obj = querystring.parse(str)

console.log(obj)

const myObj = {
    a:1,
    b:2,
    c:3
}

const myStr = querystring.stringify(myObj)
console.log(myStr)


const str1 = 'id=3&city=北京&url=https://www.baidu.com'
const escaped = querystring.escape(str1)

console.log(escaped)


const escape1 = "id%3D3%26city%3D%E5%8C%97%E4%BA%AC%26url%3Dhttps%3A%2F%2Fwww.baidu.com"

const str2 = querystring.unescape(escape1)
console.log(str2)
