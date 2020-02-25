
<template>
  <div _zx_="02315_">
    <CCard _zx_="02316_">
      <CCardHeader _zx_="02317_">
        <CIcon _zx_="02318_" :content="$options.freeSet.cilHandPointDown"/>
        CoreUI Icons
        <CBadge _zx_="02319_" color="info">New</CBadge>
        <div _zx_="02320_" class="card-header-actions">
          <a
            href="https://github.com/coreui/coreui-icons"
            rel="noreferrer noopener"
            target="_blank"
            class="card-header-action"
          >
            <small _zx_="02321_" class="text-muted">Github</small>
          </a>
        </div>
      </CCardHeader>
      <CCardBody _zx_="02322_">
        <CRow _zx_="02323_" class="text-center">
          <template _zx_="02324_" v-for="(icon, iconName) in $options.freeSet">
            <CCol
              class="mb-5"
              col="3"
              sm="2"
              :key="iconName"
            >
              <CIcon _zx_="02325_" :height="42" :content="icon"/>
              <div _zx_="02326_">{{toKebabCase(iconName)}}</div>
            </CCol>
          </template>
        </CRow>
      </CCardBody>
    </CCard>
  </div></template>

<script>
import { freeSet } from '@coreui/icons'
export default {
  name: 'CoreUIIcons',
  freeSet,
  methods: {
    toKebabCase (str) {
      return str.replace(/([a-z])([A-Z0-9])/g, '$1-$2').toLowerCase()
    }
  }
}
</script>
