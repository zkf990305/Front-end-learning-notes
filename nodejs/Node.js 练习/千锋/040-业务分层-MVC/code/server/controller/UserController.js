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
    }
}

module.exports = UserController