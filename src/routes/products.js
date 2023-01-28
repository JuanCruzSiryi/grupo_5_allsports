const express =  require('express');
const router = express.Router();

const productsController = require('../controllers/productsController');

router.get('/', productsController.products);

module.exports = router;