const express =  require('express');
const router = express.Router();

const usersController = require('../controllers/usersController');

router.get('/register', usersController.register);

router.get('/login', usersController.login);

module.exports = router;