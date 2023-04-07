const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const usersPath = path.join(__dirname, "../data/users.json");
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const db = require('../database/models');
const Op = db.Sequelize.Op;

const {User} = require('../database/models');

const usersController = {
  /* CRUD */
  getUsers: () => {
    return JSON.parse(fs.readFileSync(usersPath, "utf-8"));
  },
  // index: (req, res) => {
  //   res.render("../views/users/index", {
  //     title: "Lista de usuarios",
  //     stylesheetFile: "/users/index.css",
  //     usersList: usersController.getUsers(),
  //   });
  // },
  index: async (req, res) => {
    const page = parseInt(req.query.page)||1;
    res.locals.page = page;

    const limit = 8;
    const offset = (page - 1) * limit;

    const totalItems = await User.count();
    const totalPages = Math.ceil(totalItems / limit); 
    res.locals.totalPages = totalPages;

    try {
      const users = await User.findAll({
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
  // SHOW
  // show: (req, res) => {
  //   let profileId = req.params.id;
  //   let profile = usersController.getUsers().find((profile) => profile.id == profileId);
  
  //   res.render("users/show", {
  //     title: "Profile",
  //     stylesheetFile: "users/show.css",
  //     user: profile
  //   });
  // },
  show: async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id);
      res.render("users/show", {
        title: "Profile",
        stylesheetFile: "users/show.css",
        user: user
      });

    } catch (error) {
      res.send(error)
    }
  },

  profile: (req, res) => {
    let profile= res.locals.userLogged;
    // req.session.userLogged = user;
    res.render("users/profile", {
      title: "Profile",
      stylesheetFile: "profile.css",
      user: profile
    });
  },

  // CREATE
  register: (req, res) => {
    res.render("users/register", {
      title: "Register",
      stylesheetFile: "register.css",
    });
  },

  // STORE
  // store: (req, res) => {
  //       const errors = validationResult(req);
        
  //       if ( ! errors.isEmpty() ) {
  //           return res.render('users/register', {
  //             title: 'Nuevo usuario',
  //             stylesheetFile: "register.css",
  //             errors: errors.mapped(),
  //             oldBody: req.body,
  //       })
  //       }
        
  //       let users = usersController.getUsers();
  //       // let images = [];
        
  //       // if (req.files) {
  //       //     req.files.forEach(file => {
  //       //         images.push({
  //       //             "id": Date.now(),
  //       //             "name": file.filename,
  //       //         });
  //       //     });
  //       // } else {
  //       //     images.push("default-user.png");
  //       // }
  //       let image = req.file? req.file.filename : "default-user.png";
        
  //       let newUser = {
  //           "id": uuidv4(),
  //           "firstName": req.body.firstName || "Sin nombre",
  //           "lastName": req.body.lastName || "Sin apellido",
  //           "email": req.body.email || "Sin email",
  //           "password": bcryptjs.hashSync(req.body.password, 10) || "Sin contraseña",
  //           "category": "Usuario",
  //           "image": image,
  //           "available": true
  //       }
        
  //       users.push(newUser);
        
  //       fs.writeFileSync(usersPath, JSON.stringify(users, null, '  '));
  //       // Login the user registered
  //       if(!res.locals.userLogged) {
  //         req.session.userLogged = newUser;
  //         res.locals.userLogged = newUser;
  //         res.cookie(
  //           'userLogged',
  //           newUser,
  //           { maxAge: 1000 * 60 * 5 }
  //         );
  //         // console.log("# Register and Login");
  //         return res.redirect('/');
  //       }
  //       res.redirect('/users');
  // },

   // CRUD NUEVO

  store: (req, res) =>{
      const errors = validationResult(req);
        
        if ( ! errors.isEmpty() ) {
            return res.render('users/register', {
              title: 'Nuevo usuario',
              stylesheetFile: "register.css",
              errors: errors.mapped(),
              oldBody: req.body,
        })
        }
        let image = req.file? req.file.filename : "default-user.png";
        
      const newUser = {
        firstName: req.body.firstName || "Sin nombre",
        lastName: req.body.lastName || "Sin apellido",
        email: req.body.email || "Sin email",
        password: bcryptjs.hashSync(req.body.password, 10) || "Sin contraseña",
        image: image,
        role_id: 1,
        address: req.body.address || "Sin dirección",
        country_id: 2,
        state: 1,
      }
       User.create(newUser)
       .then(() => {
           res.redirect('/users')
       })
       .catch(error => res.send(error));
  },

  // EDIT
  // edit: (req, res) => {
  //   let userId = req.params.id;
  //   let user = usersController.getUsers().find((user) => user.id == userId);
  //   res.render("../views/users/edit", {
  //     title: "Mi User",
  //     stylesheetFile: "editUser.css",
  //     user
  //   });
  // },
  edit: async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id);
      res.render("../views/users/edit", {
        title: "Mi User",
        stylesheetFile: "editUser.css",
        user
      });
    } catch (error) {
      res.send(error)
    }
  },

  // UPDATE
  // update: (req, res) => {
  //   let userId = req.params.id;
  //   // console.log("body: ", req.body);
  //   let users = usersController.getUsers();

  //   users.forEach((user, index) => {
  //     if (user.id == userId) {
  //       // user.firstName = req.body.firstName || user.first_name;
  //       user.firstName = req.body.firstName || user.firstName;

  //       // user.last_name = req.body.last_nameUser || user.last_name;
  //      user.lastName = req.body.lastName || user.lastName;
  //       // user.email = req.body.emailUser || user.email;
  //       user.email = req.body.email || user.email;
  //       user.image = req.file? req.file.filename : user.image;
  //       // user.image = req.file? req.file.image : user.image;
  //       // user.paswword = req.body.paswwordUser || user.paswword;
  //       // user.password = bcryptjs.hashSync(req.body.password, 10);
  //       user.category = req.body.categoryUser || user.category;
  //       user.available = true;
  //       users[index] = user;
  //     }
  //   });
  //   fs.writeFileSync(usersPath, JSON.stringify(users, null, "  "));
  //   res.redirect("/users");
  // },

  update: async (req, res) => {
    const user = await User.findByPk(req.params.id);
    User.update(
      {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        image: req.file? req.file.filename : user.image,
        category: req.body.categoryUser,
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

  // DELETE
  // delete: (req, res) => {
  //   let userId = req.params.id;
  //   let user = usersController.getUsers().find((user) => user.id == userId);
  //   res.render('users/delete', {
  //     title: "Borrar usuario",
  //     stylesheetFile: "/users/editUser.css",
  //     user
  //   });
  // },
  delete: async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id);
      res.render("users/delete", {
        title: "Borrar usuario",
        stylesheetFile: "/users/editUser.css",
        user: user
      });
    } catch (error) {
      res.send(error)
    }
  },
  
  // DESTROY
  // destroy: (req, res) => {
  //   let userId = req.params.id;
  //   let users = usersController.getUsers();
  //   let newUsers = users.filter(user => user.id != userId)
  //   fs.writeFileSync(usersPath, JSON.stringify(newUsers, null, "  "));
  //   res.redirect("/users");
  // },

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
  /* END CRUD */
};

module.exports = usersController;
