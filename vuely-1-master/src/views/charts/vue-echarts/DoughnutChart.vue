<!-- Doughnut Chart -->
<template>
    <ECharts :options="pie" style="width:100%; height:300px"></ECharts>
</template>

<script>
import ECharts from 'vue-echarts/components/ECharts.vue'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/title'

export default {
  components: {
    ECharts
  },
  data () {
    return {
      pie: {
        backgroundColor: '#FFFFF',
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        color: [
          '#17C7DF', '#F64A32', '#4EE2C6', '#01C840', '#FEA200'
        ],
        series: [
          {
            name: 'Product Sales',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            data: [
              {
                value: 1548,
                name: 'Product A'
              },
              {
                value: 310,
                name: 'Product B'
              },
              {
                value: 234,
                name: 'Product C'
              },
              {
                value: 135,
                name: 'Product D'
              },
              {
                value: 335,
                name: 'Product E'
              }
            ],
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            }
          }
        ]
      }
    }
  }
}
</script>
