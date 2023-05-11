const express = require('express');
const router = express.Router();
const apiUsersController = require('../../controllers/api/ApiUsersController');

router.get('/api/users', apiUsersController.list);
router.get('/api/users/:id', apiUsersController.detail);


module.exports = router;