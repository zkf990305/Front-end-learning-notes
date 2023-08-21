/**
 * @Author: sail
 * @Description:
 * @Date: create in 2023/6/24 19:08
 */
function renderHTML(url) {
    switch (url) {
        case "/home":
            return `
            <html>
                <div>home页面</div>
            </html>
          `
        case "/list":
            return `
            <html>
                <div>list页面</div>
            </html>
          `
        case "/api/list":
            return `
            ["list1","list2","list3"]
          `
        case "/api/home":
            return `
            {name:"sail"}
          `
        default :
            return `
            <html>
                <div>not found</div>
            </html>
          `
    }
}

module.exports = {
    renderHTML
}
