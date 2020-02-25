<template>
  <div _zx_="00924_">
    <CCard _zx_="00925_">
      <CCardHeader _zx_="00926_">
        <CIcon _zx_="00927_" name="cil-justify-center"/>
        <strong _zx_="00928_"> Bootstrap Popovers</strong>
        <div _zx_="00929_" class="card-header-actions">
          <a 
            href="https://coreui.io/vue/docs/directives/popover" 
            class="card-header-action" 
            rel="noreferrer noopener" 
            target="_blank"
          >
            <small _zx_="00930_" class="text-muted">docs</small>
          </a>
        </div>
      </CCardHeader>
      <CCardBody _zx_="00931_">
        <CRow _zx_="00932_">
          <CCol _zx_="00933_" col="6">
            <div _zx_="00934_" class="my-3 text-center">
              <CButton
                color="primary"
                v-c-popover="{
                  header: 'Popover header',
                  content: 'I am popover content!'
                }"
              >
                Click Me
              </CButton>
            </div>
          </CCol>
          <CCol _zx_="00935_" col="6">
            <div _zx_="00936_" class="my-3 text-center">
              <CButton
                color="primary"
                v-c-popover="{
                  header: 'Popover!',
                  content: 'I start <strong _zx_="00937_">open</strong>',
                  active: true
                }"
              >
                Click me
              </CButton>
            </div>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
    <CCard _zx_="00938_">
      <CCardHeader _zx_="00939_">
        <CIcon _zx_="00940_" name="cil-justify-center"/>
        <strong _zx_="00941_"> Popovers </strong>
        <small _zx_="00942_">placement</small>
      </CCardHeader>
      <CCardBody _zx_="00943_" class="my-3">
        <CRow _zx_="00944_">
          <CCol
            md="4"
            class="py-4 text-center"
            v-for="placement in placements"
            :key="placement"
          >
            <CButton
              color="primary"
              v-c-popover="{
                header: 'Popover!',
                content: `Placement ${placement}`,
                placement
              }"
            >
              {{ placement }}
            </CButton>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  </div></template>

<script>
export default {
  name: 'Popovers',
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
