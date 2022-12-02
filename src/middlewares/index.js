const handleError = require('./error.middleware');
const authenticate = require('./auth.middleware');

module.exports = {
    handleError,
    authenticate,
}