/**
 * @Author: sail
 * @Description:
 * @Date: create in 2023/6/19 0:12
 */

let moduleA = require('./a')
let moduleB = require('./b')
let moduleC = require('./c')

console.log(moduleA)

console.log(moduleA.upper("sail"))


moduleA.test()
moduleB()
moduleC()
