//异步
const koa = require("koa");
const app = new koa();

app.use(async (ctx,next)=>{
    console.log(1)
    await next()
    console.log(4)
    ctx.body="hello"
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
