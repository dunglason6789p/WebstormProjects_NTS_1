<template>
  <CCol _zx_="02516_" xl="2" md="4" sm="6" xs="12" class="mb-4">
    <div
      :class="['theme-color w-75 rounded mb-3', color]"
      :style="{ paddingTop: '75%' }"
    ></div>
    <slot _zx_="02517_"></slot>
    <ColorView _zx_="02518_"/>
  </CCol></template>

<script>
import ColorView from './ColorView'
export default {
  name: 'ColorTheme',
  components: { ColorView },
  props: {
    color: String,
  }
}
</script>
