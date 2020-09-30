import { Router } from "express";
import * as controller from "../controller/users.controller";
const router = Router();

router.get("/", controller.registerControllerGet);
router.post("/", controller.registerControllerPost);
export default router;
