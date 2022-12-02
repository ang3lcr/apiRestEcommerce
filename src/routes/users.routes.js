const {Router} = require("express");
const {userRegister, getAllUser} = require('../controllers');
const {authenticate} = require('../middlewares');

/**
 * @openapi
 * /api/v1/users:
 *   post:
 *     summary: Create a user 
 *     tags: [Users]
 *     requestBody:
 *       description: username, email and password is needed to create a user
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: created
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
 *                   items:
 *                     type: object
 */

const router = Router();

router.post('/users', userRegister);
router.get('/users', authenticate, getAllUser);


module.exports = router;