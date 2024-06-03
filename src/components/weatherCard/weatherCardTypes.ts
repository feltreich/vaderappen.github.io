// export interface weatherCardType {
//   description: [number];
// }

export interface CurrentWeather {
  time: Date;
  temperature2m: number | undefined;
  weatherCode: number | undefined;
}

export interface DailyWeather {
  time: Date;
  temperature2m: number | undefined;
  weatherCode: number | undefined;
  uvIndexMax: number | undefined;
}

export interface WeatherData {
  current: CurrentWeather;
  daily: DailyWeather[];
}
