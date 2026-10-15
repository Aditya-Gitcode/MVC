const mongoose = require('mongoose');
const connectDb = () =>{
    mongoose.connect("mongodb://localhost:27017/I1_PdtMgmt").then(() => {
        console.log("Connected...");
    }).catch((err) => {
        console.log(err);
    });
}

module.exports = {connectDb}