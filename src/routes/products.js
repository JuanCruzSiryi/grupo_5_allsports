const express =  require('express');
const router = express.Router();

const productsController = require('../controllers/productsController');

router.get('/productDetail', productsController.products);

router.get('/productCart', productsController.productCart);

router.get('/productRegister', productsController.productRegister);

module.exports = router;