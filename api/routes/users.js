const router = require('express').Router();
const UserController = require('../controllers/UserController');
const { auth, isAdmin } = require('../middleware/auth');

router.get('/', auth, UserController.getAll);
router.post('/signup', UserController.signup);
router.post('/login', UserController.login);

module.exports = router;