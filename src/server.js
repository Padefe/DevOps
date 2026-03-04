// server import for moduler av server oppsett og ESM filstier
import express from "express"; 
import path from "path";
import { fileURLToPath } from "url";

// Routes import
import brukerRoutes from "../src/routes/authRoutes.js";

// Simulerer __dirname i ESM ved å konvertere import.meta.url til filsti
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initierer express som en konstant
const app = express();

// Grunnleggende middleware. Sier at express skal bruke json format
app.use(express.json());

// Setter opp filsti for statiske filer (HTML, CSS og Frontend JS og bilder)
app.use(express.static(path.join(__dirname, "..", "public")));

// API routes. Setter opp egen definert ruting i stedenfor å eksponere filstruktur
app.use("/api/auth", brukerRoutes);

// HTML-sidene vi bruker i prosjektet
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

//Serveren og hvilken port den skal lytte til
app.listen(3000, () => console.log("Server kjører på http://localhost:3000"));