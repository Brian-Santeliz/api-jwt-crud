import { Router } from "express";
import { check } from "express-validator";
import * as controller from "../controller/register.controller";
const router = Router();

router.get("/", controller.registerControllerGet);
router.post(
  "/",
  [
    check("name", "The field name is required").not().isEmpty().isString(),
    check("email", "The field email is required").isEmail(),
    check("password", "Password length is of 6 characters").isLength({
      min: 6,
    }),
  ],
  controller.registerControllerPost
);
export default router;
