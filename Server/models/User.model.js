const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    email:{type:String,required:true},
    watchList:[{type:mongoose.Schema.Types.ObjectId,ref:"Anime"}],
    createdAt:{type:Date,default:Date.now}
})

const User = mongoose.model("User",UserSchema)
module.exports = User