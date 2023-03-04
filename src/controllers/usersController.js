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


  // CREATE
  register: (req, res) => {
    res.render("users/register", {
      title: "Register",
      stylesheetFile: "register.css",
    });
  },

  // STORE
  store: (req, res) => {
        // let errors = validationResult(req);
        
        // if ( ! errors.isEmpty() ) {
        //     return res.render('users/register', {
        //         title: 'Nuevo usuario',
        //         errors: errors.mapped(),
        //         oldBody: req.body
        //     })
        // }
        
        let users = usersController.getUsers();
        let images = [];
        
        if (req.files) {
            req.files.forEach(file => {
                images.push({
                    "id": Date.now(),
                    "name": file.filename,
                });
            });
        } else {
            images.push("default-user.png");
        }
        
        let newUser = {
            "id": Date.now(),
            "firstname": req.body.firstName || "Sin nombre",
            "lastname": req.body.lastName || "Sin apellido",
            "email": req.body.email || "Sin email",
            "password": req.body.password || "Sin contraseña",
            "category": "Usuario",
            "image": images,
            "available": true
        }
        
        users.push(newUser);
        
        fs.writeFileSync(usersPath, JSON.stringify(users, null, ' '));
        
        res.redirect('profile');
  },

  // 
  // login: (req, res) => {
  //   res.render("../views/users/login", {
  //     title: "Login",
  //     stylesheetFile: "login.css",
  //   });
  // },

  // EDIT
  edit: (req, res) => {
    let userId = req.params.id;
    let user = usersController.getUsers().find((user) => user.id == userId);

    res.render("../views/users/edit", {
      title: "Mi User",
      stylesheetFile: "editUser.css",
      user
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
        user.image = req.file? req.file.filename : user.image;
        user.paswword = req.body.paswwordUser || user.paswword;
        user.category = req.body.categoryUser || user.category;
        user.available = true;

        users[index] = user;
      }
    });

    fs.writeFileSync(usersPath, JSON.stringify(users, null, "  "));

    res.redirect("/users");
  },


  // DELETE

  // DESTROY
  
  
  
  /* END CRUD */


  register: (req, res) => {
    res.render("../views/users/register", {
      title: "Users-Register",
      stylesheetFile: "register.css",
    });
  },
  


  // edit: (req, res) => {
  //   res.render("../views/users/edit", {
  //     title: "Users-Edit",
  //     stylesheetFile: "editUser.css",
  //   });
  // },



};



module.exports = usersController;
