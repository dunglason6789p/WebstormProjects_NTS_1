// Bar Chart
import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  data: function () {
    return {
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            },
            gridLines: {
              display: true
            }
          }],
          xAxes: [ {
            gridLines: {
              display: false
            },
            categoryPercentage: 0.5,
            barPercentage: 0.8
          }]
        }
      }
    }
  },
  mounted () {
    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Series A',
          backgroundColor: '#F64A32',
          data: [40, 35, 60, 70, 20, 35, 40]
        }
      ]
    }, this.options)
  }
}
