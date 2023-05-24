const express =  require('express');
const router = express.Router();
const upload = require('../middlewares/multer');
const rules = require('../middlewares/userValidator');

const usersController = require('../controllers/usersController');
const editProfileMiddleware = require('../middlewares/editProfileMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');

/* CRUD */
router.get('/users', adminMiddleware, usersController.index);
router.get('/usersList', usersController.list);

/* END CRUD */

// CREACIÓN DE USUARIO
router.get('/users/register', usersController.register);
router.post('/users/register', upload.single("image"), rules, usersController.store);

// BUSCAR USUSARIO
router.get('/users/search', adminMiddleware, usersController.search)


// EDICIÓN DE USUARIO
router.get('/users/:id/edit', adminMiddleware, usersController.edit);
router.put('/users/:id/edit',adminMiddleware, upload.single("image"),rules, usersController.update);
router.get('/users/:id/editProfile', editProfileMiddleware, usersController.editProfile);
router.put('/users/:id/editProfile', editProfileMiddleware, upload.single("image"), rules, usersController.updateProfile);

// LOGIN DE USUARIO
// router.get('/login', usersController.login);

// ELIMINAR USUARIO
router.get('/users/:id/delete',adminMiddleware, usersController.delete);
router.delete('/users/:id/delete', adminMiddleware, usersController.destroy);

router.get('/profile', usersController.profile);

// SHOW DE USUARIOS
router.get('/users/:id', adminMiddleware, usersController.show);

/* END CRUD */
module.exports = router;