<template>
  <div _zx_="02122_">
    <CCardGroup _zx_="02123_" columns class="card-columns cols-2">
      <CCard _zx_="02124_">
        <CCardHeader _zx_="02125_">
          Line Chart
          <div _zx_="02126_" class="card-header-actions">
            <a 
              href="https://coreui.io/vue/docs/components/charts" 
              class="card-header-action" 
              rel="noreferrer noopener" 
              target="_blank"
            >
              <small _zx_="02127_" class="text-muted">docs</small>
            </a>
          </div>
        </CCardHeader>
        <CCardBody _zx_="02128_">
          <CChartLineExample _zx_="02129_"/>
        </CCardBody>
      </CCard>
      <CCard _zx_="02130_">
        <CCardHeader _zx_="02131_">Bar Chart</CCardHeader>
        <CCardBody _zx_="02132_"><CChartBarExample/></CCardBody>
      </CCard>
      <CCard _zx_="02133_">
        <CCardHeader _zx_="02134_">Doughnut Chart</CCardHeader>
        <CCardBody _zx_="02135_"><CChartDoughnutExample/></CCardBody>
      </CCard>
      <CCard _zx_="02136_">
        <CCardHeader _zx_="02137_">Radar Chart</CCardHeader>
        <CCardBody _zx_="02138_"><CChartRadarExample/></CCardBody>
      </CCard>
      <CCard _zx_="02139_">
         <CCardHeader _zx_="02140_">Pie Chart</CCardHeader>
        <CCardBody _zx_="02141_"><CChartPieExample/></CCardBody>
      </CCard>
      <CCard _zx_="02142_">
        <CCardHeader _zx_="02143_">Polar Area Chart</CCardHeader>
        <CCardBody _zx_="02144_"><CChartPolarAreaExample/></CCardBody>
      </CCard>
      <CCard _zx_="02145_">
        <CCardHeader _zx_="02146_">Simple line chart</CCardHeader>
        <CCardBody _zx_="02147_">
          <CChartLineSimple _zx_="02148_" border-color="success" labels="months"/>
        </CCardBody>        
      </CCard>
      <CCard _zx_="02149_">
        <CCardHeader _zx_="02150_">Simple pointed chart</CCardHeader>
        <CCardBody _zx_="02151_"><CChartLineSimple pointed border-color="warning"/></CCardBody>
      </CCard>
      <CCard _zx_="02152_">
        <CCardHeader _zx_="02153_">Simple bar chart</CCardHeader>
        <CCardBody _zx_="02154_"><CChartBarSimple background-color="danger"/></CCardBody>        
      </CCard>
    </CCardGroup>
  </div></template>

<script>
import * as Charts from './index.js'
export default {
  name: 'Charts',
  components: {
    ...Charts
  }
}
</script>
