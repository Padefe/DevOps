import { supabase } from "../config/supabase.js"; // Importerer databasetilkoblingen til en variabel supabase

export async function registrerBrukere(brukernavn, passord) // Eksport async funksjon fra authController. Legger ved brukernavn og passord
{
    return await supabase // Starter en supabase spørring og venter på respons
    .from("Brukere") // Velger tabellen "Brukere" i databasen
    .insert([ // Insert betyr at vi ønsker å legge til ny rad i tabellen
        {
            Brukernavn: brukernavn, // Før komma setter vi kolonne navnet i tabellen, etter komma legger vi verdien fra koden vi ønsker å sette inn i tabellen
            Passord: passord
        }
    ])
    .select(); // Dette setter vi slik at vi velger raden som vi jobber i, og som da blir returnert tilbake i koden strukturen. Uten får vi ingen data tilbake
}