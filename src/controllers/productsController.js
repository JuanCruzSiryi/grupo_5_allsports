const stylesheetDetail = "productDetail.css";
const stylesheetCart = "productCart.css";
const stylesheetRegister = "register.css";

const productsController = {
  products: (req, res) => {
    res.render('../views/products/productDetail', {title: "Product-Detail", stylesheetFile: stylesheetDetail})
  },
  productCart: (req, res) => {
    res.render('../views/products/productCart', {title: "Product-Cart", stylesheetFile: stylesheetCart})
  },
  productRegister: (req, res) => {
    res.render('../views/products/productRegister', {title: "Products-Register", stylesheetFile: stylesheetRegister})
  }
}

module.exports = productsController;