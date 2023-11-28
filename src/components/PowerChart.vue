<!-- <script>
// import { ref, watch } from 'vue'
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend)


export default {
  name: 'PowerChart',
  components: { Line },
  computed: {
    chartData() {
      return this.chartDatas;
    }
  },
  data() {
    return {
      arrayPower: [],
      fromArrayToChart: 0,
      startInterval: null,
      stopInterval: null,
      timeSet: false,
      loaded: false,
      chartDatas: {
        labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'],
        datasets: [{
          label: '%',
          backgroundColor: '#f87979',
          data: [],
          tension: 0.4
        }]
      }
      ,
      chartOptions: {
        responsive: true
      }
    }
  },
  methods: {
    getArray() {
      const arrayLength = 24
      for (let i = 0; i < arrayLength; i++) {
        let randNum = 0
        randNum = Math.floor(Math.random() * 101);
        // console.log(randNum);
        this.arrayPower.push(randNum)
        this.chartDatas.datasets[0].data.push(randNum)
      }
      console.log(this.arrayPower)
      this.loaded = true


    },
    solarPowerFunction() {
      console.log('START')
      this.chartDatas = {
        labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'],
        datasets: [{
          label: '%',
          backgroundColor: '#f87979',
          data: [],
          tension: 0.4
        }]
      }
      this.loaded = false
      this.startInterval = setInterval(() => {
        let randIndex = Math.floor(Math.random() * 24);
        this.fromArrayToChart = this.arrayPower[randIndex];

        this.chartDatas.datasets[0].data.push(this.fromArrayToChart)
        console.log(this.fromArrayToChart, this.chartDatas.datasets[0].data)

        this.loaded = true
      }, 1000)



    },
    stopSetInterval() {
      clearInterval(this.startInterval)
      console.log('STOP')
    }
  },
  created() {
    this.getArray();
  }
}
</script>

<template>
  <div>
    DATI POWER:
    <span @click.once="this.solarPowerFunction()">
      {{ fromArrayToChart }}
    </span>
    <br>
    <span @click.once="this.stopSetInterval()">STOP</span>

    <div>
      <Line v-if="loaded" id="my-chart-id" :options="chartOptions" :data="chartDatas" />
    </div>
  </div>
</template>


<style scoped></style>