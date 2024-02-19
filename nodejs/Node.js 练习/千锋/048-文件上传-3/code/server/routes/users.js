const express = require('express');
const UserController = require('../controller/UserController');

const router = express.Router();
// 引入 multer
const multer = require('multer')
const upload = multer({ dest: 'public/uploads/' })
/* GET users listing. */
router.get('/', function (req, res) {
  res.send('respond with a resource');
});

/**
 * 
 * @api {method} /api/user 添加用户
 * @apiName addUser
 * @apiGroup usergroup
 * @apiVersion  1.0.0
 * 
 * 
 * @apiParam  {String} username 用户名
 * 
 * @apiParam  {String} password 密码
 * 
 * @apiParam  {Number} age 年龄
 * 
 * @apiParam  {File} avatar 头像
 * 
 * @apiSuccess (200) {Number} ok 标识成功字段
 * 
 * @apiParamExample  {multipart/form-data} Request-Example:
 * {
 *     username : "sail",
 *     password: "123456",
 *     age: 18,
 *     avatar: File
 * }
 * 
 * 
 * @apiSuccessExample {type} Success-Response:
 * {
 *     ok : 1
 * }
 * 
 * @apiSampleRequest true
 */
router.post('/user',
  // POST添加用户
  upload.single('avatar'),
  UserController.addUser

);

//动态路由, 获取id
router.put("/user/:id",
  // PUT 更新用户
  UserController.updateUser

)

router.delete("/user/:id",
  // DELETE 删除用户
  UserController.removeUser
)

router.get("/user/list",
  // GET 获取用户列表
  UserController.getUserList

)

//登录校验

router.post("/login", UserController.login)
router.get("/logout", UserController.logout)

module.exports = router;
