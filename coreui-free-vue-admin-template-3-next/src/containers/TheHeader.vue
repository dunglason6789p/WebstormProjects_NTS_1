<template>
  <CHeader _zx_="00019_" fixed with-subheader light>
    <CToggler
      in-header
      class="ml-3 d-lg-none"
      v-c-emit-root-event:toggle-sidebar-mobile
    />
    <CToggler
      in-header
      class="ml-3 d-md-down-none"
      v-c-emit-root-event:toggle-sidebar
    />
    <CHeaderBrand
      class="mx-auto d-lg-none" 
      src="img/brand/coreui-vue-logo.svg"
      width="190"
      height="46"
      alt="CoreUI Logo"
    />
    <CHeaderNav _zx_="00020_" class="d-md-down-none mr-auto">
      <CHeaderNavItem _zx_="00021_" class="px-3">
        <CHeaderNavLink _zx_="00022_" to="/dashboard">
          Dashboard
        </CHeaderNavLink>
      </CHeaderNavItem>
      <CHeaderNavItem _zx_="00023_" class="px-3">
        <CHeaderNavLink _zx_="00024_" to="/users" exact>
          Users
        </CHeaderNavLink>
      </CHeaderNavItem>
      <CHeaderNavItem _zx_="00025_" class="px-3">
        <CHeaderNavLink _zx_="00026_">
          Settings
        </CHeaderNavLink>
      </CHeaderNavItem>
    </CHeaderNav>
    <CHeaderNav _zx_="00027_" class="mr-4">
      <CHeaderNavItem _zx_="00028_" class="d-md-down-none mx-2">
        <CHeaderNavLink _zx_="00029_">
          <CIcon _zx_="00030_" name="cil-bell"/>
        </CHeaderNavLink>
      </CHeaderNavItem>
      <CHeaderNavItem _zx_="00031_" class="d-md-down-none mx-2">
        <CHeaderNavLink _zx_="00032_">
          <CIcon _zx_="00033_" name="cil-list"/>
        </CHeaderNavLink>
      </CHeaderNavItem>
      <CHeaderNavItem _zx_="00034_" class="d-md-down-none mx-2">
        <CHeaderNavLink _zx_="00035_">
          <CIcon _zx_="00036_" name="cil-envelope-open"/>
        </CHeaderNavLink>
      </CHeaderNavItem>
      <TheHeaderDropdownAccnt _zx_="00037_"/>
    </CHeaderNav>
    <CSubheader _zx_="00038_" class="px-3">
      <CBreadcrumbRouter _zx_="00039_" class="border-0"/>
    </CSubheader>
  </CHeader></template>

<script>
import TheHeaderDropdownAccnt from './TheHeaderDropdownAccnt'

export default {
  name: 'TheHeader',
  components: {
    TheHeaderDropdownAccnt
  }
}
</script>
