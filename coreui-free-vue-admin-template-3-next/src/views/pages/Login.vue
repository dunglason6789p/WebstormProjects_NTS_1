<template>
  <CContainer _zx_="02430_" class="d-flex align-items-center min-vh-100">
    <CRow _zx_="02431_" class="justify-content-center">
      <CCol _zx_="02432_" md="8">
        <CCardGroup _zx_="02433_">
          <CCard _zx_="02434_" class="p-4">
            <CCardBody _zx_="02435_">
              <CForm _zx_="02436_">
                <h1 _zx_="02437_">Login</h1>
                <p _zx_="02438_" class="text-muted">Sign In to your account</p>
                <CInput
                  placeholder="Username"
                  autocomplete="username email"
                >
                  <template _zx_="02439_" #prepend-content><CIcon name="cil-user"/></template>
                </CInput>
                <CInput
                  placeholder="Password"
                  type="password"
                  autocomplete="curent-password"
                >
                  <template _zx_="02440_" #prepend-content><CIcon name="cil-lock-locked"/></template>
                </CInput>
                <CRow _zx_="02441_">
                  <CCol _zx_="02442_" col="6">
                    <CButton _zx_="02443_" color="primary" class="px-4">Login</CButton>
                  </CCol>
                  <CCol _zx_="02444_" col="6" class="text-right">
                    <CButton _zx_="02445_" color="link" class="px-0">Forgot password?</CButton>
                  </CCol>
                </CRow>
              </CForm>
            </CCardBody>
          </CCard>
          <CCard
            color="primary"
            text-color="white"
            class="text-center py-5 d-md-down-none"
            style="width:44%"
            body-wrapper
          >
            <h2 _zx_="02446_">Sign up</h2>
            <p _zx_="02447_">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <CButton
              color="primary"
              class="active mt-3"
            >
              Register Now!
            </CButton>
          </CCard>
        </CCardGroup>
      </CCol>
    </CRow>
  </CContainer></template>

<script>
export default {
  name: 'Login'
}
</script>
