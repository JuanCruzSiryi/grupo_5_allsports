const stylesheetDetail = "productDetail.css";
const stylesheetCart = "productCart.css";
const stylesheetRegister = "registerProduct.css";
const stylesheetEdit = "editProduct.css";

const productsController = {
  products: (req, res) => {
    res.render('../views/products/productDetail', {title: "Product-Detail", stylesheetFile: stylesheetDetail})
  },
  productCart: (req, res) => {
    res.render('../views/products/productCart', {title: "Product-Cart", stylesheetFile: stylesheetCart})
  },
  productRegister: (req, res) => {
    res.render('../views/products/productRegister', {title: "Products-Register", stylesheetFile: stylesheetRegister})
  },
  productEdit: (req, res) => {
    res.render('../views/products/productEdit', {title: "Products-Edit", stylesheetFile: stylesheetEdit})
  },
}

module.exports = productsController;