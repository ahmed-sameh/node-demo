const Product = require("../models/product.model");

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    path: "/admin/add-product",
    pageTitle: "Add Product",
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getAllProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop", {
      products: products,
      path: "/",
      pageTitle: "Shop",
    });
  });
};
