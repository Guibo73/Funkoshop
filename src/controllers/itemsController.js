//const data = require('../data/data');
const itemsServices = require('../services/itemsServices');
const path = require('path');


async function itemsView(req, res) {
    const id = req.params.id;
    const item = await itemsServices.getItemByParams(id);
    //const data = {...item};
    console.log(item);
    res.render('shop/items', {
        view: {
            tittle: "Items | Funkoshop"
        },
        item
    });
}

/*const getItems = async (req, res) => {
    const result = await itemsServices.getAllItems();
    res.send(result);
}

async function getItem(req, res) {
    const result = await itemsServices.getItemByParams(req.params.id);
    res.send(result);
}*/

async function deleteItem(req, res) {
    const result = await itemsServices.deleteByParams(req.params.id);
    res.send(result);
}

module.exports = { itemsView, deleteItem };

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