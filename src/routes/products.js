const express =  require('express');
const router = express.Router();

const productsController = require('../controllers/productsController');

router.get('/productDetail', productsController.products);

module.exports = router;