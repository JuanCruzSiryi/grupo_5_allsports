const express =  require('express');
const router = express.Router();
const upload = require('../middlewares/multer');


const usersController = require('../controllers/usersController');

/* CRUD */
router.get('/users', usersController.index);

/* END CRUD */

// CREACIÓN DE USUARIO
router.get('/register', usersController.register);

// EDICIÓN DE USUARIO
router.get('/users/:id/edit', usersController.edit);
router.post('/users/:id/edit', upload.single("image"), usersController.update);


// LOGIN DE USUARIO
// router.get('/login', usersController.login);

// ELIMINAR USUARIO

// SHOW DE USUARIOS
router.get('/profile', usersController.profile);





router.get('/edit', usersController.edit);

module.exports = router;