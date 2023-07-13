const express = require('express');
const path = require('path');
const shopview = require('../controllers/shopController');
const router = express.Router();

router.get('/shop', shopview);

module.exports = router;
