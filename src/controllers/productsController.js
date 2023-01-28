const path = require("path");

const productsController = {
  products: (req, res) => {
    // res.sendFile(path.resolve(__dirname, "../views/index.html"))
    res.render('products')
  }
}

module.exports = productsController;