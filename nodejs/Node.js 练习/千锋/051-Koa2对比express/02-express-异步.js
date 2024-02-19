//异步
const express = require("express");
const app = express();

app.use(async (req,res,next)=>{
    console.log(1)
    await next()
    console.log(4)
    res.send("hello")
})
app.use(async ()=>{
    console.log(2)
    await delay(1)
    console.log(3)
})

function delay(time){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,1000)
    })
}
app.listen(3000)
