const Router = require("koa-router");
const router = new Router();
const user = require("./user");
const list = require("./list");
const home = require("./home");
const login = require("./login");
// 路由前缀 统一加前缀
// router.prefix('/api')
//  先注册路由级组件
router.use('/user', user.routes(), user.allowedMethods())
router.use('/list', list.routes(), list.allowedMethods())
router.use('/home', home.routes(), home.allowedMethods())
router.use('/login', login.routes(), login.allowedMethods())
//写法1
router.redirect('/', '/home'); // 路由重定向
//写法2
// router.get("/", (ctx) => {
//     ctx.redirect("/home")
// })
module.exports = router
