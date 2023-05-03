const Product = require("../models/product.model");

exports.RenderAddProduct = (req, res) => {
  const data = {
    pageTitle: "Add Product",
  };
  res.render("add-product", data);
};

exports.AddProduct = (req, res) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

exports.GetProducts = (req, res) => {
  Product.fetchAll((products) => {
    const data = {
      prods: products,
      pageTitle: "Shop",
    };
    res.render("shop", data);
  });
};
