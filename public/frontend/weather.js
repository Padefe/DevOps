
let valgtLat;
let valgtLon;

// 1. Lag kart
const map = L.map('map').setView([0, 0], 0);

// 2. Legg til bakgrunnskart (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
        maxZoom: 19,
    }).addTo(map);

// 3. Marker som flytter seg når du klikker
let marker;

// 4. Hent lat/lon når brukeren klikker
map.on('click', e => 
{
    valgtLat = e.latlng.lat.toFixed(4);
    valgtLon = e.latlng.lng.toFixed(4);

    if (marker) marker.remove();
    marker = L.marker([valgtLat, valgtLon]).addTo(map);

    console.log(valgtLat, valgtLon);
});

async function fetchWeatherData()
{
    try
    {
        console.log(valgtLat);
        const weatherReq = await fetch("http://localhost:3000/api/vaer/fetchWeather",
            {
                method: 'POST',
                headers:
                {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ valgtLat, valgtLon })
            });
        const weatherRes = await weatherReq.json();
        console.log(weatherRes);
 
        const weatherDiv = document.getElementById('weatherData');
   
        weatherDiv.innerHTML = '';
        const weatherElement = document.createElement('div');
        weatherElement.className = 'vaer';
        weatherElement.style.display = "block";
        weatherElement.innerHTML =
            `
            <h1>Værmelding</h1>
            <p>Tid: ${weatherRes.vaerInfo.time}</p>
            <p>Temperatur: ${weatherRes.vaerInfo.temperature}</p>
            <p>Vær: ${weatherRes.vaerInfo.next1hSymbol}</p>
            <p>Regn: ${weatherRes.vaerInfo.precipitationAmountNext1h}</p>
            <p>Wind hastighet: ${weatherRes.vaerInfo.windSpeed}</p>
            `;
        weatherDiv.appendChild(weatherElement);
    }
    catch (error)
    {
        console.log("Kunne ikke hente vær data");
    }
}