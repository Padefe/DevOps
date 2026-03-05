import { createClient } from "@supabase/supabase-js"; // Importerer funksjonen som lager supabase klienten
import dotenv from "dotenv"; // Importerer dotenv som inneholder miljøvariabler

dotenv.config(); // Laaster inn alle variabler fra .env

const supabaseUrl = process.env.SUPABASE_URL; // Henter URL til supabase fra .env
const supabaseKey = process.env.SUPABASE_KEY; // Henter KEY tul supabase fra .env

export const supabase = createClient(supabaseUrl, supabaseKey); // Eksporterer supabase klienten som skal brukes i prosjektet