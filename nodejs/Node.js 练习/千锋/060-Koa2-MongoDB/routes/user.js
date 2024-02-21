const Router = require("koa-router");
const JWT = require("../util/JWT");
const router = new Router();
const multer = require('@koa/multer');
const UserModel = require("../model/UserModel");
const upload = multer({ dest: 'public/uploads/' })
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
        // ctx.session.user = {
        //     username: username
        // }
        // 设置 token
        const token = JWT.generate({
            _id: '111',
            username: username
        }, "10s")
        // token 返回在 header 中
        ctx.set("Authorization",token)
        ctx.body = {ok: 1, info: "user login"}
    } else {
        ctx.body = {ok: 0, info: "user login error"}
    }

})

router.post("/upload",upload.single('avatar'),
    async (ctx,next)=>{
        console.log(ctx.request.body,ctx.file)
        const {username,password,age} = ctx.request.body
        const avatar = ctx.file?`/uploads/${ctx.file.filename}`:``
        await UserModel.create({
            username,
            password,
            age,
            avatar
        })
        ctx.body={
            ok:1,
            info:"add user success"
        }
    })
module.exports = router
