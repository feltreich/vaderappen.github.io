<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <WeatherView msg="Welcome to Your Vue.js App" />
</template>

<script>
import WeatherView from "../src/components/weatherview/WeatherView.vue";

export default {
  name: "App",
  components: {
    WeatherView,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
