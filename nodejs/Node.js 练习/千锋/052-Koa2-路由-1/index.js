const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa();
const router = new Router();

router.get("/user", (ctx) => {
    ctx.body = ["aaa", "bbb", "ccc"]
})
    .put("/user/:id", (ctx) => {
        ctx.body = {ok: 1, info: "user update"}
    })
    .post("/user", (ctx) => {
        ctx.body = {ok: 1, info: "user post"}
    })
    .del("/user/:id", (ctx) => {
        ctx.body = {ok: 1, info: "user del"}
    })

router.post("/list", (ctx) => {
    ctx.body = ["111", "222", "333"]
})

// 增加处理 GET 请求的路由
router.get("/items", (ctx) => {
    ctx.body = [
        {id: 1, name: "Item 1"},
        {id: 2, name: "Item 2"},
        {id: 3, name: "Item 3"},
    ]; // 返回 JSON 格式的数组
});
app.use(router.routes()).use(router.allowedMethods())
app.listen(3000)
