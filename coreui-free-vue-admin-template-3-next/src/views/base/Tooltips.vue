<template>
  <div _zx_="01346_">
    <CCard _zx_="01347_">
      <CCardHeader _zx_="01348_">
        <CIcon _zx_="01349_" name="cil-justify-center"/>
        <strong _zx_="01350_"> Bootstrap Tooltips </strong>
        <small _zx_="01351_"><code>v-c-tooltip</code> directive</small>
        <div _zx_="01352_" class="card-header-actions">
          <a 
            href="https://coreui.io/vue/docs/directives/tooltip" 
            class="card-header-action" 
            rel="noreferrer noopener" 
            target="_blank"
          >
            <small _zx_="01353_" class="text-muted">docs</small>
          </a>
        </div>
      </CCardHeader>
      <CCardBody _zx_="01354_">
        <CRow _zx_="01355_">
          <CCol _zx_="01356_" col="6">
            <div _zx_="01357_" class="text-center my-3">
              <CButton 
                color="secondary"
                v-c-tooltip.hover.click="'I am a tooltip!'"
              >
                Hover Me
              </CButton>
            </div>
          </CCol>
          <CCol _zx_="01358_" col="6">
            <div _zx_="01359_" class="text-center my-3">
              <CButton 
                v-c-tooltip="{content: 'I start open!', active:true }"
                color="secondary"
              >
                Hover me
              </CButton>
            </div>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
    <CCard _zx_="01360_">
      <CCardHeader _zx_="01361_">
        <CIcon _zx_="01362_" name="cil-justify-center"/>
        <strong _zx_="01363_"> Tooltips </strong>
        <small _zx_="01364_">placement</small>
      </CCardHeader>
      <CCardBody _zx_="01365_">
        <div _zx_="01366_" class="my-3">
          <CRow _zx_="01367_">
            <CCol
              md="4"
              class="py-4 text-center"
              v-for="placement in placements"
              :key="placement"
            >
              <CButton
                color="primary"
                v-c-tooltip.hover="{
                  content: `Placement ${placement}`,
                  placement
                }"
              >
                {{ placement }}
              </CButton>
            </CCol>
          </CRow>
        </div>
      </CCardBody>
    </CCard>
  </div></template>

<script>
export default {
  name: 'Tooltips',
  data () {
    return {
      placements: [
        'top-start', 'top', 'top-end',
        'bottom-start', 'bottom', 'bottom-end',
        'right-start', 'right', 'right-end',
        'left-start', 'left', 'left-end'
      ]
    }
  }
}
</script>
