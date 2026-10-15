const proModel = require("../models/Product");
const express = require('express');
const app = express()
app.use(express.json())

const display = async(req,res) =>{
    try {
        const data = await proModel.find()
        res.json(data)
    } catch (error) {
        console.log(error);
    }
}

const add = async(req,res) =>{
    try {
        const {name,description, price, category, quantity} = req.body
        await proModel.create({name,description, price, category, quantity})
        res.json("Data Inserted")
    } catch (error) {
        console.log(error);
    }
}

const edit = async(req,res) =>{
    try {
        await proModel.findByIdAndUpdate(req.params.id,req,body,{new:true})
        res.json("Data Updated")
    } catch (error) {
        console.log(error);
    }
}

const deleteData = async(req,res) =>{
    try {
        await proModel.findByIdAndDelete(req.params.id)
        res.json("Data Updated")
    } catch (error) {
        console.log(error);
    }
}

module.exports = {display,add,edit,deleteData}