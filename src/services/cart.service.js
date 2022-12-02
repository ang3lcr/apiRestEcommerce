const {Cart, Product, ProductInCart} = require('../models');

class CartServices {
    static async getByUser(id) {
        try {
            const cart = await Cart.findOne({
                where: {userId: id},
            });
            return cart;
        } catch (error) {
            throw error;
        }
} 

static async addProductToCart (product){
    try {
        const searchProduct = await Product.findOne({where: product.productId});
        const searchCart = await Cart.findOne({where: {userId: product.userId}})
        let productData = {}
        if (searchProduct && searchCart) {
            productData.cartId = searchCart.id
            productData.quantity =  product.quantity 
            productData.productId =  product.productId 
            productData.price = searchProduct.price
            productData.name = searchProduct.name
            productData.stock = searchProduct.availableQty
        } else {
            throw error
        }
        const add = await ProductInCart.create({
            cartId: productData.cartId,
            quantity: product.quantity,
            productId: product.productId,
            price: productData.price
        })

        
     return productData
    } catch (error) {
        throw error
    }
}
}
module.exports = CartServices;