import { Router } from "express";
import { initialRelease } from "../../controllers/indexController";

const router = Router();

router.route("/").get(initialRelease);

export default router;
