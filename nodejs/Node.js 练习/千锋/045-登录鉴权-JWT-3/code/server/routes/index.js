var express = require('express');
const JWT = require('../util/JWT');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/**
 * 测试 token 的加密与验证过程
 */
// var jwt = require('jsonwebtoken');
// const token = jwt.sign({
//   data: 'foobar'
// }, 'anydata', { expiresIn: '10s' });
// console.log(token);

// setTimeout(() => { 
//   var decoded = jwt.verify(token, 'anydata');
//   console.log(decoded) 
// }, 9000);

// setTimeout(() => { 
//   var decoded = jwt.verify(token, 'anydata');
//   console.log(decoded) 
// }, 11000);

const token = JWT.generate({ data: 'foobar' }, '10s');
console.log(token);
console.log(JWT.verify(token));

// setTimeout(() => {
//   console.log(JWT.verify(token));
// }, 90000)
// setTimeout(() => {
//   console.log(JWT.verify(token));
// }, 110000)
module.exports = router;
