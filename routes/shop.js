const express = require("express");
const router = express.Router();
const productControllers = require("../controllers/products.controller");

router.get("/", productControllers.getAllProducts);

module.exports = router;
