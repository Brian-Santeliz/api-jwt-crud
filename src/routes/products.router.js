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
router.put(
  "/:id",
  [
    check("id", "The id to update required").isMongoId(),
    check("name", "the name is required").not().isEmpty(),
    check("description", "The description is required").not().isEmpty(),
    check("price", ["The price is required", "The price is a number"])
      .not()
      .isEmpty()
      .isNumeric(),
    check("imgUrl", "The imgUrl is required").not().isEmpty(),
  ],
  controller.putController
);
router.delete(
  "/:id",
  [check("id", "The ID To delete is required").isMongoId()],
  controller.deleteController
);

export default router;
