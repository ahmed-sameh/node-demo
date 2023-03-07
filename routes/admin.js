const express = require("express");
const router = express.Router();
const productControllers = require("../controllers/products.controller");

// /admin/add-product => GET
router.get("/add-product", productControllers.getAddProduct);

// /admin/add-product => POST
router.post("/add-product", productControllers.postAddProduct);

module.exports = router;
