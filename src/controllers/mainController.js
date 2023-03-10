const fs = require("fs");
const path = require("path");
const bcrypt = require('bcryptjs');

const usersPath = path.join(__dirname, "../data/users.json");

const mainController = {
  index: (req, res) => {
    // res.sendFile(path.resolve(__dirname, "../views/index.html"))
    res.render('index', {
      title: "All-SPORTS", 
      stylesheetFile: "index.css",
    })
  },
  login: (req, res) => {
    res.render("../views/auth/login", {
      title: "Login",
      stylesheetFile: "login.css",
    });
  },
  processLogin: (req, res) => {
    let users = JSON.parse(fs.readFileSync(usersPath, 'utf-8'));
    let user = users.find(user => user.email == req.body.email);
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) { //user.password === req.body.password
        req.session.userLogged = user;

        //userId session
        req.session.userIdLogged = user.id;
        res.locals.userIdLogged = user.id;

        if(req.body.rememberme){
          res.cookie(
            'userLogged',
            user,
            { maxAge: 1000 * 60 * 2 }
          );

          res.cookie(
            'userIdLogged',
            user.id,
            { maxAge: 1000 * 60 * 5 }
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
}

module.exports = mainController;