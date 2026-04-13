// Import for express og controller
import { Router } from "express"; //Importerer router fra express
import * as authController from "../controllers/authController.js"; //Knytter all data fra authController.js til authController variabel
import { verifiserToken } from "../middlewares/authMiddleware.js";

const router = Router(); //Opprettelse av en konstant som bruker router pakken

router.post("/registrer", authController.registrer); // Definerer POST-ruten /registrer og knytter den til login-handleren i authController

router.post("/login", authController.login);

router.get("/verifiser", verifiserToken, authController.verifiser);

router.get("/loggut", authController.logout);

export default router; //Eksportering av ruter