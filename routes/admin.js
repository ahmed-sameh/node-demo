const express = require("express");
const router = express.Router();
const productController = require("../controllers/products.controller");

router.get("/add-product", productController.RenderAddProduct);

router.post("/add-product", productController.AddProduct);

module.exports = router;
