const express = require("express");

const adminData = require("../routes/admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  const data = {
    prods: adminData.products,
    pageTitle: "Shop",
  };
  res.render("shop", data);
});
module.exports = router;
