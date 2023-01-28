const path = require("path");

const productsController = {
  products: (req, res) => {
     res.render('productDetail')
  }
}

module.exports = productsController;