<template>
  <CRow _zx_="00234_">
    <CCol _zx_="00235_" col="12" md="6">
      <CCard _zx_="00236_">
        <CCardHeader _zx_="00237_">
          <CIcon _zx_="00238_" name="cil-justify-center"/>
          <strong _zx_="00239_"> Bootstrap Collapse </strong>
          <div _zx_="00240_" class="card-header-actions">
            <a 
              href="https://coreui.io/vue/docs/components/collapse" 
              class="card-header-action" 
              rel="noreferrer noopener" 
              target="_blank"
            >
              <small _zx_="00241_" class="text-muted">docs</small>
            </a>
          </div>
        </CCardHeader>
        <CCardBody _zx_="00242_">
          <CButton _zx_="00243_" @click="collapse = !collapse" color="primary">
            Toggle Collapse
          </CButton>
          <CCollapse _zx_="00244_" :show="collapse" class="mt-2">
            <CCard _zx_="00245_" body-wrapper>
              <CCardText _zx_="00246_">Collapse contents Here</CCardText>
              <CButton  
                @click="innerCollapse = !innerCollapse" 
                size="sm" 
                color="secondary"
              >
                Toggle Inner Collapse
              </CButton>
              <CCollapse _zx_="00247_" :show="innerCollapse" class="mt-2">
                <CCard _zx_="00248_" body-wrapper>Hello!</CCard>
              </CCollapse>
            </CCard>
          </CCollapse>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow></template>

<script>
export default {
  name: 'Collapses',
  data () {
    return {
      collapse: false,
      innerCollapse: false,
      text: `
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
        brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
        tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
        assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
        wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
        vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
        synth nesciunt you probably haven't heard of them accusamus labore VHS.
      `
    }
  }
}
</script>
