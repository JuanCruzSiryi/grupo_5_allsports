const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const productsPath = path.join(__dirname, "../data/products.json");
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');

const { Product, Color, Category, Brand, Size, Tag } = require('../database/models');
const db = require('../database/models');
// const Products = db.Products;
const Op = db.Sequelize.Op;


const productsController = {
  /* CRUD */
  getProducts: () => {
    return JSON.parse(fs.readFileSync(productsPath, "utf-8"));
  },

  index: async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    res.locals.page = page;

    const limit = 4;
    const offset = (page - 1) * limit;

    const totalItems = await Product.count();
    const totalPages = Math.ceil(totalItems / limit);
    res.locals.totalPages = totalPages;
    console.log("totalPages: ", totalPages);

    try {
      const products = await Product.findAll({
        include: ["category", "color", "size", "tag", "brand"],
        order: [
          ['createdAt', 'DESC'],
        ],
        limit,
        offset
      });
      res.render("../views/products/list", {
        title: "Lista de productoss",
        stylesheetFile: "products/list.css",
        products,
      });
    } catch (error) {
      res.send(error)
    }
  },

  search: async (req, res) => {
    const search = req.query.q;
    const page = parseInt(req.query.page) || 1;
    res.locals.page = page;

    const limit = 4;
    const offset = (page - 1) * limit;

    const totalItems = await Product.count({
      where: {
        name: { [Op.like]: `%${search}%` }
      }
    });

    const totalPages = Math.ceil(totalItems / limit);
    res.locals.totalPages = totalPages;

    try {
      const products = await Product.findAll({
        where: {
          name: { [Op.like]: `%${search}%` }
        },
        include: ["category", "color", "size", "tag", "brand"],
        limit,
        offset
      });
      res.render("../views/products/list", {
        title: "Lista de productoss",
        stylesheetFile: "products/list.css",
        products,
        search
      });
    } catch (error) {
      res.send(error)
    }
  },

  list: async (req, res) => {
    try {
      const products = await Product.findAll();
      res.render("../views/products/productDetail.ejs", {
        title: "Lista de productoss",
        stylesheetFile: "/products/index.css",
        productsList: products,
      });
    } catch (error) {
      res.send(error)
    }
  },

  show: async (req, res) => {
    try {
      const product = await Product.findByPk(req.params.id,
        { include: ["category", "color", "size", "tag", "brand"] })
      res.render('products/show', {
        title: "Detalle del producto",
        stylesheetFile: "products/show.css",
        product
      });

    } catch (error) {
      res.send(error)
    }
  },


  create: async (req, res) => {
    const colors = await Color.findAll();
    const brands = await Brand.findAll();
    const sizes = await Size.findAll();
    const categories = await Category.findAll();
    const tags = await Tag.findAll();
    res.render('products/create', {
      title: "Crear producto",
      stylesheetFile: "/products/create.css",
      colors,
      brands,
      sizes,
      categories,
      tags

    });
  },
  store: async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      console.log(errors);
      const colors = await Color.findAll();
      const brands = await Brand.findAll();
      const sizes = await Size.findAll();
      const categories = await Category.findAll();
      const tags = await Tag.findAll();
      return res.render('products/create', {
        title: 'Crear producto',
        stylesheetFile: "/products/create.css",
        errors: errors.mapped(),
        oldBody: req.body,
        colors,
        brands,
        sizes,
        categories,
        tags
      })
    }
    let image = req.file ? req.file.filename : "default-product.png";

    console.log(req.body);

    const newProduct = {
      name: req.body.nameProduct || "sin nombre",
      description: req.body.descProduct || "sin descripcion",
      price: req.body.priceProduct || 0,
      discount: req.body.discount || 0,
      image: image,
      brand_id: req.body.brandProduct || 1,
      tag_id: req.body.tag || 1,
      color_id: req.body.color || 1,
      size_id: req.body.sizeProduct || 1,
      category_id: req.body.category || 1,
    };
    console.log("Producto a crear: ", newProduct);

    Product.create(newProduct)
      .then(() => {
        res.redirect('/products')
      })
      .catch(error => res.send(error));

  },

  edit: async (req, res) => {
    try {
      const product = await Product.findByPk(req.params.id);
      const colors = await Color.findAll();
      const brands = await Brand.findAll();
      const sizes = await Size.findAll();
      const categories = await Category.findAll();
      const tags = await Tag.findAll();

      res.render("../views/products/edit", {
        title: "Mi Product",
        stylesheetFile: "products/edit.css",
        product,
        colors,
        brands,
        sizes,
        categories,
        tags

      });
    } catch (error) {
      res.send(error)
    }
  },

  update: async (req, res) => {
    const product = await Product.findByPk(req.params.id);

    // Validar longitud de la descripción
    if (req.body.description.length < 20) {
      return res.send("La descripción debe tener más de 20 caracteres");
    }

    Product.update(
      {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: req.file ? req.file.filename : product.image,
        category_id: req.body.category,
        brand_id: req.body.brand,
        color_id: req.body.color,
        size_id: req.body.size,
        tag_id: req.body.tag,
        discount: req.body.discount
      },
      {
        where: { id: req.params.id }
      })
      .then(() => {
        return res.redirect('/products');
      })
      .catch(error => {
        res.send(error)
      });
  },

  delete: async (req, res) => {
    try {
      const product = await Product.findByPk(req.params.id);
      res.render("products/delete", {
        title: "Borrar producto",
        stylesheetFile: "/products/edit.css",
        product
      });
    } catch (error) {
      res.send(error)
    }
  },

  destroy: (req, res) => {
    Product.destroy({
      where: { id: req.params.id }
    })
      .then(() => {
        return res.redirect('/products');
      })
      .catch(error => {
        res.send(error);
      });
  },


  /* END CRUD */

  products: async (req, res) => {
    try {
      const product = await Product.findByPk(req.params.id,
        { include: ["category", "color", "size", "tag", "brand"] })
      const sizes = await Size.findAll();
      res.render("../views/products/productDetailDef", {
        title: "Product-Detail",
        stylesheetFile: "products/detail.css",
        product,
        sizes
      });
    } catch (error) {
      res.send(error)
    }
  },

  productCart: (req, res) => {
    res.render("../views/products/cart", {
      title: "Product-Cart",
      stylesheetFile: "/products/cart.css",
    });
  },
  productRegister: (req, res) => {
    res.render("../views/products/productRegister", {
      title: "Products-Register",
      stylesheetFile: "/products/create.css",
    });
  },
  productEdit: (req, res) => {
    res.render("../views/products/productEdit", {
      title: "Products-Edit",
      stylesheetFile: "products/edit.css",
    });
  },
};

module.exports = productsController;