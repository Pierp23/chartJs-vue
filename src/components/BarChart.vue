<script>
import axios from 'axios';
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)



export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      loaded: false,
      chartData: '',
      chartOptions: {
        responsive: true
      }
    }
  },
  methods: {
    getDataJson() {
      this.loaded = false,
        axios.get('https://my-json-server.typicode.com/Pierp23/FakeStats/db')
          .then(response => {
            // handle success
            console.log(response.data.UsersAgeRange);
            // this.ageRange = response.data.UsersAgeRange
            this.chartData = {
              labels: response.data.UsersAgeRange.map(item => item.range),
              datasets: [{
                label: '',
                backgroundColor: ['#f87979', 'yellow', 'blue', 'green', 'red'],
                data: response.data.UsersAgeRange.map(item => item.connections)
              }]
            }
            this.loaded = true
            console.log(this.chartData)
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
    }
  },
  created() {
    this.getDataJson();
  }
}
</script>

<template>
  <Bar v-if="loaded" id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>
  
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
  