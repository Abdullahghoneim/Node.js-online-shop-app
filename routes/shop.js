const express = require("express");
const route = express.Router();
const adminData = require("./admin");

route.get("/", (req, res) => {
  const products = adminData.products;
  res.render("products", {
    products: products
  });
});

module.exports = route;
