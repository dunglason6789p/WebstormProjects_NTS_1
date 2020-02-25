// Pie chart
import { Pie } from 'vue-chartjs'

export default {
  extends: Pie,
  data () {
    return {
      options: {
        legend: {
          display: false
        }
      }
    }
  },
  mounted () {
    this.renderChart({
      labels: ['Men', 'Women', 'Kids'],
      datasets: [{
        data: [250, 100, 70],
        backgroundColor: [
          '#17C7DF',
          '#F64A32',
          '#FEA200'
        ],
        borderWidth: [0, 0, 0],
        hoverBackgroundColor: [
          '#17C7DF',
          '#F64A32',
          '#FEA200'
        ]
      }]
    }, this.options)
  }
}
