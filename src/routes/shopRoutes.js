const express = require('express');
//const path = require('path');
const router = express.Router();
const shopController = require('../controllers/shopController');

router.get('/shop', shopController.shopView);

module.exports = router;
