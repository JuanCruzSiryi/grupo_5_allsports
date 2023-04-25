const express = require('express');
const router = express.Router();
const apiProductsController = require('../../controllers/api/ApiProductsController');

router.get('/api/products', apiProductsController.list);
router.get('/api/products/:id', apiProductsController.detail);


module.exports = router;