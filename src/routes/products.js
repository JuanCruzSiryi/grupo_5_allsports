const express =  require('express');
const router = express.Router();

const productsController = require('../controllers/productsController');

/* CRUD */
router.get('/products', productsController.index);

/* actualizar producto */
router.get('/products/:id/edit', productsController.edit);
router.put('/products/:id/edit', productsController.update);

/* eliminar producto */
router.get('/products/delete/:id', productsController.delete);
router.delete('/products/delete/:id', productsController.destroy);

/* END CRUD */

router.get('/productDetail', productsController.products);

router.get('/productCart', productsController.productCart);

router.get('/productRegister', productsController.productRegister);

router.get('/productEdit', productsController.productEdit);

module.exports = router;