
//同步
const express = require("express");
const app = express();

app.use((req,res,next)=>{
    console.log(1)
    next()
    console.log(4)
    res.send("hello")
})
app.use(()=>{
    console.log(3)
})

app.listen(3000)
