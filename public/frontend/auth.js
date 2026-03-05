async function autentisering() //Asynkron funksjon. Denne gjør slik at vi kan kjøre asynkrone operasjoner
{
    const brukernavn = document.getElementById("brukernavn").value;
    const passord = document.getElementById("passord").value;

    //Husk loggføring på alt dere gjør
    console.log("Dette er brukernavnet som er skrevet inn: ", brukernavn);
    console.log("Dette er passordet som er skrevet inn: ", passord);

    if(!brukernavn || !passord)
    {
        console.log("Mangler brukernavn eller passord");
    }

    try //Try eller Prøv er at den skal prøve å kjøre en kode snutt. Den må ha en catch hvis den ikke virker
    {
        const authReq = await fetch("http://localhost:3000/api/auth/login", //Await og fetch. Await betyr at den skal vente på svar, fetch betyr at den skal hente informasjon fra ett annen kode (Backend i vårt tilfelle)
        {
            method: "POST", //Metode er POST. POST betyr at vi sender data fra en kode til en annen.
            headers: //Denne definerer hva slags type innehold som skal sendes
            {
                "Content-Type": "application/json" //I dette tilfelle er det en JSON serialisert tekst
            },
            credentials: "include", //At nettsiden skal inkludere cookies
            body: JSON.stringify({ brukernavn, passord }) //Body eller innhold av JSON. Vi stringifyer eller gjør om til en tekst og legger ved innholdet som skal brukes
        });

        const authRes = await authReq.json(); //Returnerer svaret fra fetch. Vi setter en ny await som venter på respons
    }
    catch (error) //Catch for try. Hvis try returnerer med en feil så skal denne kjøre
    {
        console.log("Try virket ikke");
    }
}