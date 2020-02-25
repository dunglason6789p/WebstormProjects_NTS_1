<!-- Vue Chart Page -->
<template>
  <v-container fluid grid-list-xl py-0>
    <v-layout row wrap>
      <v-flex xs12 sm6 md6>
        <div class="app-card">
          <div class="app-card-title">
            <h3>Bar Chart</h3>
          </div>
          <div class="app-card-content">
            <bar-chart :width="370" :height="246"></bar-chart>
          </div>
        </div>
        <div class="app-card">
          <div class="app-card-title">
            <h3>Line Chart</h3>
          </div>
          <div class="app-card-content">
            <line-chart :width="370" :height="246"></line-chart>
          </div>
        </div>
        <div class="app-card">
          <div class="app-card-title">
            <h3>Doughnut Chart</h3>
          </div>
          <div class="app-card-content">
            <doughnut-chart :width="370" :height="246"></doughnut-chart>
          </div>
        </div>
        <div class="app-card">
          <div class="app-card-title">
            <h3>Gradient Line Chart</h3>
          </div>
          <div class="app-card-content">
            <gradient-line-chart :width="370" :height="246"></gradient-line-chart>
          </div>
        </div>
      </v-flex>
      <v-flex xs12 sm6 md6>
        <div class="app-card">
          <div class="app-card-title">
            <h3>Polar Area Chart</h3>
          </div>
          <div class="app-card-content">
            <polar-area-chart :width="370" :height="246"></polar-area-chart>
          </div>
        </div>
        <div class="app-card">
          <div class="app-card-title">
            <h3>Radar Chart</h3>
          </div>
          <div class="app-card-content">
            <radar-chart :width="370" :height="246"></radar-chart>
          </div>
        </div>
        <div class="app-card">
          <div class="app-card-title">
            <h3>Bubble Chart</h3>
          </div>
          <div class="app-card-content">
            <bubble-chart :width="370" :height="246"></bubble-chart>
          </div>
        </div>
        <div class="app-card">
          <div class="app-card-title">
            <h3>Pie Chart</h3>
          </div>
          <div class="app-card-content">
            <pie-chart :width="370" :height="246"></pie-chart>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import BarChart from './vue-chartjs/BarChart'
import BubbleChart from './vue-chartjs/BubbleChart'
import DoughnutChart from './vue-chartjs/DoughnutChart'
import LineChart from './vue-chartjs/LineChart'
import PieChart from './vue-chartjs/PieChart'
import PolarAreaChart from './vue-chartjs/PolarAreaChart'
import RadarChart from './vue-chartjs/RadarChart'
import GradientLineChart from './vue-chartjs/GradientLineChart'

export default {
  components: {
    BarChart,
    BubbleChart,
    DoughnutChart,
    LineChart,
    PieChart,
    PolarAreaChart,
    RadarChart,
    GradientLineChart
  }
}
</script>
