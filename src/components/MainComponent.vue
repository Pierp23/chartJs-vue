<template>
  <div class="main">
    <div>
      <h2>
        Grafico 1
      </h2>
      <LineChart />
    </div>
    <hr>
    <div>
      <h2>
        Grafico 2
      </h2>
      <DoughnutChart />
    </div>
    <hr>
    <div>
      <h2>
        Grafico 3
      </h2>
      <BarChart />
    </div>
  </div>
</template>

<script>
import LineChart from './LineChart.vue';
import DoughnutChart from './DoughnutChart.vue'
import BarChart from './BarChart.vue';


export default {
  components: {
    LineChart,
    DoughnutChart,
    BarChart

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  width: 1000px;
  height: 100%;
  padding: 10px;
  margin: 0 auto;
}
</style>
