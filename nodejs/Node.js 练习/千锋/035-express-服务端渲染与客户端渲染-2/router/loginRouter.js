const express = require("express")

const router = express.Router()
//路由级别-响应前端的get请求
router.get("/", (req, res) => {
    // new URL
    // console.log(req.query)
    // res.send("login-success")

    //渲染模板后返回给前端
    res.render("login", {error: "", isShow: false})//找views文件夹下的login.ejs
})

////路由级别-响应前端的post请求
router.post("/", (req, res) => {
    console.log(req.body)//必须配置中间件
    const {username, password} = req.body
    if (username === "sail" && password === "123456") {
        console.log("登录成功")
        res.redirect("/home")

        // res.send({ok: 1})
    } else {
        console.log("登录失败")
        res.render("login", {error: "用户名密码不匹配", isShow: true})
        // res.send({ok: 0})
    }

})

//路由级别-响应前端的put ,delete请求


module.exports = router
