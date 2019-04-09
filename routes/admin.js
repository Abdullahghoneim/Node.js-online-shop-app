const express = require("express");
const route = express.Router();

const productController = require("../controllers/products");

route.get("/add-product", productController.addProductsController);

route.post("/add-product", productController.postProductController);

module.exports = route;
