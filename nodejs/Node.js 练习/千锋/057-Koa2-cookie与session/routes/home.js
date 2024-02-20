const Router = require("koa-router");
const router = new Router();

router.get("/", async (ctx) => {
    // console.log(ctx.cookies)
    // 获取cookie
    console.log(ctx.cookies.get("name"))
    // 设置cookie
    ctx.cookies.set("name", "dalian")
//     ctx.body = `
//     <html>
//     <h1>home页面</h1>
// </html>`
    let title = 'hello koa2'
    await ctx.render('index', {
        title,
    })
})


module.exports = router;
