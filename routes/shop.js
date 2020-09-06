const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/cart', shopController.getCart);

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);
router.post('/checkout', shopController.getAddCheckout);

router.post('/add-to-cart/:productId', shopController.getAddToCart);

module.exports = router;
