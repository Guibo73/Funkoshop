const express = require('express');
//const path = require('path');
const router = express.Router();
const shopController = require('../controllers/shopController');

router.get('/shop', shopController.shopView);
//router.get('/shop/item/:id', itemsController.itemsView);
//router.post('/shop/item/:id/add', itemsController.itemsView);
//router.get('/shop/cart', itemsController.itemsView);
//router.post('/shop/cart', itemsController.itemsView);

module.exports = router;
