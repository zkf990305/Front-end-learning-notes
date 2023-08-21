/**
 * @Author: sail
 * @Description:
 * @Date: create in 2023/6/18 23:14
 */

function test() {
    console.log("test-aaa")
}

/**
 * 首字母大写
 * @param str
 * @returns {string}
 */
function upper(str) {
    _init()
    return str.substring(0, 1).toUpperCase()+str.substring(1)
}

function _init() {
    console.log("init")
}
