const mongoose = require('mongoose');

const stuSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    course:{
        type:String,
        required:true
    },
    fess:{
        type:Number,
        required:true
    }
},{timestamps:true})

const stuModel = mongoose.model("student",stuSchema)

module.exports = stuModel

