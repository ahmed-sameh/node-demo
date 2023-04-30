const express = require("express");
const router = express.Router();
const products = [];

router.get("/add-product", (req, res) => {
  const data = {
    pageTitle: "Add Product",
  };
  res.render("add-product", data);
});

router.post("/add-product", (req, res) => {
  this.products.push(req.body);
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
