const Koa = require("koa");
const router = require("./routes/index");
const path = require('path')
const static = require('koa-static')
const app = new Koa();
app.use(static(
    path.join( __dirname,  "public")
))
// 应用级中间件
app.use(router.routes()).use(router.allowedMethods())
app.listen(3000)
