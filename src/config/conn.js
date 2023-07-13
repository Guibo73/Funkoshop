const mysql = require('mysql2');
require('dotenv').config();

/* El metodo .createConnection() nos permite iniciar una instancia de UNA conexion individual
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'characters'
});

connection.connect();
module.exports = connection;*/


/* Para multiples consultas se utiliza una pool de conexion */
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

// Exportamos la conexión como una promesa
//1. Probamos la conexion. Esto al momento de desplegarlo se puede borrar.
pool.getConnection((error, connection) => {
    if (error) {
        console.error('Hubo un error de conexión: ', error);
    }
    else {
        console.log('La conexión a la Base de Datos fue exitosa.');
        connection.release();
    }
});

//2. Si funciona la exportamos.
module.exports = {
    conn: pool.promise()
};