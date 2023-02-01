const stylesheetLogin = "login.css";
const stylesheetRegister = "register.css";

const usersController = {
  register: (req, res) => {
     res.render('../views/users/register', {title: "Register", stylesheetFile:stylesheetRegister});
  },
  login: (req, res) => {
    res.render('../views/users/login', {title: "Login", stylesheetFile:stylesheetLogin});
  }
}

module.exports = usersController;