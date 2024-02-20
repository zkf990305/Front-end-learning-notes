const Router = require("koa-router");
const router = new Router();

router.get("/", (ctx) => {
    ctx.body = ["aaa", "bbb", "ccc"]
})
    .put("/:id", (ctx) => {
        ctx.body = {ok: 1, info: "user update"}
    })
    .post("/", (ctx) => {
        ctx.body = {ok: 1, info: "user post"}
    })
    .del("/:id", (ctx) => {
        ctx.body = {ok: 1, info: "user del"}
    })
module.exports = router
