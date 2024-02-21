const Koa = require("koa");
const views = require('koa-views')
const router = require("./routes/index");
const path = require('path')
const static = require('koa-static')
const app = new Koa();
const bodyParser = require('koa-bodyparser')
const session = require('koa-session-minimal')
const JWT = require("./util/JWT");

// 数据库的连接
require('./config/db.config')
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
// token判断拦截
app.use(async(ctx, next) => {
    //排除login相关的路由和接口
    if (ctx.url.includes("login")) {
        await next()
        return
    }
    const token = ctx.headers["authorization"]?.split(" ")[1]
    // console.log(req.headers["authorization"])
    if(token){
        const payload=  JWT.verify(token)
        if(payload){
            //重新计算token过期时间
            const newToken = JWT.generate({
                _id:payload._id,
                username:payload.username
            },"10s")

            ctx.set("Authorization",newToken)
            await next()
        }else{
            ctx.status = 401
            ctx.body = {errCode:-1,errInfo:"token过期"}
        }
    }else{
        await next()
    }
})
// 应用级中间件
app.use(router.routes()).use(router.allowedMethods())
app.listen(3000)
