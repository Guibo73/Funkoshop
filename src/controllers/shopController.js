const path = require('path');

function shopview(req, res) {
    const filePath = path.join(__dirname, '../../public/pages/shop.html');
    res.sendFile(filePath);
}

module.exports = shopview;