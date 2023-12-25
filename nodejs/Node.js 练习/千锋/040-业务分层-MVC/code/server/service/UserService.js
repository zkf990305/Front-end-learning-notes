const UserModel = require("../model/UserModel")

const UserService = {
    addUser: (username, password, age) => {
        return UserModel.create({
            username, password, age
        })

    },
    updateUser: (id,username, password, age) => {
        return UserModel.updateOne({  id }, {
            username, password, age
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