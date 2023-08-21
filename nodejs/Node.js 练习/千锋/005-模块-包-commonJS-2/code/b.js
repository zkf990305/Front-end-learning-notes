/**
 * @Author: sail
 * @Description:
 * @Date: create in 2023/6/18 23:14
 */
var moduleA = require('./a.js')
function test() {
    console.log("test-bbb")
}

console.log(moduleA.upper('kevin'))
module.exports = test
