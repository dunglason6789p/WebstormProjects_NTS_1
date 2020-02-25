// Doughnut Chart Widget
import { Doughnut } from 'vue-chartjs'

export default {
  extends: Doughnut,
  data () {
    return {
      gradient1: null,
      gradient2: null,
      options: {
        legend: {
          position: 'bottom',
          display: true,
          labels: {
            usePointStyle: true,
            padding: 20,
            fullWidth: true
          }
        },
        cutoutPercentage: 65
      }
    }
  },
  mounted () {
    this.gradient1 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 150)
    this.gradient2 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 220)
    this.gradient3 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 100)

    this.gradient1.addColorStop(0, '#3958EE')
    this.gradient1.addColorStop(1, '#335FF1')

    this.gradient2.addColorStop(0, '#FD1568')
    this.gradient2.addColorStop(1, '#AB40AC')

    this.gradient3.addColorStop(0, '#00D1C4')
    this.gradient3.addColorStop(1, '#3194E5')

    this.renderChart({
      labels: ['Website', 'Mobile', 'Advertise'],
      datasets: [{
        data: [110, 270, 200],
        backgroundColor: [
          this.gradient1,
          this.gradient2,
          this.gradient3
        ],
        borderWidth: [0, 0, 0],
        hoverBackgroundColor: [
          this.gradient1,
          this.gradient2,
          this.gradient3
        ]
      }]
    }, this.options)
  }
}
