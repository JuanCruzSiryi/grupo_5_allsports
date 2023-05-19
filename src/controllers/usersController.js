const fs = require("fs");
const path = require("path");
const usersPath = path.join(__dirname, "../data/users.json");
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const db = require('../database/models');
const Op = db.Sequelize.Op;

const {User, Country} = require('../database/models');
const { log } = require("console");

const usersController = {
  /* CRUD */
  getUsers: () => {
    return JSON.parse(fs.readFileSync(usersPath, "utf-8"));
  },
  index: async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    res.locals.page = page;

    const limit = 8;
    const offset = (page - 1) * limit;

    const totalItems = await User.count();
    const totalPages = Math.ceil(totalItems / limit); 
    res.locals.totalPages = totalPages;

    try {
      const users = await User.findAll({
        include: ["role"],
        limit,
        offset
      });
      res.render("users/list", {
        title: "Lista de usuarios",
        stylesheetFile: "users/list.css",
        users,
      });
    } catch (error) {
      res.send(error)
    }
  },

  search: async (req, res) => {
    const search = req.query.q;
    const page = parseInt(req.query.page)||1;
    res.locals.page = page;

    const limit = 8;
    const offset = (page - 1) * limit;

    const totalItems = await User.count({where: {
      [Op.or]: [
        { firstName: { [Op.like]: `%${search}%` } },
        { lastName: { [Op.like]: `%${search}%` } },
      ],
    }});
    
    const totalPages = Math.ceil(totalItems / limit);
    res.locals.totalPages = totalPages;

    try {
      const users = await User.findAll({
        where: {
          [Op.or]: [
            { firstName: { [Op.like]: `%${search}%` } },
            { lastName: { [Op.like]: `%${search}%` } },
          ],
        },
        include: ["role"],
        limit,
        offset
      });
      res.render("users/list", {
        title: "Lista de usuarios",
        stylesheetFile: "users/list.css",
        users,
        search
      });
    } catch (error) {
      res.send(error)
    }
  },

  list: async (req, res) => {
    try {
      const users = await User.findAll();
      res.render("users/list", {
        title: "Lista de usuarios",
        stylesheetFile: "users/list.css",
        users,
      });
    } catch (error) {
      res.send(error)
    }
  },
  show: async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id,
        {include: ['role', 'country']});
      res.render("users/show", {
        title: "Profile",
        stylesheetFile: "users/show.css",
        user: user,
      });

    } catch (error) {
      res.send(error)
    }
  },

  profile: (req, res) => {
    let profile = res.locals.userLogged;
    // req.session.userLogged = user;
    res.render("users/profile", {
      title: "Profile",
      stylesheetFile: "users/profile.css",
      user: profile
    });
  },

  // CREATE
  register: async (req, res) => {
    const countries = await Country.findAll();
    res.render("users/register", {
      title: "Register",
      stylesheetFile: "users/register.css",
      countries
    });
  },

  store: async (req, res) =>{

      const users = await User.findAll();
      const user = users.find(user => user.email == req.body.email);
    
      const errors = validationResult(req);
      const countries = await Country.findAll();
        
      if ( ! errors.isEmpty() || user) {
        let customErrors = errors.mapped();
        let emailError = null;
        if (user){
          emailError = "El correo ingresado ya existe."
          customErrors["email_2"] = {msg: emailError};
        }
        
        return res.render('users/register', {
            title: 'Nuevo usuario',
            stylesheetFile: "users/register.css",
            errors: customErrors,
            oldBody: req.body,
            countries
        })
      }
      let image = req.file? req.file.filename : "default-user.png";
        
      const newUser = {
        firstName: req.body.firstName || "Sin nombre",
        lastName: req.body.lastName || "Sin apellido",
        email: req.body.email || "Sin email",
        password: bcryptjs.hashSync(req.body.password, 10),
        image: image,
        address: req.body.address || "Sin dirección",
        country_id: req.body.country,
        role_id: 1,
        state: 1,
      }
      User.create(newUser)
        .then(() => {
          res.redirect('/users')
        })
        .catch(error => res.send(error));

  },
  edit: async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id);
      const countries = await Country.findAll();
      res.render("../views/users/edit", {
        title: "Mi User",
        stylesheetFile: "/users/edit.css",
        user,
        countries
      });
    } catch (error) {
      res.send(error)
    }
  },

  update: async (req, res) => {
    const user = await User.findByPk(req.params.id);
    User.update(
      {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        image: req.file? req.file.filename : user.image,
        category: req.body.categoryUser,
        country_id: req.body.country,
      },
      {
        where: {id: req.params.id}
      })
      .then(() => {
        return res.redirect('/users');
      })
      .catch(error => {
        res.send(error)
      });
  },

  delete: async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id);
      res.render("users/delete", {
        title: "Borrar usuario",
        stylesheetFile: "/users/delete.css",
        user: user
      });
    } catch (error) {
      res.send(error)
    }
  },
  
  destroy: (req, res) => {
    User.destroy({
      where: {id: req.params.id}
      })
      .then(() => {
        return res.redirect('/users');
      })
      .catch(error => {
        res.send(error);
      });
  },

};

module.exports = usersController;
