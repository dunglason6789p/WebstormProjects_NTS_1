<template>
  <div _zx_="00527_">
    <CRow _zx_="00528_">
      <CCol _zx_="00529_">
        <CCard _zx_="00530_">
          <CCardHeader _zx_="00531_">
            <CIcon _zx_="00532_" name="cil-justify-center"/>
            <strong _zx_="00533_"> Bootstrap Jumbotron </strong>
            <div _zx_="00534_" class="card-header-actions">
              <a 
                href="https://coreui.io/vue/docs/components/jumbotron" 
                class="card-header-action" 
                rel="noreferrer noopener" 
                target="_blank"
              >
                <small _zx_="00535_" class="text-muted">docs</small>
              </a>
            </div>
          </CCardHeader>
          <CCardBody _zx_="00536_">
            <CJumbotron _zx_="00537_">
              <h1 _zx_="00538_" class="display-3">Bootstrap 4</h1>
              <p _zx_="00539_" class="lead">Bootstrap 4 Components for Vue.js 2.6+</p>
              <p _zx_="00540_">For more information visit website</p>
              <CButton _zx_="00541_" color="primary" href="#">More Info</CButton>
            </CJumbotron>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol _zx_="00542_">
        <CCard _zx_="00543_">
          <CCardHeader _zx_="00544_">
            <CIcon _zx_="00545_" name="cil-justify-center"/> <strong> Jumbotron </strong>
            <small _zx_="00546_">with slots</small>
          </CCardHeader>
          <CCardBody _zx_="00547_">
            <CJumbotron _zx_="00548_" header="Bootstrap 4" lead="">
              <h1 _zx_="00549_" class="display-3">Bootstrap 4</h1>
              <p _zx_="00550_" class="lead">
                This is a simple hero unit, a simple jumbotron-style component for
                calling extra attention to featured content or information.
              </p>
              <hr _zx_="00551_" class="my-4">
              <p _zx_="00552_">
                It uses utility classes for typography and spacing to space content
                out within the larger container.
              </p>
              <CButton _zx_="00553_" color="primary" href="#">Do Something</CButton>
              <CButton _zx_="00554_" color="success" href="#">Do Something Else</CButton>
            </CJumbotron>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    <CRow _zx_="00555_">
      <CCol _zx_="00556_">
        <CCard _zx_="00557_">
          <CCardHeader _zx_="00558_">
            <CIcon _zx_="00559_" name="cil-justify-center"/> <strong> Jumbotron </strong>
            <small _zx_="00560_">colors</small>
          </CCardHeader>
          <CCardBody _zx_="00561_">
            <CJumbotron
              color="info"
              text-color="white"
              border-color="dark"
            >
              <h1 _zx_="00562_" class="display-3">Bootstrap 4</h1>
              <p _zx_="00563_" class="lead">
                This is a simple hero unit, a simple jumbotron-style component for
                calling extra attention to featured content or information.
              </p>
              <hr _zx_="00564_" class="my-4">
              <p _zx_="00565_">
                It uses utility classes for typography and spacing to space content
                out within the larger container.
              </p>
            </CJumbotron>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div></template>

<script>
export default {
  name: 'Jumbotrons'
}
</script>
