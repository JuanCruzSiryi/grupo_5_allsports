const express =  require('express');
const router = express.Router();
const upload = require('../middlewares/multer');
const rules = require('../middlewares/productValidator');

const productsController = require('../controllers/productsController');
const guestMiddleware = require('../middlewares/guestMiddleware');

/* CRUD */
router.get('/products', guestMiddleware, productsController.index);
router.get('/productsList', productsController.list);
// BUSCAR USUSARIO
router.get('/products/search', productsController.search);

/* creacion de producto */
router.get('/products/create', productsController.create);
router.post('/products/create', upload.single("image"), rules, productsController.store);

/* actualizar producto */
router.get('/products/:id/edit', productsController.edit);
router.put('/products/:id/edit', upload.single("image"), rules, productsController.update);

/* eliminar producto */
router.get('/products/:id/delete', productsController.delete);
router.delete('/products/:id/delete', productsController.destroy);

/* ver producto */
router.get('/products/:id', productsController.show);

/* END CRUD */

router.get('/productDetail/:id', productsController.products);

router.get('/productCart', productsController.productCart);

router.get('/productRegister', productsController.productRegister);

router.get('/productEdit', productsController.productEdit);

module.exports = router;