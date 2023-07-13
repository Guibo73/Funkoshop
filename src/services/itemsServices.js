const itemsModels = require('../models/itemsModels');

async function getAllItems() {
    const result = await itemsModels.getAll();
    console.log("All Data Sent");
    return result;
}

async function getItemByParams(params) {
    const result = await itemsModels.getOne({ idproduct: params });
    console.log(`Item_id ingresado: ${id}`);
    return result;
}
async function deleteByParams(params) {
    const result = await itemsModels.deleteOne({ idproduct: params });
    console.log(`Se borró el Item_ID: ${id}`);
    return result;
}

module.exports = {
    getAllItems,
    getItemByParams,
    deleteByParams
};