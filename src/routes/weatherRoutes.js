import { Router } from "express";
import * as weatherController from "../controllers/weatherController.js";

const router = Router();

router.post("/fetchWeather", weatherController.fetchWeather);

export default router;