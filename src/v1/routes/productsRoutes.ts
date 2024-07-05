import { Router } from "express";
import {
  getProducts,
  createProduct,
  getProductById,
  deleteProductById,
  getProductByName,
  deleteProductByName,
  updateProductById,
  updateProductByName,
} from "../../controllers/productsController";

const router = Router();
/**
 * @openapi
 * /v1/products:
 *   get:
 *     tags:
 *       - Products
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
 *                   items:
 *                     type: object
 */

router.route("/v1/products").get(getProducts).post(createProduct);

/**
 * @openapi
 * /v1/products/{productId}:
 *   get:
 *     tags:
 *       - ProductsById
 *     parameters:
 *       - in: query
 *         name: productId
 *         schema:
 *           type: string
 *         description: Product identifier
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
 *                   items:
 *                     type: object
 */

/**
 * @openapi
 * /v1/products/{productId}:
 *   delete:
 *     tags:
 *       - ProductsById
 *     parameters:
 *       - in: query
 *         name: productId
 *         schema:
 *           type: string
 *         description: Product identifier
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
 *                   items:
 *                     type: object
 */

/**
 * @openapi
 * /v1/products/{productId}:
 *   put:
 *     tags:
 *       - ProductsById
 *     parameters:
 *       - in: query
 *         name: productId
 *         schema:
 *           type: string
 *         description: Product identifier
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
 *                   items:
 *                     type: object
 */

router
  .route("/v1/products/:productId")
  .get(getProductById)
  .delete(deleteProductById)
  .put(updateProductById);

  /**
 * @openapi
 * /v1/products/name/{productName}:
 *   get:
 *     tags:
 *       - ProductsByName
 *     parameters:
 *       - in: query
 *         name: productId
 *         schema:
 *           type: string
 *         description: Product identifier
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
 *                   items:
 *                     type: object
 */

/**
 * @openapi
 * /v1/products/name/{productName}:
 *   delete:
 *     tags:
 *       - ProductsByName
 *     parameters:
 *       - in: query
 *         name: productId
 *         schema:
 *           type: string
 *         description: Product identifier
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
 *                   items:
 *                     type: object
 */

/**
 * @openapi
 * /v1/products/name/{productName}:
 *   put:
 *     tags:
 *       - ProductsByName
 *     parameters:
 *       - in: query
 *         name: productId
 *         schema:
 *           type: string
 *         description: Product identifier
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
 *                   items:
 *                     type: object
 */

router
  .route("/v1/products/name/:productName")
  .get(getProductByName)
  .delete(deleteProductByName)
  .put(updateProductByName);

export default router;
