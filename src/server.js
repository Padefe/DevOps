// server import
import express from "express"; 
import path from "path";
import { fileURLToPath } from "url";

// __dirname i ESM (Type måte å definere dynamiske filstier)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Inititierer express som en konstant
const app = express();

// Grunnleggende middleware
app.use(express.json());

// Statiske filer
app.use(express.static(path.join(__dirname, "..", "public")));

// HTML-sidene vi bruker i prosjektet
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

//Serveren og hvilken port den skal lytte til
app.listen(3000, () => console.log("Server kjører på http://localhost:3000"));