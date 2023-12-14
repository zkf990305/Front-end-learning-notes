const express = require('express');

const app = express();

/**
 * send('login') =>
 * res.write('login');
 * +
 * res.end()
 */
app.get('/', (req, res) => {
  //   字符串
  // res.send('Hello World!');
  // html代码片段
  //   res.send('' +
  //       '<html>' +
  //       '<h1>Hello World!</h1>' +
  //       '</html>')
    res.send({
        name: "sail",
        age: 123
    })
});

app.get('/login', (req, res) => {
    res.write('login');
    res.end()
});


const func1 = (req,res,next)=>{
    // 验证用户token过期, cookie过期

    console.log("验证token")
    const isValid = true
    if(isValid){
        res.sail="这是fun1计算的结果"
        next()
    }else{
        //返回错误
        res.send("error")

    }
}
app.use(func1)
const func2 = (req,res)=>{
    // 查询数据库
    // 返回内容
    console.log(res.sail)
    res.send({list:[1,2,3]})
}
app.get("/home",[func2])
app.get("/list",(req,res)=>{
    res.send("list")
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
})
