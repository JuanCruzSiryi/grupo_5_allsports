const express =  require('express');
const router = express.Router();

const productsController = require('../controllers/productsController');

/* CRUD */
router.get('/products', productsController.index);
/* END CRUD */

router.get('/productDetail', productsController.products);

router.get('/productCart', productsController.productCart);

router.get('/productRegister', productsController.productRegister);

router.get('/productEdit', productsController.productEdit);

module.exports = router;