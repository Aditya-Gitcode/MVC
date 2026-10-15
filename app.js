const { connectDb } = require("./db");
const route = require("./routes/productRoutes");
const express = require('express');
connectDb()
const app = express()
app.use(express.json())

app.listen(4000,()=>{
    console.log("running...");
    
})