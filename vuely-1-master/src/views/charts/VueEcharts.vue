<!-- Vue EChart Page -->
<template>
  <v-container fluid grid-list-xl py-0>
    <v-layout row wrap>
      <v-flex xs12 sm6 md6>
        <div class="app-card">
          <div class="app-card-title">
            <h3>Bar Chart</h3>
          </div>
          <div class="app-card-content overflow-hidden">
            <bar-chart></bar-chart>
          </div>
        </div>
        <div class="app-card">
          <div class="app-card-title">
            <h3>Doughnut Chart</h3>
          </div>
          <div class="app-card-content overflow-hidden">
            <doughnut-chart></doughnut-chart>
          </div>
        </div>
      </v-flex>
      <v-flex xs12 sm6 md6>
        <div class="app-card">
          <div class="app-card-title">
            <h3>Line Chart</h3>
          </div>
          <div class="app-card-content overflow-hidden">
            <line-chart></line-chart>
          </div>
        </div>
        <div class="app-card">
          <div class="app-card-title">
            <h3>Pie Chart</h3>
          </div>
          <div class="app-card-content overflow-hidden">
            <pie-chart></pie-chart>
          </div>
        </div>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12>
        <div class="app-card">
          <div class="app-card-title">
            <h3>Funnel Chart</h3>
          </div>
          <div class="app-card-content overflow-hidden">
            <funnel-chart></funnel-chart>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import BarChart from './vue-echarts/BarChart'
import DoughnutChart from './vue-echarts/DoughnutChart'
import LineChart from './vue-echarts/LineChart'
import PieChart from './vue-echarts/PieChart'
import FunnelChart from './vue-echarts/FunnelChart'

export default {
  components: {
    BarChart,
    PieChart,
    DoughnutChart,
    LineChart,
    FunnelChart
  }
}
</script>
