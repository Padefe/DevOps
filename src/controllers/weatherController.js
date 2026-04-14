import { fetchWeatherData } from "../models/weatherModels.js";

export async function fetchWeather(req, res)
{
    const {valgtLat, valgtLon} = req.body;

    const fetchedWeatherData = await fetchWeatherData(valgtLat, valgtLon);

    const detaljer = fetchedWeatherData?.data?.instant?.details ?? {};
    const next1hDetails = fetchedWeatherData?.data?.next_1_hours?.details ?? {};
    const next1hSummary = fetchedWeatherData?.data?.next_1_hours?.summary ?? {};

    const vaerInfo = {
      time: fetchedWeatherData.time ?? null,
      temperature: detaljer.air_temperature ?? null,
      windSpeed: detaljer.wind_speed ?? null,
      precipitationAmountNext1h: next1hDetails.precipitation_amount ?? 0,
      next1hSymbol: next1hSummary.symbol_code ?? null,
    };

    if (fetchWeatherData)
    {
        return res.json({ vaerInfo });
    }
    else
    {
        return res.json({success: false});
    }
}