// News Letter Campaign Widget
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  data () {
    return {
      gradient1: null,
      gradient2: null,
      options: {
        scales: {
          yAxes: [{
            gridLines: {
              display: true,
              drawBorder: false
            },
            ticks: {
              stepSize: 5
            }
          }],
          xAxes: [{
            gridLines: {
              display: false,
              drawBorder: false
            }
          }]
        },
        tooltip: {
          enabled: true
        },
        legend: {
          display: false
        },
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  mounted () {
    let ctx = this.$refs.canvas.getContext('2d')
    let _stroke = ctx.stroke
    ctx.stroke = function () {
      ctx.save()
      ctx.shadowColor = 'rgba(0,0,0,0.5)'
      ctx.shadowBlur = 20
      ctx.shadowOffsetX = 0
      ctx.shadowOffsetY = 12
      _stroke.apply(this, arguments)
      ctx.restore()
    }

    this.gradient1 = this.$refs.canvas.getContext('2d').createLinearGradient(200, 0, 100, 0)
    this.gradient2 = this.$refs.canvas.getContext('2d').createLinearGradient(200, 0, 100, 0)

    this.gradient1.addColorStop(0, '#FD9477')
    this.gradient1.addColorStop(1, '#F58B9C')

    this.gradient2.addColorStop(0, '#00E6BE')
    this.gradient2.addColorStop(1, '#2B6CF7')

    this.renderChart({
      labels: [1, 2, 3, 4, 5, 6, 7],
      datasets: [
        {
          label: 'Data',
          lineTension: 0.1,
          borderColor: this.gradient1,
          pointBorderColor: this.gradient1,
          pointBorderWidth: 2,
          pointRadius: 6,
          fill: false,
          pointBackgroundColor: '#FFF',
          borderWidth: 3,
          data: [11, 7, 15, 12, 10, 14, 9]
        },
        {
          label: 'Data 2',
          lineTension: 0.1,
          borderColor: this.gradient2,
          pointBorderColor: this.gradient2,
          pointBorderWidth: 2,
          pointRadius: 6,
          fill: false,
          backgroundColor: '#FFF',
          borderWidth: 3,
          data: [19, 21, 19, 20, 22, 17, 18]
        }
      ]
    }, this.options)
  }
}
