const path = require("path");

const usersController = {
  register: (req, res) => {
     res.render('../views/users/register');
  },
  login: (req, res) => {
    res.render('../views/users/login');
  }
}

module.exports = usersController;