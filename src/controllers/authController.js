import { registrerBrukere } from "../models/authModels.js"; // Importering av funksjonen registrerBrukere fra authModels.js filen

//Export av data fra login, mottar requests (req) og sender respons (res)
export async function login(req, res)
{
    const {brukernavn, passord} = req.body; //Body fra frontend. JSON dataene som klienten sendte i POST requesten

    console.log("authController brukernavn: ", brukernavn);
    console.log("authController passord: ", passord);

    const { data: registrerBruker } = await registrerBrukere(brukernavn, passord); // Venter på svar fra authModels.js

    console.log("authController test levering av database", registrerBruker);
}
