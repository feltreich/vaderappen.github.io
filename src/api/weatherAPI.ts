import { fetchWeatherApi } from "openmeteo";
import {
  WeatherData,
  CurrentWeather,
  DailyWeather,
} from "@/components/weatherCard/weatherCardTypes";

const url = "https://api.open-meteo.com/v1/forecast";

// I Fredags:
const params = {
  latitude: 55.555771,
  longitude: 12.96299,
  forecast_days: 7,
  current: ["temperature_2m", "weather_code"],
  daily: "uv_index_max",
  timezone: "Europe/Berlin",
};

// I fredags:
export const getWeatherData = async () => {
  const responses: any = await fetchWeatherApi(url, params)
    .then((response) => {
      console.log(responses);
      const _response: any = responses[0];
      const utcOffsetSeconds = _response.utcOffsetSeconds();
      const current = _response.current();
      const daily = _response.daily();

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
};

//GPT:
// const locations = [{ latitude: 55.555771, longitude: 12.96299 }];

//GPT:
// const params = (latitude: any, longitude: any) => ({
//   latitude,
//   longitude,
//   forecast_days: 7,
//   current: ["temperature_2m", "weather_code"],
//   daily: "uv_index_max",
//   timezone: "Europe/Berlin",
// });

//GPT:
// export const getWeatherData = async (): Promise<WeatherData[]> => {
//   const responses: any = await Promise.all(
//     locations.map((location) =>
//       fetchWeatherApi(url, params(location.latitude, location.longitude))
//     )
//   );
//   return responses.map((response: any[]) => {
//     console.log(response);
//     const _response: any = response[0];
//     const utcOffsetSeconds = _response.utcOffsetSeconds();
//     const current = _response.current();
//     const daily = _response.daily();

//     return {
//       current: {
//         time: new Date((Number(current?.time()) + utcOffsetSeconds) * 1000),
//         temperature2m: current?.variables(0)?.value(),
//         weatherCode: current?.variables(1)?.value(),
//       },
//       daily: {
//         uvIndexMax: daily?.variables(0)?.valuesArray(),
//       },
//     };
//   });
// };
