const Router = require("koa-router");
const router = new Router();

router.get("/", async (ctx) => {

    let title = 'upload koa2'
    await ctx.render('upload', {
        title,
    })
})


module.exports = router;
