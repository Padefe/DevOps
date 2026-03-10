import bcrypt from "bcryptjs";

export async function hashThePassword(regPassord)
{
    console.log("authService passord i klartekst", regPassord);

    try
    {
        return await bcrypt.hash(regPassord, 10);
    }
    catch (error)
    {
        console.log("Hashing feilet");
    }
}