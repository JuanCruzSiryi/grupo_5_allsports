const fs = require("fs");
const path = require("path");
const bcrypt = require('bcryptjs');

const usersPath = path.join(__dirname, "../data/users.json");
const {User, Product} = require('../database/models');

const db = require('../database/models');
const Op = db.Sequelize.Op;

const mainController = {
  index: async (req, res) => {
    try {
      const newest_products = await Product.findAll({
        include: ["category", "color", "size", "tag", "brand"],
        limit: 4,
        offset: 0
      });
      const popular_products = await Product.findAll({
        include: ["category", "color", "size", "tag", "brand"],
        limit: 4,
        offset: 4
      });
      res.render('index', {
        title: "All-SPORTS",
        stylesheetFile: "index.css",
        newest_products,
        popular_products
      });
    } catch (error) {
      res.send(error)
    }
    // res.render('index', {
    //   title: "All-SPORTS", 
    //   stylesheetFile: "index.css",
    // })
  },
  login: (req, res) => {
    res.render("../views/auth/login", {
      title: "Login",
      stylesheetFile: "login.css",
    });
  },
  processLogin: async (req, res) => {
    //let users = JSON.parse(fs.readFileSync(usersPath, 'utf-8'));
    const users = await User.findAll({include: ["country"]});
    let user = users.find(user => user.email == req.body.email);
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) { //user.password === req.body.password
        req.session.userLogged = user;

        if(req.body.rememberme){
          res.cookie(
            'userLogged',
            user,
            { maxAge: 1000 * 60 * 2 }
          );
        }
        res.redirect('/')

      }
      else {
        res.render("../views/auth/login", {
          title: "Login",
          stylesheetFile: "login.css",
          errors: {
            email: {
              msg: 'Los datos son incorrectos. Verificalos y vuelve a intentar'
            }
          }
        });

      }
    } else {
      res.render("../views/auth/login", {
        title: "Login",
        stylesheetFile: "login.css",
        errors: {
          email: {
            msg: 'Los datos son incorrectos. Verificalos y vuelve a intentar'
          }
        }
      });
    }
  },
  logout: (req, res) => {
    req.session.destroy();
    res.clearCookie('userLogged');
    return res.redirect('/')
  },  
  error404: (req, res) => {
    res.status(404).render('error404', {
      title: "Error 404: Página no encontrada",
      stylesheetFile: "error404.css"
    });
  }
};
module.exports = mainController;