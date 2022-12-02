const {ProductServices} = require('../services');

const productRegister = async (req, res, next) => {
    try {
        const newProduct = req.body;
        const result = await ProductServices.create(newProduct);
        res.status(201).json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: 'insuficient data',
        })
    }
}


const getAllProduct = async (req, res, next) => {
    try {
        const products = await ProductServices.getAll();
        res.json(products);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: 'Something got wrong :(',
        })
    }
}

module.exports = {
    productRegister,
    getAllProduct,
}