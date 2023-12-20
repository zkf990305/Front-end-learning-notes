var express = require('express');
const UserModel = require('../model/UserModel');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/user/add', function(req, res, next) { // 添加用户
  var user = req.body;
  console.log(user);
  // 插入数据库 -- MongoDB
  const { username, password, age} = req.body
  UserModel.create({username, password, age}).then(data=>{
    console.log(data);
    res.send({msg:'添加用户成功', ok:1});
  })


  // res.send({msg:'添加用户成功', ok:1});
});

module.exports = router;
