const express = require("express");
const route = express.Router();

const productsController = require("../controllers/products");

route.get("/", productsController.shopController);

module.exports = route;
