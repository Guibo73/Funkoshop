const shopModels = require('../models/shopModels');

async function getAllItems() {
    const result = await shopModels.getAll();
    console.log("All Data Sent");
    return result;
}

module.exports = {
    getAllItems,
 };