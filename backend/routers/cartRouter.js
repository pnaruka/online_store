const express = require('express');
const { placeOrder } = require('../controllers/cartController');

const CartRouter = express.Router();

CartRouter.post('/order', placeOrder);

module.exports = CartRouter;