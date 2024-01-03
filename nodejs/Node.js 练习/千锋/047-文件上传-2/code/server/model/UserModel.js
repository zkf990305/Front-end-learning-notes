const mongoose = require("mongoose")
const Schema = mongoose.Schema
const UserType = {
    username:String,
    password:String,
    age:Number,
    avatar:String
}

const UserModel = mongoose.model("user_test",new Schema(UserType))
// 模型user_test 将会对应 user_tests 集合, 
module.exports = UserModel