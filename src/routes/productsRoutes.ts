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
} from "../controllers/productsController";

const router = Router();

router.route("/").get(getProducts).post(createProduct);

router
  .route("/:productId")
  .get(getProductById)
  .delete(deleteProductById)
  .put(updateProductById);

router
  .route("/name/:productName")
  .get(getProductByName)
  .delete(deleteProductByName)
  .put(updateProductByName);

export default router;
