const stuModel = require("../models/student");
const express = require('express');
const app = express()
app.use(express.json)

const add = async(req,res) =>{
    try{
    const {name,email,age,course,fees} = req.body
    await stuModel.create({name,email,age,course,fees})
    res.json("Data Inserted")
    }catch(err){
        console.log(err);
    }
}

const display = async(req,res) =>{
    try{
    const data = await stuModel.find()
    res.json(data)
    }catch(err){
        console.log(err);
    }
}

const displayById = async(req,res) =>{
    try{
    const data = await stuModel.findById(req.params.id)
    res.json(data)
    }catch(err){
        console.log(err);
    }
}

const edit = async(req,res) =>{
    try{
    await stuModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.json("Data Updated")
    }catch(err){
        console.log(err);
    }
}

const deleteData = async(req,res) =>{
    try{
    await stuModel.findByIdAndDelete(req.params.id)
    res.json("Data Deleted")
    }catch(err){
        console.log(err);
    }
}

module.exports = {add,display,displayById,edit,deleteData}