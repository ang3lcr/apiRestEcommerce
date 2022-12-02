const {Router} = require("express");
const {productRegister, getAllProduct} = require('../controllers');

const router = Router();

/**
 * @openapi
 * /api/v1/product:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get all products
 *     tags: [Products]
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
 * /api/v1/product/create:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Create a new product
 *     tags: [Products]
 *     requestBody:
 *       description: Create a new product
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: iPhone 14
 *               price:
 *                 type: float
 *                 example: 1000
 *               productImage:
 *                 type: string
 *                 example: http://www.image/image1.jpg
 *               availableQty:
 *                 type: integer
 *                 example: 150
 *               status:
 *                 type: boolean
 *                 example: true
 *               userId:
 *                 type: integer
 *                 example: 1
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


router.post('/product', productRegister);
router.get('/product/create', getAllProduct);

module.exports = router;