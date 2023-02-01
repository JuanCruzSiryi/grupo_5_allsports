const path = require("path");

const productsController = {
  products: (req, res) => {
     res.render('../views/products/productDetail')
  },
  productCart: (req, res) => {
    res.render('../views/products/productCart')
 },
 productRegister: (req, res) => {
   res.render('../views/products/productRegister')
 }
}

module.exports = productsController;