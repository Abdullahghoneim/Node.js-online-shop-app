const express = require("express");
const route = express.Router();

const products = [];

route.get("/add-product", (req, res) => {
  res.render("addProduct");
});

route.post("/product", (req, res) => {
  products.push({ title: req.body.title });
  console.log(req.body);
  res.redirect("/");
});

exports.routes = route;
exports.products = products;
