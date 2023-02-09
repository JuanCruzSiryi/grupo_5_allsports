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
      stylesheetFile: "productList.css",
      productsList: productsController.getProducts(),
    });
  },
  edit: (req, res) => {
    let productId = req.params.id;
    let product = productsController.getProducts().find((product) => product.id == productId);

    res.render("../views/products/edit", {
      title: "Mi product",
      stylesheetFile: "editProduct.css",
      product
    });
  },
  update: (req, res) => {
    let productId = req.params.id;
    console.log("body: ", req.body);
    let products = productsController.getProducts();

    products.forEach((product, index) => {
      if (product.id == productId) {
        product.name = req.body.nameProduct || "sin nombre";
        product.description = req.body.descProduct || "sin descripcion";
        product.price = req.body.priceProduct || 0;

        products[index] = product;
      }
    });

    fs.writeFileSync(productsPath, JSON.stringify(products, null, "  "));

    res.redirect("/products");
  },

  delete: (req, res) => {
    let productId = req.params.id;
    let product = productsController.getProducts().find((product) => product.id == productId);
    res.render('products/delete', {
      title: "Borrar producto",
      stylesheetFile: "editProduct.css",
      product
    });
  },
  destroy: (req, res) => {
    let productId = req.params.id;
    let products = productsController.getProducts();
    let newProducts = products.filter(product => product.id != productId)

    fs.writeFileSync(productsPath, JSON.stringify(newProducts, null, "  "));

    res.redirect("/products");
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
