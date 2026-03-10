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

export async function checkHashedPassword(loggPassord, hashedPassword)
{
    console.log("authService login passord", loggPassord);

    const validerPassord = await bcrypt.compare(loggPassord, hashedPassword);

    if (!validerPassord)
    {
        return { success: false };
    }
    else
    {
        return { success: true };
    }
}