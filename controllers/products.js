const products = [];

exports.addProductsController = (req, res) => {
  res.render("addProduct");
};

exports.postProductController = (req, res) => {
  products.push({ title: req.body.title });
  console.log(req.body);
  res.redirect("/");
};

exports.shopController = (req, res) => {
  res.render("products", {
    products: products
  });
};
