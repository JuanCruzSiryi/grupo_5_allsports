const express =  require('express');
const router = express.Router();

const usersController = require('../controllers/usersController');

/* CRUD */
router.get('/users', usersController.index);

/* END CRUD */

// CREACIÓN DE USUARIO
router.get('/register', usersController.register);

// EDICIÓN DE USUARIO

// LOGIN DE USUARIO
// router.get('/login', usersController.login);

// ELIMINAR USUARIO

// SHOW DE USUARIOS
router.get('/profile/:id', usersController.show);

module.exports = router;