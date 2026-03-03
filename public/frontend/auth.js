async function autentisering() //Asynkron funksjon. Denne skal kjøre separat fra alle funksjoner
{
    const brukernavn = document.getElementById("brukernavn").value;

    //Husk loggføring på alt dere gjør
    console.log("Dette er brukernavnet som er skrevet inn: ", brukernavn);

    if(!brukernavn)
    {
        console.log("Mangler brukernavn");
    }

    try //Try eller Prøv er at den skal prøve å kjøre en kode snutt. Den må ha en catch hvis den ikke virker
    {
        const authReq = await fetch("http://localhost:3000/api/auth/login", //Await og fetch. Await betyr at den skal vente på svar, fetch betyr at den skal hente informasjon fra ett annen kode (Backend i vårt tilfelle)
        {
            method: "POST", //Metode er POST. POST betyr at vi sender data fra en kode til en annen.
            headers: //Denne definerer hva slags type innehold som skal sendes
            {
                "Content-Type": "application/json" //I dette tilfelle er det en JSON fil
            },
            credentials: "include", //At JSON skal inkludere noe
            body: JSON.stringify({ brukernavn }) //Body eller innhold av JSON. Vi stringifyer eller gjør om til en tekst og legger ved innholdet som skal brukes
        });

        const authRes = await authReq.json(); //Returnerer svaret fra fetch. Vi setter en ny await som venter på respons
    }
    catch (error) //Catch for try. Hvis try returnerer med en feil så skal denne kjøre
    {
        console.log("Try virket ikke");
    }
}