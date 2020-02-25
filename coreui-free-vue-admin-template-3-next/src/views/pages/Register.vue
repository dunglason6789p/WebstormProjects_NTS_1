<template>
  <CContainer _zx_="02469_" class="min-vh-100 d-flex align-items-center">
    <CRow _zx_="02470_" class="w-100 justify-content-center">
      <CCol _zx_="02471_" md="6" sm="8">
        <CCard _zx_="02472_" class="mx-4 mb-0">
          <CCardBody _zx_="02473_" class="p-4">
            <CForm _zx_="02474_">
              <h1 _zx_="02475_">Register</h1>
              <p _zx_="02476_" class="text-muted">Create your account</p>
              <CInput
                placeholder="Username"
                autocomplete="username"
              >
                <template _zx_="02477_" #prepend-content><CIcon name="cil-user"/></template>
              </CInput>
              <CInput
                placeholder="Email"
                autocomplete="email"
                prepend="@"
              />
              <CInput
                placeholder="Password"
                type="password"
                autocomplete="new-password"
              >
                <template _zx_="02478_" #prepend-content><CIcon name="cil-lock-locked"/></template>
              </CInput>
              <CInput
                placeholder="Repeat password"
                type="password"
                autocomplete="new-password"
                class="mb-4"
              >
                <template _zx_="02479_" #prepend-content><CIcon name="cil-lock-locked"/></template>
              </CInput>
              <CButton _zx_="02480_" color="success" block>Create Account</CButton>
            </CForm>
          </CCardBody>
          <CCardFooter _zx_="02481_" class="p-4">
            <CRow _zx_="02482_">
              <CCol _zx_="02483_" col="6">
                <CButton _zx_="02484_" block color="facebook">
                  Facebook
                </CButton>
              </CCol>
              <CCol _zx_="02485_" col="6">
                <CButton _zx_="02486_" block color="twitter">
                  Twitter
                </CButton>
              </CCol>
            </CRow>
          </CCardFooter>
        </CCard>
      </CCol>
    </CRow>
  </CContainer></template>

<script>
export default {
  name: 'Register'
}
</script>
