// Import for express og controller
import { Router } from "express"; //Importerer router fra express
import * as authController from "../controllers/authController.js"; //Knytter all data fra authController.js til authController variabel

const router = Router(); //Opprettelse av en konstant som bruker router pakken

router.post("/registrer", authController.registrer); // Definerer POST-ruten /registrer og knytter den til login-handleren i authController

router.post("/login", authController.login);

export default router; //Eksportering av ruter