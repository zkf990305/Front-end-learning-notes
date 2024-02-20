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
module.exports = router
