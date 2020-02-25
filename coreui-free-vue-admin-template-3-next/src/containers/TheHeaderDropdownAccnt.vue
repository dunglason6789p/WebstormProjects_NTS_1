<template>
  <CDropdown
    inNav
    class="c-header-nav-items"
    placement="bottom-end"
    add-menu-classes="pt-0"
  >
    <template _zx_="00040_" #toggler>
      <CHeaderNavLink _zx_="00041_">
        <div _zx_="00042_" class="c-avatar">
          <img
            src="img/avatars/6.jpg"
            class="c-avatar-img "
          />
        </div>
      </CHeaderNavLink>
    </template>
    <CDropdownHeader _zx_="00043_" tag="div" class="text-center" color="light">
      <strong _zx_="00044_">Account</strong>
    </CDropdownHeader>
    <CDropdownItem _zx_="00045_">
      <CIcon _zx_="00046_" name="cil-bell"/> Updates
      <CBadge _zx_="00047_" color="info" class="ml-auto">{{ itemsCount }}</CBadge>
    </CDropdownItem>
    <CDropdownItem _zx_="00048_">
      <CIcon _zx_="00049_" name="cil-envelope-open" /> Messages
      <CBadge _zx_="00050_" color="success" class="ml-auto">{{ itemsCount }}</CBadge>
    </CDropdownItem>
    <CDropdownItem _zx_="00051_">
      <CIcon _zx_="00052_" name="cil-task" /> Tasks
      <CBadge _zx_="00053_" color="danger" class="ml-auto">{{ itemsCount }}</CBadge>
    </CDropdownItem>
    <CDropdownItem _zx_="00054_">
      <CIcon _zx_="00055_" name="cil-comment-square" /> Comments
      <CBadge _zx_="00056_" color="warning" class="ml-auto">{{ itemsCount }}</CBadge>
    </CDropdownItem>
    <CDropdownHeader
      tag="div"
      class="text-center"
      color="light"
    >
      <strong _zx_="00057_">Settings</strong>
    </CDropdownHeader>
    <CDropdownItem _zx_="00058_">
      <CIcon _zx_="00059_" name="cil-user" /> Profile
    </CDropdownItem>
    <CDropdownItem _zx_="00060_">
      <CIcon _zx_="00061_" name="cil-settings" /> Settings
    </CDropdownItem>
    <CDropdownItem _zx_="00062_">
      <CIcon _zx_="00063_" name="cil-dollar" /> Payments
      <CBadge _zx_="00064_" color="secondary" class="ml-auto">{{ itemsCount }}</CBadge>
    </CDropdownItem>
    <CDropdownItem _zx_="00065_">
      <CIcon _zx_="00066_" name="cil-file" /> Projects
      <CBadge _zx_="00067_" color="primary" class="ml-auto">{{ itemsCount }}</CBadge>
    </CDropdownItem>
    <CDropdownDivider _zx_="00068_"/>
    <CDropdownItem _zx_="00069_">
      <CIcon _zx_="00070_" name="cil-shield-alt" /> Lock Account
    </CDropdownItem>
    <CDropdownItem _zx_="00071_">
      <CIcon _zx_="00072_" name="cil-lock-locked" /> Logout
    </CDropdownItem>
  </CDropdown></template>

<script>
export default {
  name: 'TheHeaderDropdownAccnt',
  data () {
    return { 
      itemsCount: 42
    }
  }
}
</script>

<style scoped>
  .c-icon {
    margin-right: 0.3rem;
  }
</style>