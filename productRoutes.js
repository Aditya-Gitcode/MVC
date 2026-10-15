const express = require('express');
const { display, add, edit, deleteData } = require('../Controllers/productController');
const route = express.Router()

route.get("./views/products",display)
route.post("./views/addProduct",add)
route.put("./views/editProduct",edit)
route.delete("/delete",deleteData)

module.exports = route