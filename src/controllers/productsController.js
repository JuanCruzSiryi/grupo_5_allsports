const path = require("path");

const productsController = {
  products: (req, res) => {
     res.render('../views/products/productDetail.')
  }
}

module.exports = productsController;