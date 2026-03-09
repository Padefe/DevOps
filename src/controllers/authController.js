import { registrerBrukere } from "../models/authModels.js"; // Importering av funksjonen registrerBrukere fra authModels.js filen

//Export av data fra login, mottar requests (req) og sender respons (res)
export async function registrer(req, res)
{
    const {regBrukernavn, regPassord} = req.body; //Body fra frontend. JSON dataene som klienten sendte i POST requesten

    console.log("authController brukernavn: ", regBrukernavn);
    console.log("authController passord: ", regPassord);

    const { data: registrerBruker } = await registrerBrukere(regBrukernavn, regPassord); // Venter på svar fra authModels.js

    console.log("authController test levering av database", registrerBruker);

    if(registrerBruker)
    {
        console.log("authController registrer: Bruker registrert");
        return res.json({ success: true });
    }
    else
    {
        console.log("authController registrer: Bruker ikke registrer");
        return res.json({ success: false });
    }
}
