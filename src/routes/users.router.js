import { Router } from "express";
import * as controller from "../controller/users.controller";
const router = Router();

router.post("/", controller.registerControllerPost);
router.get("/", controller.registerControllerGet);

export default router;
