const products = [];

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    path: "/admin/add-product",
    pageTitle: "Add Product",
  });
};

exports.postAddProduct = (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
};

exports.getAllProducts = (req, res, next) => {
  res.render("shop", {
    products: products,
    path: "/",
    pageTitle: "Shop",
  });
};
