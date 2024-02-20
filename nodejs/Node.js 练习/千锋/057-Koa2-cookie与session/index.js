const Koa = require("koa");
const views = require('koa-views')
const router = require("./routes/index");
const path = require('path')
const static = require('koa-static')
const app = new Koa();
const bodyParser = require('koa-bodyparser')
const session = require('koa-session-minimal')
// 使用ctx.body解析中间件
app.use(bodyParser())
app.use(static(
    path.join( __dirname,  "public")
))
// 加载模板引擎
app.use(views(path.join(__dirname, './view'), {
    extension: 'ejs'
}))
app.use(session({
    key: 'SESSION_ID',
    cookie: {
        maxAge:1000*60
    }
}))
// session判断拦截
app.use(async (ctx, next) => {
    //排除login相关的路由和接口
    if (ctx.url.includes("login")) {
        await next()
        return
    }

    if (ctx.session.user) {
        //重新设置以下sesssion
        ctx.session.mydate = Date.now()
        await next()
    } else {

        ctx.redirect("/login")
    }
})
// app.use( async ( ctx ) => {
//     let title = 'hello koa2'
//     await ctx.render('index', {
//         title,
//     })
// })
// 应用级中间件
app.use(router.routes()).use(router.allowedMethods())
app.listen(3000)
