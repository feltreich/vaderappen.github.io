<template>
  <div>
    <div class="weatherView-list">
      <h1>Todays Weather:</h1>
      <WeatherCard
        v-for="(weatherData, index) in weatherDataList"
        :key="index"
        :weatherData="weatherData"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { getWeatherData } from "@/api/weatherAPI";
import WeatherCard from "../weatherCard/WeatherCard.vue";

export default defineComponent({
  name: "WeatherViewList",
  components: { WeatherCard },

  setup() {
    let weatherDataList: any = [];
    const fetchWeatherData = async () => {
      const data = getWeatherData();
      weatherDataList.value = [data];
    };
    onMounted(() => {
      fetchWeatherData();
    });
    return {
      weatherDataList,
    };
  },
});
</script>

<style>
#WeatherViewList {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  /* align-items: center;
  margin: 20px;
  margin-bottom: auto; */
  /* height: 100vh; */
  background-color: #f0f0f0;
}
</style>
