<template>
  <div _zx_="02327_">
    <CCard _zx_="02328_">
      <CCardHeader _zx_="02329_">
        <CIcon _zx_="02330_" name="cil-globe-alt"/> Flags
      </CCardHeader>
      <CCardBody _zx_="02331_">
        <CRow _zx_="02332_" class="text-center">
          <CCol _zx_="02333_" class="mb-5" col="12">
            <!-- For using the flags inline with text add the classes
            <code _zx_="02334_">.flag-icon</code> and <code>.flag-icon-xx</code>
            (where xx is the ISO 3166-1-alpha-2 code of a country) to an empty
            span. If you want to have a squared version flag then add the class
            flag-icon-squared as well. -->
          </CCol>
          <template _zx_="02335_" v-for="(flag, flagName) in displayedFlags">
            <CCol
              class="mb-5"
              col="3"
              sm="2"
              :key="flagName"
            >
              <CIcon _zx_="02336_" :height="42" :content="flag"/>
              <div _zx_="02337_">{{toKebabCase(flagName)}}</div>
            </CCol>
          </template>
        </CRow>
      </CCardBody>
    </CCard>
  </div></template>

<script>
import { flagSet } from '@coreui/icons'
export default {
  name: 'Flags',
  flagSet,
  computed: {
    displayedFlags () {
      return this.$options.flagSet
    }
  },
  methods: {
    toKebabCase (str) {
      return str.replace(/([a-z])([A-Z0-9])/g, '$1-$2').toLowerCase()
    }
  }
}
</script>
