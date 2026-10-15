const mongoose = require('mongoose');

const proSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    }
},{timestamps:true})

const proModel = mongoose.model("product",proSchema)

module.exports = proModel

