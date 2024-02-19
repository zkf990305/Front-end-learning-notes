const Koa = require('koa')
const app = new Koa()
// ctx === context上下文
app.use( async ( ctx ) => {
    // ctx.body = 'hello koa2' //json数据
    // ctx.body = "<b>hello world</b>" // 代码片段
    ctx.body = {
        msg: 'hello koa2'
    }
})

app.listen(3000)
