const Router = require("koa-router");
const router = new Router();

router.get("/", async (ctx) => {

    let title = 'login koa2'
    await ctx.render('login', {
        title,
    })
})


module.exports = router;
