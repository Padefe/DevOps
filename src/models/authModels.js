import { supabase } from "../config/supabase.js";

export async function registrerBrukere(brukernavn)
{
    return await supabase
    .from("Brukere")
    .insert([
        {
            Brukernavn: brukernavn
        }
    ])
    .select();
}