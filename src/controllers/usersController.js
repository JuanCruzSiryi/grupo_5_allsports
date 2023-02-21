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
  profile: (req, res) => {
    res.render("../views/users/profile", {
      title: "Profile",
      stylesheetFile: "profile.css",
    });
  },
};

module.exports = usersController;
