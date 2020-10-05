import { Router } from "express";
import { check } from "express-validator";
import * as controller from "../controller/products.controller";
const router = Router();

router.get("/", controller.getController);
router.post(
  "/",
  [
    check("name", "the name is required").not().isEmpty(),
    check("description", "The description is required").not().isEmpty(),
    check("price", "The price is required").not().isEmpty(),
    check("imgUrl", "The imgUrl is required").not().isEmpty(),
  ],
  controller.postController
);
router.get(
  "/:id",
  [check("id", "The id is required").isMongoId()],
  controller.getByIdController
);
router.put("/:id", controller.putController);
router.delete("/:id", controller.deleteController);

export default router;
