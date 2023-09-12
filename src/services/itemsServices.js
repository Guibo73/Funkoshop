const itemsModels = require('../models/itemsModels');

async function getAllItems() {
    const result = await itemsModels.getAll();
    console.log("All Data Sent");
    return result;
}

async function getItemByParams(params) {
    const result = await itemsModels.getOne({ product_id: params });
    console.log(`Item_id ingresado: ${params}`);
    return result;
}
async function deleteByParams(params) {
    const result = await itemsModels.deleteOne({ product_id: params });
    console.log(`Se borró el Item_ID: ${params}`);
    return result;
}

module.exports = {
    getAllItems,
    getItemByParams,
    deleteByParams
};