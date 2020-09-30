import { Router } from "express";
import * as controller from "../controller/login.controller";
const router = Router();

router.post("/", controller.loginControllerPost);
export default router;
