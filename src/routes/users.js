const express =  require('express');
const router = express.Router();

const usersController = require('../controllers/usersController');

/* CRUD */
router.get('/users', usersController.index);

/* END CRUD */

router.get('/register', usersController.register);

router.get('/login', usersController.login);

router.get('/profile', usersController.profile);

module.exports = router;