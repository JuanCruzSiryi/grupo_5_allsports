const express = require('express');
const router = express.Router();
const apiCategoriesController = require('../../controllers/api/ApiCategoriesController');

router.get('/api/categories', apiCategoriesController.list);
router.get('/api/categories/:id', apiCategoriesController.detail);


module.exports = router;