const JWT = require("../../../../044-登录鉴权-JWT-2/code/server/util/JWT");
const UserService = require("../service/UserService");

const UserController = {
    addUser: async (req, res) => { // 添加用户
        var user = req.body;
        console.log(user);
        // 插入数据库 -- MongoDB
        const { username, password, age } = req.body
        await UserService.addUser(username, password, age)
        res.send({
            ok: 1
        })

    },
    updateUser: async (req, res) => { // 更新用户
        const {username, password, age } = req.body
        console.log(req.params.id, username, password, age);
        await UserService.updateUser(req.params.id, username, password, age)
        res.send({
            ok: 1
        })
    },
    removeUser: async (req, res) => { // 删除用户
        await UserService.removeUser(req.params.id)
        res.send({
            ok: 1
        })
    },
    getUserList: async (req, res) => { // 获取用户列表
        const { page, limit } = req.query
        const users = await UserService.getUserList(page, limit)
        res.send(
            users
        )
    },
    login: async (req, res) => { // 登录
        const { username, password } = req.body
        const user = await UserService.login(username, password)
        if (user) {
            // 登录成功
            // 设置 token
            const token = JWT.generate({
                _id: user._id,
                username: user.username
            }, "1h")
            // token 返回在 header 中
            res.header("Authorization", token)
            res.send({
                ok: 1,
                msg: "登录成功"
            })
        } else {
            // 登录失败
            res.send({
                ok: 0,
                msg: "用户名或密码错误"
            })
        }
    },
    logout: (
        req, res
      ) => {
        req.session.destroy(() => {
            // 退出登录，清除cookie
          res.clearCookie("sail_session")
          res.send({ ok: 1, msg: "退出登录成功" })
        })
      }
    
}

module.exports = UserController