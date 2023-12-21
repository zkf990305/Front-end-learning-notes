const UserModel = require("../model/UserModel")

const UserService = {
    addUser: (username, password, age) => {
        return UserModel.create({
            username, password, age
        })

    },
    updateUser: (id, username, age, password) => {
        return UserModel.updateOne({  id }, {
            username, age, password
        })
    },
    removeUser: (_id) => {
        return UserModel.deleteOne({
            _id:_id
        })
    },
    getUserList: (page, limit) => {
        return UserModel.find({},["username","age"]).sort({age:-1}).skip((page-1)*limit).limit(limit)
    }
}

module.exports = UserService