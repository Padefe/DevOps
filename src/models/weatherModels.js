import  { MET } from "../config/metrologiskInstitutt.js";

export async function fetchWeatherData(valgtLat, valgtLon)
{
    const lat = valgtLat;
    const lon = valgtLon;

    const url = new URL(`${MET.BASE}/compact`);
    url.searchParams.set('lat', lat);
    url.searchParams.set('lon', lon);
    url.searchParams.set('altitude', 90);

    console.log("weatherModels: ", url);

    const urlHeader = await fetch(url, 
    {
        headers: {'User-Agent': MET.USER_AGENT }
    });

    const urlData = await urlHeader.json();
    
    const metFirst = urlData?.properties?.timeseries?.[0];
    console.log("weatherModels header: ", metFirst);
    console.log('weatherModels data:\n', JSON.stringify(metFirst, null, 2));
    return metFirst;
}