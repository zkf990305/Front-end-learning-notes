/**
 * @Author: sail
 * @Description:
 * @Date: create in 2023/6/19 0:12
 */

var moduleA = require('./a')
var moduleB = require('./b')
var moduleC = require('./c')

console.log(moduleA)

console.log(moduleA.upper("sail"))


moduleA.test()
moduleB()
moduleC()
