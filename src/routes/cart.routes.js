const {Router} = require('express');
const {authenticate} = require('../middlewares')
const {getUserCart, addToCart} = require('../controllers')

const router = Router();
/**
 * @openapi
 * /api/v1/cart/products/{userId}:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get all products from the cart
 *     tags: [Cart]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: user Id
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items: {}
 * /api/v1/cart/{userId}:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Add products 
 *     tags: [Cart]
 *     requestBody:
 *       description: Get all products in cart
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               quantity:
 *                 type: integer
 *                 example: 4
 *               productId:
 *                 type: integer
 *                 example: 2
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: user Id
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items: {}
 */

router.get('/cart/:userId', authenticate, getUserCart);
router.post('/cart/products/:userId',authenticate, addToCart);


module.exports = router;