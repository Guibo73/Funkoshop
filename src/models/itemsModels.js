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

const getOne = async (params) => {
    const [rows, fields] = await conn.query('SELECT product.*, licence.licence_name FROM product  INNER JOIN licence ON product.licence_id = licence.licence_id WHERE ?;', params);
    return rows;
    //return {rows};
};

const deleteOne = async (params) => {
    try {
        const [rows, fields] = await conn.query('DELETE FROM product WHERE ?;', params);
        return `El ID seleccionado ha sido eliminado`;
    }
    catch (err) {
        const error = `No se pudo borrar el ID seleccionado por | ${err}`;
        return error;
    }
};

module.exports = {
    getAll,
    getOne,
    deleteOne
};