const Koa = require("koa");
const views = require('koa-views')
const router = require("./routes/index");
const path = require('path')
const static = require('koa-static')
const app = new Koa();
const bodyParser = require('koa-bodyparser')

// 使用ctx.body解析中间件
app.use(bodyParser())
app.use(static(
    path.join( __dirname,  "public")
))
// 加载模板引擎
app.use(views(path.join(__dirname, './view'), {
    extension: 'ejs'
}))
app.use( async ( ctx ) => {
    let title = 'hello koa2'
    await ctx.render('index', {
        title,
    })
})
// 应用级中间件
app.use(router.routes()).use(router.allowedMethods())
app.listen(3000)
