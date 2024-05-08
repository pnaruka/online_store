const express = require('express');
const { fetchProducts } = require('../controllers/productsController');

const ProductRouter = express.Router();

ProductRouter.get('/fetch', fetchProducts);

module.exports = ProductRouter;