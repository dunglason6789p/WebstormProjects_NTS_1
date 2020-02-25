<template>
  <CContainer _zx_="02459_" class="d-flex align-items-center min-vh-100">
    <CRow _zx_="02460_" class="w-100 justify-content-center">
      <CCol _zx_="02461_" md="6">
        <div _zx_="02462_" class="clearfix">
          <h1 _zx_="02463_" class="float-left display-3 mr-4">500</h1>
          <h4 _zx_="02464_" class="pt-3">Houston, we have a problem!</h4>
          <p _zx_="02465_" class="text-muted">The page you are looking for is temporarily unavailable.</p>
        </div>
        <CInput
          class="mb-3"
          placeholder="What are you looking for?"
        >
          <template _zx_="02466_" #prepend-content><CIcon name="cil-magnifying-glass"/></template>
          <template _zx_="02467_" #append>
            <CButton _zx_="02468_" color="info">Search</CButton>
          </template>
        </CInput>
      </CCol>
    </CRow>
  </CContainer></template>

<script>
export default {
  name: 'Page500'
}
</script>
