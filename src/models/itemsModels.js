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
    // Ejecuta la consulta SQL para obtener productos y la información relacionada segun el N° de params ingresado.
    const [productRows, productFields] = await conn.query('SELECT product.*, licence.licence_name FROM product INNER JOIN licence ON product.licence_id = licence.licence_id WHERE ?;', params);
   
    // Accede a la propiedad category_id solo si productRows[0] existe.
    const licenceId = productRows[0]?.licence_id;

    // Ejecuta una segunda consulta SQL ingresando la información de la query anterior.
    const [prodRelRows, prodRelFields] = await conn.query('SELECT product.*, licence.licence_name FROM product INNER JOIN licence ON product.licence_id = licence.licence_id WHERE product.licence_id = ? AND product.product_id <> ?;', [licenceId, params.product_id]);

    // Combina los resultados de ambas consultas en una estructura de datos.
    const result = {
    products: productRows,
    otherData: prodRelRows
};

    // Devuelve la estructura de datos que contiene los resultados de ambas consultas.
    return result;
    
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