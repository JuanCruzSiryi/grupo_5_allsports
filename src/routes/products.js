const express =  require('express');
const router = express.Router();
const upload = require('../middlewares/multer');

const productsController = require('../controllers/productsController');

/* CRUD */
router.get('/products', productsController.index);

/* creacion de producto */
router.get('/products/create', productsController.create);
router.post('/products/create', upload.single("image"), productsController.store);

/* actualizar producto */
router.get('/products/:id/edit', productsController.edit);
router.put('/products/:id/edit', upload.single("image"), productsController.update);

/* eliminar producto */
router.get('/products/:id/delete', productsController.delete);
router.delete('/products/:id/delete', productsController.destroy);

/* ver producto */
router.get('/products/:id', productsController.show);

/* END CRUD */

router.get('/productDetail', productsController.products);

router.get('/productCart', productsController.productCart);

router.get('/productRegister', productsController.productRegister);

router.get('/productEdit', productsController.productEdit);

module.exports = router;