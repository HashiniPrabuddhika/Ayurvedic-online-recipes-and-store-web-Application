const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/order');
const { routes } = require('../app.js').default;

router.post('/', OrderController.create);
router.get('admin/:id', OrderController.getOrdersByAdmin)
router.get('/customer/:id', OrderController.getOrdersByCustomer)

module.exports = router;
