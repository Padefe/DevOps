import { registrerBrukere } from "../models/authModels.js"; // Importering av funksjonen registrerBrukere fra authModels.js filen
import { loggInnBruker } from "../models/authModels.js";
import { hashThePassword } from "../services/authService.js";

//Export av data fra login, mottar requests (req) og sender respons (res)
export async function registrer(req, res)
{
    const {regBrukernavn, regPassord} = req.body; //Body fra frontend. JSON dataene som klienten sendte i POST requesten

    console.log("authController brukernavn: ", regBrukernavn);
    console.log("authController passord: ", regPassord);

    const hashpassord = await hashThePassword(regPassord);

    console.log("authController hashpassword", hashpassord);

    const { data: registrerBruker } = await registrerBrukere(regBrukernavn, hashpassord); // Venter på svar fra authModels.js

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

export async function login(req, res)
{
    const { loggBrukernavn, loggPassord } = req.body;

    console.log("authController loggBrukernavn", loggBrukernavn);
    console.log("authController loggPassord", loggPassord);

    const { data: loggBrukere } = await loggInnBruker(loggBrukernavn, loggPassord);

    console.log("authController loggBrukere (Info fra database)", loggBrukere);

    if (loggBrukere)
    {
        console.log("authController bruker logget inn");
        return res.json({ success: true });
    }
    else
    {
        console.log("authController bruker ikke logget inn :(");
        return res.json({ success: false });
    }
}
