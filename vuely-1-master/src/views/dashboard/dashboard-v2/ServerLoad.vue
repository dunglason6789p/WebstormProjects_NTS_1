<template>
    <div id="chartdiv" style="width: 100%; height: 270px;"></div>
</template>

<script>
/* eslint-disable */
export default {
  mounted () {
    var chart = AmCharts.makeChart('chartdiv', {
      'theme': 'none',
      'type': 'gauge',
      'axes': [{
        'topTextFontSize': 16,
        'topTextYOffset': 50,
        'axisColor': '#354052',
        'axisThickness': 1,
        'endValue': 100,
        'gridInside': true,
        'inside': true,
        'radius': '75%',
        'valueInterval': 20,
        'tickColor': '#354052',
        'startAngle': -90,
        'endAngle': 90,
        'bandOutlineAlpha': 0,
        'bands': [
          {
            'color': '#E2E7EE',
            'endValue': 100,
            'innerRadius': '105%',
            'radius': '140%',
            'startValue': 0
          },
          {
            'color': '#39B54A',
            'endValue': 0,
            'innerRadius': '105%',
            'radius': '140%',
            'gradientRatio': [-1, 0, 1],
            'startValue': 0
          }
        ]
      }],
      'arrows': [{
        'alpha': 1,
        'innerRadius': '25%',
        'nailRadius': 0,
        'radius': '140%'
      }]
    })

    setTimeout(function () {
      setInterval(randomValue, 2000)
    }, 4000)

    // set random value
    function randomValue () {
      var value = Math.round(Math.random() * 100)
      if(value > 70) {
        chart.axes[0].bands[1].color = '#F85359'
      } else if (value > 50 && value < 70) {
        chart.axes[0].bands[1].color = '#F7981C'
      } else {
        chart.axes[0].bands[1].color = '#39B54A'
      }
      chart.arrows[0].setValue(value)
      chart.axes[0].setTopText(value + '%')
      // adjust darker band to new value
      chart.axes[0].bands[1].setEndValue(value)
    }
  }
}
</script>
