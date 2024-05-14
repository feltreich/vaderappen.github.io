<template>
  <div class="forecast">
    <h1>Dagens väder:</h1>
    <p v-if="weatherData">{{ weatherData }}</p>
  </div>
</template>

<script>
export default {
  name: "WeatherView",
  props: {
    msg: String,
  },
  data() {
    return {
      weatherData: "Laddar väder...",
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m",
        {
          method: "GET",
        }
      )
        .then((response) => {
          response.json().then((data) => {
            this.weatherData = data;
          });
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
