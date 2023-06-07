const express =  require('express');
const router = express.Router();
const upload = require('../middlewares/multer');
const rules = require('../middlewares/productValidator');

const productsController = require('../controllers/productsController');
const guestMiddleware = require('../middlewares/guestMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');

/* CRUD */
router.get('/products', adminMiddleware, productsController.index);
router.get('/productsList', guestMiddleware, productsController.list);
// BUSCAR USUSARIO
router.get('/products/search', productsController.search);

//nuevo
router.get('/products/searchHeader', productsController.searchHeader);



/* creacion de producto */
router.get('/products/create',adminMiddleware, productsController.create);
router.post('/products/create',adminMiddleware, upload.single("image"), rules, productsController.store);

/* actualizar producto */
router.get('/products/:id/edit',adminMiddleware, productsController.edit);
router.put('/products/:id/edit',adminMiddleware, upload.single("image"), rules, productsController.update);

/* eliminar producto */
router.get('/products/:id/delete',adminMiddleware, productsController.delete);
router.delete('/products/:id/delete',adminMiddleware, productsController.destroy);

/* ver producto */
router.get('/products/:id', adminMiddleware, productsController.show);

/* END CRUD */

router.get('/productDetail/:id', productsController.products);

router.get('/productCart', guestMiddleware, productsController.productCart);

router.get('/productRegister', adminMiddleware, productsController.productRegister);

router.get('/productEdit', adminMiddleware, productsController.productEdit);

module.exports = router;