<template>
  <div _zx_="02306_">
    <CCard _zx_="02307_">
      <CCardHeader _zx_="02308_">
        <CIcon _zx_="02309_" name="cil-basket"/>Brand icons
      </CCardHeader>
      <CCardBody _zx_="02310_">
        <CRow _zx_="02311_" class="text-center">
          <template _zx_="02312_" v-for="(brand, brandName) in $options.brands">
            <CCol
              class="mb-5"
              col="3"
              sm="2"
              :key="brandName"
            >
              <CIcon _zx_="02313_" :height="42" :content="brand"/>
              <div _zx_="02314_">{{toKebabCase(brandName)}}</div>
            </CCol>
          </template>
        </CRow>
      </CCardBody>
    </CCard>
  </div></template>

<script>
import { brandSet as brands } from '@coreui/icons'
export default {
  name: 'Brands',
  brands,
  methods: {
    toKebabCase (str) {
      return str.replace(/([a-z])([A-Z0-9])/g, '$1-$2').toLowerCase()
    }
  }
}
</script>
