const UserServices = require ('./users.services');
const AuthServices = require ('./auth.services');
const ProductServices = require ('./products.services');
const CartServices = require('./cart.service');
const PurchaseServices = require('./purchase.services')

module.exports = {
    UserServices,
    AuthServices,
    ProductServices,
    CartServices,
    PurchaseServices
}