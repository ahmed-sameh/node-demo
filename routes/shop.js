const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', shopController.getIndex);

// products Routes
router.get('/products', shopController.getProducts);

router.get('/products/:id', shopController.getProduct); 

// cart Routes
router.get('/cart', shopController.getCart);

router.post('/cart', shopController.postCart);

// orders Routes
router.get('/orders', shopController.getOrders);

// checkout Routes
router.get('/checkout', shopController.getCheckout);

module.exports = router;
