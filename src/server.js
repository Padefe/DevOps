// server import
import express from "express"; 
import path from "path";
import { fileURLToPath } from "url";

// Routes import
import brukerRoutes from "../src/routes/authRoutes.js";

// __dirname i ESM (Type måte å definere dynamiske filstier)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initierer express som en konstant
const app = express();

// Grunnleggende middleware
app.use(express.json());

// Statiske filer
app.use(express.static(path.join(__dirname, "..", "public")));

// API routes, Vi bruker falske rutinger fra frontend og ruter til de riktige filstier
app.use("/api/auth", brukerRoutes);

// HTML-sidene vi bruker i prosjektet
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

//Serveren og hvilken port den skal lytte til
app.listen(3000, () => console.log("Server kjører på http://localhost:3000"));