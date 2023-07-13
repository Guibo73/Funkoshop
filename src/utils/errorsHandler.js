const path = require('path');

const errorsHandler = {

    404: (req, res, next) => { 
        const filePath = path.resolve(__dirname + '../../../public/pages/404.html');
        res.status(404).sendFile(filePath) },

    500: (err, req, res, next) => { res.status(500).send('El servidor con la respuesta NO FUNCIONA') }

};

module.exports = errorsHandler;