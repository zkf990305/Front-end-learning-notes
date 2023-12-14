const express = require("express")
const app = express()
const HomeRouter = require("./router3/homeRouter")
const LoginRouter = require("./router3/loginRouter")


//应用级别
app.use(function(req,res,next){
    console.log("验证token")
    next()
})
//应用级别
app.use("/home",HomeRouter)
app.use("/login",LoginRouter)

app.use((req,res)=>{
    res.status(404).send("丢了")
})
app.listen(3000,()=>{
    console.log("server start")
})

