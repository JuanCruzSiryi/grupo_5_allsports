const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const productsPath = path.join(__dirname, "../data/products.json");

const {Product} = require('../database/models');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const Products = db.Products;
const Categories = db.Categories;
const Brands = db.Brands;
const Product_user = db.Product_user;
const Sizes = db.Sizes;
const Colors = db.Colors
const Tags = db.Tags


const productsController = {
  /* CRUD */
  getProducts: () => {
    return JSON.parse(fs.readFileSync(productsPath, "utf-8"));
  },
  index: (req, res) => {
    res.render("../views/products/index", {
      title: "Products List",
      stylesheetFile: "/products/index.css",
      productsList: productsController.getProducts(),
    });
  },
  list: (req, res) => {
    Product.findAll()
      .then(products => {
        res.send(products)
      })
  },
  show: (req, res) => {
    let productId = req.params.id;
    let product = productsController.getProducts().find((product) => product.id == productId);

    res.render("products/show", {
      title: "Mi Producto",
      stylesheetFile: "/products/show.css",
      product
    });
    
  },

  create: (req, res) => {
    res.render('products/create', {
    title: "Crear producto",
    stylesheetFile: "registerProduct.css"
  });
  },
  store: (req, res) => {
    let products = productsController.getProducts();
    let image = req.file? req.file.filename : "default-product.png";

    let newProduct = {
      "id": uuidv4(),
      "name": req.body.nameProduct || "sin nombre",
      "description": req.body.descProduct || "sin descripcion",
      "price": req.body.priceProduct || 0,
      "image": image,
      "category": req.body.categoryProduct || "sin categoria",
      "brand": req.body.brand || "sin marca",
      "color": req.body.color || "sin color",
      "size": req.body.talles || "sin talle",
      "available": true
    };

    products.push(newProduct)
    fs.writeFileSync(productsPath, JSON.stringify(products, null, "  "));
    res.redirect("/products");

    // CRUD NUEVO

    // store: (req, res) {
    //   const _body = {
    //     name: req.body.nameProduct,
    //     description: req.body.descProduct,
    //     brand_id: req.body.brandProduct,
    //     category_id: req.body.name.categoryProduct,
    //     tag_id: req.body.name.tags,
    //     color_id: req.body.name.color,
    //     image: req.body.image,
    //     price: req.body.priceProduct,
    //     size_id: req.body.talles,
    //     discount: req.body.discount,
    //     state: req.body.state
    //   }
    //   db.Product.create(_body)
    //    .then(() => {
    //        res.redirect('/products')
    //    })
    //    .catch(error => res.send('error'));
    // }

  },
  edit: (req, res) => {
    let productId = req.params.id;
    let product = productsController.getProducts().find((product) => product.id == productId);

    res.render("../views/products/productEdit", {
      title: "Mi product",
      stylesheetFile: "editProduct.css",
      product
    });
  },
  update: (req, res) => {
    let productId = req.params.id;
    // console.log("body: ", req.body);
    let products = productsController.getProducts();

    products.forEach((product, index) => {
      if (product.id == productId) {
        product.name = req.body.nameProduct || product.name;
        product.description = req.body.descProduct || product.description;
        product.price = req.body.priceProduct || product.price;
        product.image = req.file? req.file.filename : product.image;
        product.category = req.body.categoryProduct || product.category;
        product.brand = req.body.brand || product.brand;
        product.color = req.body.color || product.color;
        product.size = req.body.talles || product.size;
        product.available = true;

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
