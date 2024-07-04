import { Router } from "express";
import { getProducts } from "../controllers/productsController";

const router = Router();

router.route("/").get(getProducts);

export default router;
