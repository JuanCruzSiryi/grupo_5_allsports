const usersController = {
  register: (req, res) => {
    res.render("../views/users/register", {
      title: "Register",
      stylesheetFile: "register.css",
    });
  },
  login: (req, res) => {
    res.render("../views/users/login", {
      title: "Login",
      stylesheetFile: "login.css",
    });
  },
};

module.exports = usersController;
