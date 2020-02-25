<template>
  <table _zx_="02519_" class="w-100">
    <tbody _zx_="02520_">
    <tr _zx_="02521_">
      <td _zx_="02522_" class="text-muted">HEX:</td>
      <td _zx_="02523_" class="font-weight-bold">{{this.hexColor}}</td>
    </tr>
    <tr _zx_="02524_">
      <td _zx_="02525_" class="text-muted">RGB:</td>
      <td _zx_="02526_" class="font-weight-bold">{{this.bgColor}}</td>
    </tr>
    </tbody>
  </table></template>

<script>
import { rgbToHex } from '@coreui/coreui/dist/js/coreui-utilities'
export default {
  name: 'ColorView',
  data () {
    return {
      bgColor: 'rgb(255, 255, 255)'
    }
  },
  computed: {
    hexColor () {
      return rgbToHex(this.bgColor)
    }
  },
  methods: {
    setColor () {
      const elem = this.$parent.$el.children[0]
      const color = window.getComputedStyle(elem).getPropertyValue('background-color')
      this.bgColor = color || this.bgColor
    }
  },
  mounted () {
    this.setColor()
  }
}
</script>
