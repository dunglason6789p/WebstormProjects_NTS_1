// Sales Widget
import { Bar, Line } from 'vue-chartjs'

export default ({
  extends: Bar,
  Line,
  data: function () {
    return {
      gradient1: null,
      options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          yAxes: [{
            stacked: true,
            ticks: {
              beginAtZero: true,
              padding: 10,
              stepSize: 10
            },
            gridLines: {
              display: true,
              drawBorder: false
            }
          }],
          xAxes: [{
            stacked: true,
            ticks: {
              padding: 10
            },
            barPercentage: 0.7,
            gridLines: {
              display: false,
              drawBorder: false
            }
          }]
        },
        legend: {
          display: false
        }
      }
    }
  },
  mounted () {
    let ctx = this.$refs.canvas.getContext('2d')
    let _stroke = ctx.stroke
    ctx.stroke = function () {
      ctx.save()
      ctx.shadowColor = '#000'
      ctx.shadowBlur = 10
      ctx.shadowOffsetX = 0
      ctx.shadowOffsetY = 12
      _stroke.apply(this, arguments)
      ctx.restore()
    }

    this.gradient1 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 220)
    this.gradient2 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 300, 0, 200)
    this.gradient1.addColorStop(0, '#FF9448')
    this.gradient1.addColorStop(1, '#FC6870')

    this.gradient2.addColorStop(0, '#5136DD')
    this.gradient2.addColorStop(1, '#2672FB')

    this.renderChart({
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct'],
      datasets: [
        {
          type: 'line',
          label: 'Sales',
          borderColor: '#3EB64E',
          pointBackgroundColor: '#FFF',
          spanGaps: false,
          lineTension: 0,
          fill: false,
          cubicInterpolationMode: 'monotone',
          pointBorderWidth: 2,
          pointRadius: 6,
          pointBorderColor: '#3EB64E',
          data: [40, 32, 45, 55, 35, 48, 31, 25, 28, 20]
        },
        {
          type: 'bar',
          label: 'Earned',
          backgroundColor: this.gradient2,
          hoverBackgroundColor: '#5136DD',
          borderWidth: 0,
          data: [45, 32, 50, 42, 32, 46, 30, 25, 29, 21]
        },
        {
          type: 'bar',
          label: 'Views',
          backgroundColor: this.gradient1,
          hoverBackgroundColor: '#FF9448',
          borderWidth: 0,
          data: [10, 20, 12, 30, 10, 32, 28, 30, 20, 18]
        }
      ]
    }, this.options)
  }
})
