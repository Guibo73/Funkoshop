//const data = require('../data/data');
const itemsServices = require('../models/itemsServices');
const path = require('path');

const getItems = async (req, res) => {
    const result = await itemsServices.getAllItems;
    res.send(result);
}

async function getItem(req, res) {
    const result = itemsServices.getItemByParams(req.params.id);
    res.send(result);
}

async function deleteItem(req, res) {
    const result = itemsServices.deleteByParams(req.params.id);
    res.send(result);
}

module.exports = { getItems, getItem, deleteItem };

/*function getItems(req, res) {
    const name = req.query.name;
    const itemsFiltered = data.filter(item => item.name == name);
    if (itemsFiltered.length == 0) {
        const filePath = path.join(__dirname, '../../public/pages/items.html');
        return res.sendFile(filePath);
    }
    res.send(itemsFiltered);
}

function getItem(req, res) {
    const itemId = parseInt(req.params.id)
    const item = data.find(item => item.id == itemId);
    console.log(itemId);
    console.log(item);
    res.send(item);
}

function createItem(req, res) {
    const newItem = req.body;
    data.push(newItem);
    console.log(newItem);
    res.send(data);
}


//module.exports = { getItems, getItem, createItem };*/