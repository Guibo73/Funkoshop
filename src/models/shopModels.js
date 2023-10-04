const { conn } = require('../config/conn');

const getAll = async () => {
    try {
        const [rows, fields] = await conn.query('SELECT * FROM product;');
        return rows;
    }
    catch (err) {
        const error = `something went wrongs | ${err}`;
        return error;
    }
};

module.exports = {
    getAll,
};