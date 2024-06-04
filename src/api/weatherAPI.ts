import { fetchWeatherApi } from "openmeteo";

const url = "https://api.open-meteo.com/v1/forecast";

// I Fredags:
const params = {
  latitude: 55.555771,
  longitude: 12.96299,
  current: ["temperature_2m", "weather_code"],
  daily: "uv_index_max",
  timezone: "Europe/Berlin",
};

// I fredags:
export const getWeatherData = async () => {
  const responses: any = await fetchWeatherApi(url, params)
    .then((response) => {
      const utcOffsetSeconds = response[0].utcOffsetSeconds();
      const current = response[0].current();
      const daily = response[0].daily();

      return {
        current: {
          time: new Date((Number(current?.time()) + utcOffsetSeconds) * 1000),
          temperature2m: current?.variables(0)?.value(),
          weatherCode: current?.variables(1)?.value(),
        },
        daily: {
          time: new Date((Number(daily?.time()) + utcOffsetSeconds) * 1000),
          temperature2m: daily?.variables(0)?.value(),
          weatherCode: daily?.variables(1)?.value(),
          uvIndexMax: daily?.variables(2)?.valuesArray(),
        },
      };
    })
    .catch((err) => {
      console.log(err);
    });
  return responses;
};
