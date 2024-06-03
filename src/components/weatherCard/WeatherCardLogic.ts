export const weatherDescription = (weatherData: any) => {
  const weatherDescriptions = {
    "Clear sky": [0],
    "Mainly clear, partly cloudy, and overcast": [1, 2, 3],
    "Fog and depositing rime fog": [45, 48],
    "Drizzle: Light, moderate, and dense intensity": [51, 53, 55],
    "Freezing Drizzle: Light and dense intensity": [56, 57],
    "Rain: Slight, moderate and heavy intensity": [61, 63, 65],
    "Freezing Rain: Light and heavy intensity": [66, 67],
    "Snow fall: Slight, moderate, and heavy intensity": [71, 73, 75],
    "Snow grains": [77],
    "Rain showers: Slight, moderate, and violent": [80, 81, 82],
    "Snow showers slight and heavy": [85, 86],
    "Thunderstorm: Slight or moderate": [95],
    "Thunderstorm with slight and heavy hail": [96, 99],
  };

  for (const [description, codes] of Object.entries(weatherDescriptions)) {
    if (codes.includes(weatherData.current.weatherCode)) {
      return description;
    }
  }
  return "Unknown Weather";
};

export const uvIndexMeterDescription = (weatherData: any) => {
  const uvIndexCode = Math.round(weatherData.daily.uvIndexMax);
  const uvIndexMeterDescription = {
    Low: [0, 1, 2],
    Moderate: [3, 4, 5],
    High: [6, 7],
    "Very high": [8, 9, 10],
    Extreme: [11, 12, 13, 14, 15],
  };
  for (const [description, codes] of Object.entries(uvIndexMeterDescription)) {
    if (codes.includes(uvIndexCode)) {
      return description;
    }
  }
  return "Unknown UV Index";
};

/*
export const uvIndexMeter = (weatherData: any) => {
  const uvIndexMeter = {
    "Very Low": [0, 1, 2],
    "Very Moderate": [3, 4, 5],
    "Very High": [6, 7],
    "Very High high": [8, 9, 10],
    "Very Extreme": [11, 12, 13, 14, 15],
  };

  const values = Object.values(uvIndexMeter);
  const uvI = parseInt(Math.round(weatherData.daily.uvIndexMax).toFixed());

  return values.forEach((value, index) => {
    // Kolla om uvIndex finns i Enum - values
    if (value.includes(uvI)) {
      // Returnera key + value från uvIndexMeter baserat på index av value
      console.log(
        Object.keys(uvIndexMeter).findIndex((v, i) => {
          if (index === i) {
            console.log(v);
          }
        })
      );

      return Object.keys(uvIndexMeter).findIndex((v, i) => {
        if (index == i) {
          return v;
        }
      });
    }
  });

  // const X = parseInt(Math.round(weatherData.daily.uvIndexMax).toFixed());

  // for (const [description, codes] of Object.entries(uvIndexMeter)) {
  //   console.log(description);
  //   console.log(codes);
  //   console.log(X, "uvIndexMax");
  //   console.log(uvIndexMeter);
  //   if (codes.includes(X)) {
  //     console.log(description, "apa2");

  //     return description;
  //   }
  //   return "Bajs";
  // }
  // return "Slut på funktionen";
};
*/

export const uvIndexAdvice = (weatherData: any) => {
  const uvIndexCode = Math.round(weatherData.daily.uvIndexMax);
  const uvIndexAdvice = {
    "You can safely enjoy being outside!": [0, 1, 2],
    "Seek shade during midday hours! Slip on a shirt, slop on sunscreen and slap on hat!":
      [3, 4, 5, 6, 7],
    "Avoid being outside during midday hours! Make sure you seek shade! Shirt, sunscreen and hat are a must!":
      [8, 9, 10, 11, 12],
  };

  for (const [description, codes] of Object.entries(uvIndexAdvice)) {
    if (codes.includes(uvIndexCode)) {
      return description;
    }
  }
  return "Unknown UV Index";
};
