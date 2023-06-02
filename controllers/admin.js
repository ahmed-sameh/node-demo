const Product = require("../models/product");

exports.getAddProduct = (req, res) => {
  res.render("admin/edit-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    editing: false,
  });
};

exports.postAddProduct = (req, res) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;

  req.user
    .createProduct({
      title,
      imageUrl,
      price,
      description,
    })
    .then((result) => {
      console.log("product created succefully !!!");
      res.redirect("/admin/products");
    });
};

exports.getEditProduct = (req, res) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect("/");
  }
  const prodId = req.params.productId;
  req.user
    .getProducts({ where: { id: prodId } })
    .then((products) => {
      if (!products) {
        return res.redirect("/");
      }
      res.render("admin/edit-product", {
        pageTitle: "Edit Product",
        path: "/admin/edit-product",
        editing: editMode,
        product: products[0],
      });
    })
    .catch((err) => console.log(err));
};

exports.postEditProduct = (req, res) => {
  const prodId = req.body.productId;

  Product.findByPk(prodId)
    .then((product) => {
      if (product) {
        product.title = req.body.title;
        product.price = req.body.price;
        product.imageUrl = req.body.imageUrl;
        product.description = req.body.description;

        return product.save();
      } else {
        throw new Error("Product Not Found !!!!");
      }
    })
    .then((result) => {
      console.log("Product Updated !");
      res.redirect("/admin/products");
    })
    .catch((err) => console.log(err));
};

exports.getProducts = (req, res) => {
  req.user.getProducts().then((products) => {
    res.render("admin/products", {
      prods: products,
      pageTitle: "Admin Products",
      path: "/admin/products",
    });
  });
};

exports.postDeleteProduct = (req, res) => {
  const prodId = req.body.productId;

  Product.findByPk(prodId)
    .then((product) => {
      if (product) {
        return product.destroy();
      } else {
        throw new Error("Product Not Found");
      }
    })
    .then((result) => {
      console.log("Product Deleted Succefully !");
      res.redirect("/admin/products");
    })
    .catch((err) => console.log(err));
};
