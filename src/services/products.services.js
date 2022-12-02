const {Product} = require('../models');

class ProductServices {
    static async create (newProduct) {
    try {
        const result = await Product.create(newProduct);
        return result
    } catch (error) {
        throw error;        
    }        
    }

    static async getAll() {
        try {
            const result = await Product.findAll();
            return result;
        } catch (error) {
            throw error;
        }
    }



}

module.exports = ProductServices;