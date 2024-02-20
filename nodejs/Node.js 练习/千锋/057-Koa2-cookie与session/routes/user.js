const Router = require("koa-router");
const router = new Router();

router.get("/", (ctx) => {
    // 获取前端传来的数据
    console.log(ctx.query, ctx.querystring)
    ctx.body = ["aaa", "bbb", "ccc"]
})
    .put("/:id", (ctx) => {
        ctx.body = {ok: 1, info: "user update"}
    })
    .post("/", (ctx) => {
        console.log(ctx.request.body) // 获取前端传来的数据
        ctx.body = {ok: 1, info: "user post"}
    })
    .del("/:id", (ctx) => {
        ctx.body = {ok: 1, info: "user del"}
    })

router.post("/login", (ctx) => {
    console.log(ctx.request.body) // 获取前端传来的数据

    const {username, password} = ctx.request.body
    if (username === "admin" && password === "123456") {
        // 设置sessionId
        ctx.session.user = {
            username: username
        }
        ctx.body = {ok: 1, info: "user login"}
    } else {
        ctx.body = {ok: 0, info: "user login error"}
    }

})
module.exports = router
