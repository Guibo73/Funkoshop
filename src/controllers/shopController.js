/*module.exports = {
    shopView: async (req, res) => {
        await res.render('shop/shop', {
            view: {
                tittle: "Shop | Funkoshop"
            }
        });
    }
};*/

const shopServices = require('../services/shopServices');

async function shopView(req, res) {
    const items = await shopServices.getAllItems();
    console.log(items);
    res.render('shop/shop', {
        view: {
            title: "Shop | Funkoshop"
        },
        items
    });
}

module.exports = { shopView };

/*const path = require('path');

function shopview(req, res) {
    const filePath = path.join(__dirname, '../../public/pages/shop.html');
    res.sendFile(filePath);
}*/