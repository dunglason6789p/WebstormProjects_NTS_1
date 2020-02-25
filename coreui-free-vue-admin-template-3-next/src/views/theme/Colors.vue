<template>
  <div _zx_="02487_">
    <CCard _zx_="02488_">
      <CCardHeader _zx_="02489_">
        <CIcon _zx_="02490_" name="cil-drop"/> Theme colors
      </CCardHeader>
      <CCardBody _zx_="02491_">
        <CRow _zx_="02492_">
          <ColorTheme _zx_="02493_" color="bg-primary">
            <h6 _zx_="02494_">Brand Primary Color</h6>
          </ColorTheme>
          <ColorTheme _zx_="02495_" color="bg-secondary"><h6>Brand Secondary Color</h6></ColorTheme>
          <ColorTheme _zx_="02496_" color="bg-success"><h6>Brand Success Color</h6></ColorTheme>
          <ColorTheme _zx_="02497_" color="bg-danger"><h6>Brand Danger Color</h6></ColorTheme>
          <ColorTheme _zx_="02498_" color="bg-warning"><h6>Brand Warning Color</h6></ColorTheme>
          <ColorTheme _zx_="02499_" color="bg-info"><h6>Brand Info Color</h6></ColorTheme>
          <ColorTheme _zx_="02500_" color="bg-light"><h6>Brand Light Color</h6></ColorTheme>
          <ColorTheme _zx_="02501_" color="bg-dark"><h6>Brand Dark Color</h6></ColorTheme>
        </CRow>
      </CCardBody>
    </CCard>
    <CCard _zx_="02502_">
      <CCardHeader _zx_="02503_">
        <CIcon _zx_="02504_" name="cil-drop"/> Grays
      </CCardHeader>
      <CCardBody _zx_="02505_">
        <CRow _zx_="02506_">
          <ColorTheme _zx_="02507_" color="bg-gray-100"><h6>Brand 100 Color</h6></ColorTheme>
          <ColorTheme _zx_="02508_" color="bg-gray-200"><h6>Brand 200 Color</h6></ColorTheme>
          <ColorTheme _zx_="02509_" color="bg-gray-300"><h6>Brand 300 Color</h6></ColorTheme>
          <ColorTheme _zx_="02510_" color="bg-gray-400"><h6>Brand 400 Color</h6></ColorTheme>
          <ColorTheme _zx_="02511_" color="bg-gray-500"><h6>Brand 500 Color</h6></ColorTheme>
          <ColorTheme _zx_="02512_" color="bg-gray-600"><h6>Brand 600 Color</h6></ColorTheme>
          <ColorTheme _zx_="02513_" color="bg-gray-700"><h6>Brand 700 Color</h6></ColorTheme>
          <ColorTheme _zx_="02514_" color="bg-gray-800"><h6>Brand 800 Color</h6></ColorTheme>
          <ColorTheme _zx_="02515_" color="bg-gray-900"><h6>Brand 900 Color</h6></ColorTheme>
        </CRow>
      </CCardBody>
    </CCard>
  </div></template>

<script>
import ColorTheme from './ColorTheme'
export default {
  name: 'Colors',
  components: { ColorTheme }
}
</script>
