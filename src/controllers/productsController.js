const fs = require("fs");
const path = require("path");
const productsPath = path.join(__dirname, "../data/products.json");

const productsController = {
  /* CRUD */
  getProducts: () => {
    return JSON.parse(fs.readFileSync(productsPath, "utf-8"));
  },
  index: (req, res) => {
    res.render("../views/products/index", {
      title: "Products List",
      stylesheetFile: "index.css",
      productsList: productsController.getProducts(),
    });
  },
  /* END CRUD */

  products: (req, res) => {
    res.render("../views/products/productDetail", {
      title: "Product-Detail",
      stylesheetFile: "productDetail.css",
    });
  },
  productCart: (req, res) => {
    res.render("../views/products/productCart", {
      title: "Product-Cart",
      stylesheetFile: "productCart.css",
    });
  },
  productRegister: (req, res) => {
    res.render("../views/products/productRegister", {
      title: "Products-Register",
      stylesheetFile: "registerProduct.css",
    });
  },
  productEdit: (req, res) => {
    res.render("../views/products/productEdit", {
      title: "Products-Edit",
      stylesheetFile: "editProduct.css",
    });
  },
};

module.exports = productsController;
