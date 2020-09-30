import { Router } from "express";
import * as controller from "../controller/products.controller";
const router = Router();

router.get("/", controller.getController);
router.get("/:id", controller.getByIdController);
router.post("/", controller.postController);
router.put("/:id", controller.putController);
router.delete("/:id", controller.deleteController);

export default router;
