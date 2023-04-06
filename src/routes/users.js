const express =  require('express');
const router = express.Router();
const upload = require('../middlewares/multer');
const rules = require('../middlewares/userValidator');

const usersController = require('../controllers/usersController');
const guestMiddleware = require('../middlewares/guestMiddleware');

/* CRUD */
router.get('/users', guestMiddleware, usersController.index);
router.get('/usersList', usersController.list);

/* END CRUD */

// CREACIÓN DE USUARIO
router.get('/users/register', usersController.register);
router.post('/users/register', upload.single("image"), rules, usersController.store);

// BUSCAR USUSARIO
router.get('/users/search', usersController.search)


// EDICIÓN DE USUARIO
router.get('/users/:id/edit', usersController.edit);
router.put('/users/:id/edit', upload.single("image"),rules, usersController.update);

// LOGIN DE USUARIO
// router.get('/login', usersController.login);

// ELIMINAR USUARIO
router.get('/users/:id/delete', usersController.delete);
router.delete('/users/:id/delete', usersController.destroy);

router.get('/profile', usersController.profile);

// SHOW DE USUARIOS
router.get('/users/:id', usersController.show);

/* END CRUD */
module.exports = router;