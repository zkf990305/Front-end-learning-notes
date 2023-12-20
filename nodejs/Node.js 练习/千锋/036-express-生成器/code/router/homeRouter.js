const express = require("express")

const router = express.Router()
//路由级别
router.get("/", (req, res) => {
    // res.send("home")

    let list = ["aaa", "bbbb", "ccc", "dddd"]
    let myhtml = "<b>我是加粗<b>"
    res.render("home", {list: list, myhtml: myhtml})
})


router.get('/list', (req, res) => {
    res.send(["111", "222", "333"])
})

router.get("/swiper", (req, res) => {
    res.send("home-swiper")
})

router.get("/slide", (req, res) => {
    res.send("home-slide")
})

module.exports = router
