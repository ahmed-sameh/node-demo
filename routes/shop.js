const path = require("path");
const express = require("express");
const rootDir = require("../util/path");

const router = express.Router();
const adminData = require("./admin");

router.get("/", (req, res, next) => {
  res.render("shop", { products: adminData.products, path: "/" });
  // res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
