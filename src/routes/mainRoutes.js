const express = require('express');
//const path = require('path');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get('/home', mainController.homeView);
//router.get('/contact', mainController.homeView);
//router.get('/about', mainController.homeView);
//router.get('/faqs', mainController.homeView);

module.exports = router;
