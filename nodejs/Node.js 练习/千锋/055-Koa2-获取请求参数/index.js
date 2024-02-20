const Koa = require("koa");
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
// 应用级中间件
app.use(router.routes()).use(router.allowedMethods())
app.listen(3000)
