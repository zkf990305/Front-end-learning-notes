var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// 引入session模块
var session = require('express-session');
const MongoStore = require("connect-mongo");
const JWT = require('./util/JWT');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// 注册session中间件
app.use(
  session({
    name: 'sail_session',
    secret: "this is test session", // 服务器生成 session 的签名
    resave: true,
    saveUninitialized: true, //强制将为初始化的 session 存储
    cookie: {
      maxAge: 1000 * 60 * 10,// 过期时间
      secure: false, // 为 true 时候表示只有 https 协议才能访问cookie
    },
    rolling: true, //为 true 表示 超时前刷新，cookie 会重新计时； 为 false 表示在超时前刷新多少次，都是按照第一次刷新开始计时。
    store: MongoStore.create({
      mongoUrl: 'mongodb://127.0.0.1:27017/sail_session', // 新创建的数据库
      ttl: 1000 * 60 * 10 // 过期时间
    }),

  })
);
// 中间件 过期检验
// app.use((req, res, next) => {
//   if (req.url.includes("login")) {
//     next()
//     return;
//   }
//   if (req.session.user) {
//     req.session.garbage = Date.now();
//     next();
//   } else {
//     // 是接口，返回错误信息
//     // 是页面，跳转到登录页面
//     req.url.includes("api") ? res.status(401).send({ ok: 0, msg: "登录过期" }) :
//       res.redirect("/login")
//   }
// })

//node中间件校验
app.use((req,res,next)=>{
  // 如果token有效 ,next() 
  // 如果token过期了, 返回401错误
  if (req.url.includes("login")) {
    next()
    return;
  }

  const token = req.headers["authorization"]?.split(" ")[1]
  if(token){
    var payload = JWT.verify(token)
    // console.log(payload)
    if(payload){
      const newToken = JWT.generate({
        _id:payload._id,
        username:payload.username
      },"1d")
      res.header("Authorization",newToken)
      next()
    }else{
      res.status(401).send({errCode:"-1",errorInfo:"token过期"})
    }
  }else {
    next()
  }
})

app.use('/', indexRouter);
app.use('/api', usersRouter);
app.use('/login', loginRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
