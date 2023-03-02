const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const usersPath = path.join(__dirname, "../data/users.json");

const usersController = {
  /* CRUD */
  getUsers: () => {
    return JSON.parse(fs.readFileSync(usersPath, "utf-8"));
  },
  index: (req, res) => {
    res.render("../views/users/index", {
      title: "Lista de usuarios",
      stylesheetFile: "/users/index.css",
      usersList: usersController.getUsers(),
    });
  },

  /* END CRUD */

  // CREATE
  register: (req, res) => {
    res.render("../views/users/register", {
      title: "Register",
      stylesheetFile: "register.css",
    });
  },

  // STORE


  // 
  // login: (req, res) => {
  //   res.render("../views/users/login", {
  //     title: "Login",
  //     stylesheetFile: "login.css",
  //   });
  // },

  // SHOW
  profile: (req, res) => {
    res.render("../views/users/profile", {
      title: "Profile",
      stylesheetFile: "profile.css",
    });
  },
  // EDIT
  edit: (req, res) => {
    let userId = req.params.id;
    let user = usersController.getUsers().find((user) => user.id == userId);

    res.render("../views/users/edit", {
      title: "Mi User",
      stylesheetFile: "editProduct.css",
      product
    });
  },


  // UPDATE
  update: (req, res) => {
    let userId = req.params.id;
    // console.log("body: ", req.body);
    let users = usersController.getUsers();

    users.forEach((user, index) => {
      if (user.id == userId) {
        user.first_name = req.body.first_nameUser || user.first_name;
        user.last_name = req.body.last_nameUser || user.last_name;
        user.email = req.body.emailUser || user.email;
        user.paswword = req.body.paswwordUser || user.paswword
        user.category = req.body.categoryUser || user.category,
        user.available = true

        users[index] = user;
      }
    });

    fs.writeFileSync(usersPath, JSON.stringify(users, null, "  "));

    res.redirect("/users");
  },


  // DELETE

  // DESTROY
  edit: (req, res) => {
    res.render("../views/users/edit", {
      title: "Users-Edit",
      stylesheetFile: "editProduct.css",
    });
  },  



};



module.exports = usersController;
