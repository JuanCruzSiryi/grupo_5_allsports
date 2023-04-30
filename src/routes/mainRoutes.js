const express =  require('express');
const router = express.Router();
const rules = require('../middlewares/userValidator');

const mainController = require('../controllers/mainController');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', mainController.index);

router.get('/login', authMiddleware, mainController.login);
router.post('/login', authMiddleware, rules, mainController.processLogin);

router.get('/logout', mainController.logout);

module.exports = router;