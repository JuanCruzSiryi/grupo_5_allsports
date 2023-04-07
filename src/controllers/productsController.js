const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const productsPath = path.join(__dirname, "../data/products.json");
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');

const {Product, Color, Category, Brand, Size, Tag} = require('../database/models');
const db = require('../database/models');
// const Products = db.Products;
const Op = db.Sequelize.Op;


const productsController = {
  /* CRUD */
  getProducts: () => {
    return JSON.parse(fs.readFileSync(productsPath, "utf-8"));
  },
  // index: (req, res) => {
  //   res.render("../views/products/index", {
  //     title: "Products List",
  //     stylesheetFile: "/products/index.css",
  //     productsList: productsController.getProducts(),
  //   });
  // },
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
    console.log("Estoy en search");
    const search = req.query.q;
    const page = parseInt(req.query.page) || 1;
    res.locals.page = page;

    const limit = 4;
    const offset = (page - 1) * limit;

    const totalItems = await Product.count({
      where: {
        name: { [Op.like]: `%${search}%` }
    }});

    console.log("### totalItems", totalItems);
    
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
      console.log("### products", products);
      res.render("../views/products/list", {
        title: "Lista de productoss",
        stylesheetFile: "products/list.css",
        products,
      });
    } catch (error) {
      res.send(error)
    }
  },

  list: async (req, res) => {
    try {
      const products = await Product.findAll();
      res.render("../views/products/productDetail.ejs",{
        title: "Lista de productoss",
        stylesheetFile: "/products/index.css",
        productsList: products,
      }); 
    } catch (error) {
      res.send(error)
    }
  },
  // show: (req, res) => {
  //   let productId = req.params.id;
  //   let product = productsController.getProducts().find((product) => product.id == productId);

  //   res.render("products/show", {
  //     title: "Mi Producto",
  //     stylesheetFile: "/products/show.css",
  //     product
  //   });
    
  // },

show: async (req, res) => {
    try {
      const product = await Product.findByPk(req.params.id,
      {include: ["category", "color", "size", "tag", "brand"]})
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
    stylesheetFile: "registerProduct.css",
    colors,
    brands,
    sizes,
    categories,
    tags

  });
  },
  store: async (req, res) => {
    const errors = validationResult(req);
        
        if ( ! errors.isEmpty() ) {
          console.log(errors);
          const colors = await Color.findAll();
          const brands = await Brand.findAll();
          const sizes = await Size.findAll();
          const categories = await Category.findAll();
          const tags = await Tag.findAll();
            return res.render('products/create', {
              title: 'Crear producto',
              stylesheetFile: "registerProduct.css",
              errors: errors.mapped(),
              oldBody: req.body,
              colors,
              brands,
              sizes,
              categories,
              tags
        })
        }
    let image = req.file? req.file.filename : "default-product.png";
    
    console.log(req.body);

    const newProduct = {
      name: req.body.nameProduct || "sin nombre",
      description: req.body.descProduct || "sin descripcion",
      price: req.body.priceProduct || 0,
      image: image,
      brand_id: req.body.brandProduct || "sin marca",
      tag_id: req.body.tag || "sin tipo",
      color_id: req.body.color || "sin color",
      size_id: req.body.sizeProduct || "sin talle",
    };

    Product.create(newProduct)
    .then(() => {
      res.redirect('/products')
    })
    .catch(error => res.send(error));

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
  // edit: (req, res) => {
  //   let productId = req.params.id;
  //   let product = productsController.getProducts().find((product) => product.id == productId);

  //   res.render("../views/products/productEdit", {
  //     title: "Mi product",
  //     stylesheetFile: "editProduct.css",
  //     product
  //   });
  // },

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
        stylesheetFile: "editProduct.css",
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

  
  // update: (req, res) => {
  //   let productId = req.params.id;
  //   // console.log("body: ", req.body);
  //   let products = productsController.getProducts();

  //   products.forEach((product, index) => {
  //     if (product.id == productId) {
  //       product.name = req.body.nameProduct || product.name;
  //       product.description = req.body.descProduct || product.description;
  //       product.price = req.body.priceProduct || product.price;
  //       product.image = req.file? req.file.filename : product.image;
  //       product.category = req.body.categoryProduct || product.category;
  //       product.brand = req.body.brand || product.brand;
  //       product.color = req.body.color || product.color;
  //       product.size = req.body.talles || product.size;
  //       product.available = true;

  //       products[index] = product;
  //     }
  //   });

  //   fs.writeFileSync(productsPath, JSON.stringify(products, null, "  "));

  //   res.redirect("/products");
  // },

  update: async (req, res) => { 
    const product = await Product.findByPk(req.params.id);
    const colors = await Color.findAll();
    const brands = await Brand.findAll();
    const sizes = await Size.findAll();
    const categories = await Category.findAll();
    const tags = await Tag.findAll();


    console.log(req.body);

    Product.update(
      { name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: req.file? req.file.filename : product.image,
        category_id: req.body.category,
        brand_id: req.body.brand,
        color_id: req.body.color,
        size_id: req.body.size,
        tag_id: req.body.tag,
        discount: req.body.discount
      },
      {
        where: {id: req.params.id}
      })
      .then(() => {
        return res.redirect('/products');
      })
      .catch(error => {
        res.send(error)
      });
  },

  // delete: (req, res) => {
  //   let productId = req.params.id;
  //   let product = productsController.getProducts().find((product) => product.id == productId);
  //   res.render('products/delete', {
  //     title: "Borrar producto",
  //     stylesheetFile: "editProduct.css",
  //     product
  //   });
  // },

  delete: async (req, res) => {
    try {
      const product = await Product.findByPk(req.params.id);
      res.render("products/delete", {
        title: "Borrar producto",
        stylesheetFile: "/editProduct.css",
        product
      });
    } catch (error) {
      res.send(error)
    }
  },
  

  // destroy: (req, res) => {
  //   let productId = req.params.id;
  //   let products = productsController.getProducts();
  //   let newProducts = products.filter(product => product.id != productId)

  //   fs.writeFileSync(productsPath, JSON.stringify(newProducts, null, "  "));

  //   res.redirect("/products");
  // },

  destroy: (req, res) => {
    Product.destroy({
      where: {id: req.params.id}
      })
      .then(() => {
        return res.redirect('/products');
      })
      .catch(error => {
        res.send(error);
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