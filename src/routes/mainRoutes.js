const express =  require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', mainController.index);

router.get('/login', authMiddleware, mainController.login);
router.post('/login', authMiddleware, mainController.processLogin);

router.get('/logout', mainController.logout);

module.exports = router;