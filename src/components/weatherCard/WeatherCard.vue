<template>
  <div class="weather-card">
    <div class="weather-card-header">
      <p class="day">{{ day }}</p>
      <p class="date">{{ month }} {{ date }}</p>
      <p class="time">{{ weatherData.current.time }}</p>
    </div>
    <div class="weather-icon">
      <i class="fas fa-sun"></i>
    </div>
    <p class="weather-description">{{ weatherDescription }}</p>
    <div class="temperature">
      <p class="temp">{{ Math.round(weatherData.current.temperature2m) }}°C</p>
    </div>
    <div class="uv-index">
      <p class="uv">{{ "UV index" }}</p>
    </div>
    <div class="uv-index-number">
      <p class="uv">{{ Math.round(weatherData.daily.uvIndexMax) }}</p>
    </div>
    <div class="uv-index-scale-indicator">
      <p class="uv-index-scale-indicator-label">
        {{ uvIndexMeterDescription }}
      </p>
    </div>
    <div class="uv-index-advice">
      <p class="uv-index-advice-label">{{ uvIndexAdvice }}</p>
    </div>
  </div>
</template>

<script>
import { getWeatherData } from "@/api/weatherAPI";
import {
  weatherDescription,
  uvIndexAdvice,
  uvIndexMeterDescription,
} from "./WeatherCardLogic";

export default {
  name: "WeatherCard",
  data() {
    const today = new Date();
    const days = ["SUN", "MON", "TUE", "WED", "THUR", "FRI", "SAT"];
    const months = [
      "JANUARY",
      "FEBRUARY",
      "MARCH",
      "APRIL",
      "MAY",
      "JUNE",
      "JULY",
      "AUGUST",
      "SEPTEMBER",
      "OCTOBER",
      "NOVEMBER",
      "DECEMBER",
    ];
    return {
      weatherData: getWeatherData,
      day: days[today.getDay()],
      month: months[today.getMonth()],
      date: today.getDate(),
    };
  },
  computed: {
    weatherDescription() {
      return weatherDescription(getWeatherData);
    },
    uvIndexAdvice() {
      return uvIndexAdvice(getWeatherData);
    },
    uvIndexMeterDescription() {
      return uvIndexMeterDescription(getWeatherData);
    },
  },
  components: {},
};
</script>

<style scoped>
.weather-card {
  display: grid;
  background: linear-gradient(to top right, #f0e369, #ff9d00ed);
  color: white;
  border-radius: 10px;
  padding: 20px;
  width: 200px;
  text-align: center;
  font-family: Arial, sans-serif;
}

.weather-card-header {
  margin-bottom: 10px;
}

.day {
  font-size: 1.1px;
  margin: 0;
}

.date {
  margin: 0;
}

.weather-icon {
  font-size: 3px;
  margin: 20px 0;
}

.weather-description {
  font-size: 1.2px;
  margin: 10px 0;
}

.temperature {
  display: flex;
  justify-content: space-around;
  font-size: 1.3px;
  margin: 10px 0;
}
.uv-index {
  display: flex;
  margin: auto;
  justify-content: space-around;
  text-align: center;
  color: rgb(59, 69, 88);
  font-size: 1.1px;
}
.uv-index-number {
  display: flex;
  margin: auto;
  justify-content: space-around;
  text-align: center;
  color: rgb(59, 69, 88);
  font-size: 2.4px;
}
.uv-index-scale-indicator {
  display: flex;
  justify-content: space-around;
  height: 46px;
  border-radius: 22px;
  background: linear-gradient(
    90deg,
    #00bc10,
    #ffeb3b,
    #ffc107,
    #ff5722,
    #f44336
  );
  color: rgb(59, 69, 88);

  .uv-index-scale-indicator-label {
    text-align: center;
    font-size: 14px;
    color: #333;
  }
}
.uv-index-advice {
  display: flex;
  margin: auto;
  justify-content: space-around;
  .uv-index-advice-label {
    text-align: center;
    color: rgb(59, 69, 88);
    font-size: 14px;
    padding: 0 10px;
  }
}

.uv-index-scale {
  width: 100%;
  text-align: center;
  margin-bottom: 10px;
}

.scale {
  display: flex;
  position: relative;
  height: 12px;
  width: 100%;
  border-radius: 6px;
  overflow: hidden;
}

.scale-section {
  flex: 1;
}

.low {
  background-color: #8bc34a;
}

.moderate {
  background-color: #ffeb3b;
}

.high {
  background-color: #ffc107;
}

.very-high {
  background-color: #ff5722;
}

.extreme {
  background-color: #f44336;
}

.scale-indicator {
  position: absolute;
  top: -4px;
  width: 8px;
  height: 20px;
  background-color: black;
  border-radius: 2px;
}

.scale-label {
  font-size: 14px;
  color: #333;
  margin-top: 5px;
}
</style>
