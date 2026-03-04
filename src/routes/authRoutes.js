// Import for express og controller
import { Router } from "express"; //Importerer router fra express
import * as authController from "../controllers/authController.js"; //Knytter all data fra authController.js til authController variabel

const router = Router(); //Opprettelse av en konstant som bruker router pakken

router.post("/login", authController.login); //Kjører en post request for login i authController.js

export default router; //Eksportering av ruter