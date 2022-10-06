const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost/users_crud')

const UserSchema = new mongoose.Schema({
    name:String,
    username:String,
    email:String,
    password:String
},{timestamps:true})


module.exports = mongoose.model('user',UserSchema)