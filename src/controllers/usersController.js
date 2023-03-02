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
  show: (req, res) => {
    let profileId = req.params.id;
    let profile = usersController.getUsers().find((profile) => profile.id == profileId);
  // profile: (req, res) => {
  //   res.render("../views/users/profile", {
  //     title: "Profile",
  //     stylesheetFile: "profile.css",
  //   });
  // },
  res.render("users/show", {
    title: "Profile",
    stylesheetFile: "profile.css",
    profile
  });
},
  // EDIT

  // UPDATE

  // DELETE

  // DESTROY
  
};

module.exports = usersController;
