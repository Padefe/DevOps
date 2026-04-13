async function verifiserInnlogging()
{
    try
    {
        const verfikasjon = await fetch("http://localhost:3000/api/auth/verifiser",
            {
                method: "GET",
                credentials: "include"
            }
        )

        console.log(verfikasjon.status);

        if (verfikasjon.status !== 200)
        {
            window.location.href = "/";
        }
    }
    catch (error)
    {
        console.log("Verifisering feilet");
    }   
}

async function loggUt()
{
    try
    {
        const loggUt = await fetch("http://localhost:3000/api/auth/loggut",
            {
                method: "GET",
                credentials: "include"
            }
        )

        if(loggUt.status === 200)
        {
            verifiserInnlogging();
        }
    }
    catch (error)
    {
        console.log("logg ut feilet");
    }
}

document.addEventListener("DOMContentLoaded", verifiserInnlogging);