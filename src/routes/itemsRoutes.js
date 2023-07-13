const express = require('express');
const path = require('path');
const router = express.Router();
const itemsController = require('../controllers/itemsController');

router.get('/items', itemsController.getItems);
router.get('/items/:id', itemsController.getItem);
//router.post('/items/create', itemsController.createItem);
router.put('/items/:item', (req, res) => { res.send('Ruta para modificar un Item') });
router.delete('/items/:id/delete', itemsController.deleteItem);

module.exports = router;
