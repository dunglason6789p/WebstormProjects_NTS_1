<template>
  <CContainer _zx_="02448_" class="d-flex align-items-center min-vh-100">
    <CRow _zx_="02449_" class="w-100 justify-content-center">
      <CCol _zx_="02450_" md="6">
        <div _zx_="02451_" class="w-100">
        <div _zx_="02452_" class="clearfix">
          <h1 _zx_="02453_" class="float-left display-3 mr-4">404</h1>
          <h4 _zx_="02454_" class="pt-3">Oops! You're lost.</h4>
          <p _zx_="02455_" class="text-muted">The page you are looking for was not found.</p>
        </div>
        <CInput
          class="mb-3"
          placeholder="What are you looking for?"
        >
          <template _zx_="02456_" #prepend-content><CIcon name="cil-magnifying-glass"/></template>
          <template _zx_="02457_" #append>
            <CButton _zx_="02458_" color="info">Search</CButton>
          </template>
        </CInput>
      </div>
      </CCol>
    </CRow>
  </CContainer></template>

<script>
export default {
  name: 'Page404'
}
</script>
