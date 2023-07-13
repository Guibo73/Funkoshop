const errorsHandler = require('../utils/errorsHandler.js');

const error500 = errorsHandler[500];

const auth = (req, res, next) => {
    if (req.user) {
        next();
    }
    return error500
}

module.exports = auth;

