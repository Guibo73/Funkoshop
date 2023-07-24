const express = require('express');
//const path = require('path');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get('/home', mainController.homeView);

module.exports = router;
