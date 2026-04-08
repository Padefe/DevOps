import { supabase } from "../config/supabase.js";

export async function regMaskiner(maskinNavn, serienummer)
{
    console.log(maskinNavn, serienummer);
    return await supabase
        .from("Maskiner")
        .insert([
            {
                maskinnavn: maskinNavn,
                serienummer: serienummer
            }
        ])
        .select();
}

export async function hentAlleMaskiner()
{
    return await supabase
        .from("Maskiner")
        .select("*");
}