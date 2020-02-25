<template>
  <div _zx_="00895_">
    <CCard _zx_="00896_">
      <CCardHeader _zx_="00897_">
        <CIcon _zx_="00898_" name="cil-justify-center"/>
        <strong _zx_="00899_"> Responsive bootstrap Pagination</strong>
        <div _zx_="00900_" class="card-header-actions">
          <a 
            href="https://coreui.io/vue/docs/components/pagination" 
            class="card-header-action" 
            rel="noreferrer noopener" 
            target="_blank"
          >
            <small _zx_="00901_" class="text-muted">docs</small>
          </a>
        </div>
      </CCardHeader>
      <CCardBody _zx_="00902_">
        <h6 _zx_="00903_">Default</h6>
        <CPagination
          :active-page.sync="currentPage"
          :pages="10"
          responsive
        />
        <br _zx_="00904_">

        <h6 _zx_="00905_">Small</h6>
        <CPagination
          size="sm"
          :active-page.sync="currentPage"
          :pages="10"/>
        <br _zx_="00906_">

        <div _zx_="00907_">
          <h6 _zx_="00908_">Large</h6>
          <CPagination
            size="lg"
            :active-page.sync="currentPage"
            :pages="10"
            responsive
          />
          <br _zx_="00909_">
        </div>

        <div _zx_="00910_">currentPage: {{currentPage}}</div>
      </CCardBody>
    </CCard>
    <CCard _zx_="00911_">
      <CCardHeader _zx_="00912_">
        <CIcon _zx_="00913_" name="cil-justify-center"/>
        <strong _zx_="00914_"> Pagination </strong>
        <small _zx_="00915_">alignment</small>
      </CCardHeader>
      <CCardBody _zx_="00916_">
        <h6 _zx_="00917_">Left alignment (default)</h6>
        <CPagination
          :active-page.sync="currentPage"
          :pages="10"
        />
        <br _zx_="00918_">

        <h6 _zx_="00919_">Center alignment</h6>
        <CPagination
          align="center"
          :pages="10"
          :active-page.sync="currentPage"
        />
        <br _zx_="00920_">

        <h6 _zx_="00921_">Right (end) alignment</h6>
        <CPagination
          align="end"
          :active-page.sync="currentPage"
          :pages="10"
        />
        <br _zx_="00922_">

        <div _zx_="00923_">currentPage: {{currentPage}}</div>
      </CCardBody>
    </CCard>
  </div></template>

<script>
export default {
  name: 'Paginations',
  data () {
    return {
      currentPage: 3,
    }
  }
}
</script>
