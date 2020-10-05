import { Router } from "express";
import { check } from "express-validator";
import * as controller from "../controller/login.controller";
const router = Router();

router.post(
  "/",
  [
    check("email", "Field email is required").isEmail(),
    check("password", "Password length min is 6 characters").isLength({
      min: 6,
    }),
  ],
  controller.loginControllerPost
);
export default router;
