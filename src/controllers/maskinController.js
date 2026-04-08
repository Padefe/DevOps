import {regMaskiner} from "../models/maskinModels.js";
import {hentAlleMaskiner} from "../models/maskinModels.js";

export async function registrer(req, res)
{
    const { maskinNavn, serienummer } = req.body;
    console.log(req.body);
    const { data: registrerMaskin } = await regMaskiner(maskinNavn, serienummer);

    console.log("maskinController registrer maskin:", registrerMaskin);
}

export async function list(req, res)
{
    const {data:alleMaskiner} = await hentAlleMaskiner();
    console.log("maskinController hent alle maskiner:", alleMaskiner);
    return res.json({ alleMaskiner });
}