const {userRegister, getAllUser} = require('./users.controller');
const {userLogin} = require('./auth.controllers');
const {productRegister, getAllProduct} = require('./products.controllers');
const {getUserCart, addToCart} = require('./carts.controllers');
const {purchase, getAll} = require('./purchase.controller');

module.exports = {
    userRegister,
    userLogin,
    productRegister,
    getAllUser,
    getAllProduct,
    getUserCart,
    addToCart,
    purchase,
    getAll,
}