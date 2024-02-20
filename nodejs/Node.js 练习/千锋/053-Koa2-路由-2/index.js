const Koa = require("koa");
const router = require("./routes/index");

const app = new Koa();
// 应用级中间件
app.use(router.routes()).use(router.allowedMethods())
app.listen(3000)
