const router = require('express').Router();

const OrderController = require('../controllers/OrderController');

router.post('/', OrderController.create);
router.get('/totalorders', OrderController.getAllOrders);


module.exports = router;