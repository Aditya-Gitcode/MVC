const express = require('express');
const { add, display, displayById, edit, deleteData } = require('../controllers/studentController');

const Routes = express.Router()

Routes.post("/add",add)
Routes.get("/",display)
Routes.get("/search",displayById)
Routes.put("/edit",edit)
Routes.delete("/delete",deleteData)

module.exports = Routes