/**
 * @Author: sail
 * @Description:
 * @Date: create in 2023/6/24 19:08
 */
function renderStatus(url){
    var arr = ["/home","/list","/api/home","/api/list"]
    return arr.includes(url) ? 200 : 404
}


exports.renderStatus = renderStatus
