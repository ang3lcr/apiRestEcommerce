const {CartServices} = require('../services');


const getUserCart = async (req, res, next) => {
    try {
        const {id} = req.params;
        const cart = await CartServices.getByUser(id);
        res.json(cart);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: 'Not found',
        })
    }
}

const addToCart = async (req, res, next) => {
    try {
         const {userId} = req.params
        const {productId, quantity} = req.body
        const product = {userId: Number(userId), productId, quantity}
        console.log("ESTO ES PRODUCT", product);
        const result = await CartServices.addProductToCart(product, res)
        res.json(result)
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "Data error",
        })
    }
}

module.exports = {
    getUserCart,
    addToCart,
}