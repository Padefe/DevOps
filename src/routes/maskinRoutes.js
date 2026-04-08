import { Router } from "express";
import * as maskinController from "../controllers/maskinController.js";

const router = Router();

router.post("/registrer", maskinController.registrer);
router.get("/list", maskinController.list);

export default router;