<template>
  <div _zx_="00727_">
    <CCard _zx_="00728_">
      <CCardHeader _zx_="00729_">
        <CIcon _zx_="00730_" name="cil-justify-center"/>
        <strong _zx_="00731_"> Bootstrap Navbar </strong>
        <div _zx_="00732_" class="card-header-actions">
          <a 
            href="https://coreui.io/vue/docs/components/navbar" 
            class="card-header-action" 
            rel="noreferrer noopener" 
            target="_blank"
          >
            <small _zx_="00733_" class="text-muted">docs</small>
          </a>
        </div>
      </CCardHeader>
      <CCardBody _zx_="00734_">
        <CNavbar
          expandable="md"
          color="info"
        >
          <CToggler _zx_="00735_" inNavbar @click="show=!show"/>
          <CNavbarBrand _zx_="00736_" href="#">NavBar</CNavbarBrand>
          <CCollapse _zx_="00737_" :show="show" navbar>
            <CNavbarNav _zx_="00738_">
              <CNavItem _zx_="00739_" href="#">Link</CNavItem>
              <CNavItem _zx_="00740_" href="#" disabled>Disabled</CNavItem>
            </CNavbarNav>

            <!-- Right aligned nav items -->
            <CNavbarNav _zx_="00741_" class="ml-auto">
              <CForm _zx_="00742_" inline>
                <CInput
                  class="mr-sm-2"
                  placeholder="Search"
                  size="sm"
                />
                <CButton _zx_="00743_" color="light" size="sm" class="my-2 my-sm-0">
                  Search
                </CButton>
              </CForm>

              <CDropdown
                toggler-text="Lang"
                in-nav
                placement="bottom-end"
              >
                  <CDropdownItem _zx_="00744_">EN</CDropdownItem>
                  <CDropdownItem _zx_="00745_">ES</CDropdownItem>
                  <CDropdownItem _zx_="00746_">RU</CDropdownItem>
                  <CDropdownItem _zx_="00747_">FA</CDropdownItem>
              </CDropdown>

              <CDropdown
                in-nav
                toggler-text="User"
                placement="bottom-end"
              >
                <CDropdownItem _zx_="00748_">Profile</CDropdownItem>
                <CDropdownItem _zx_="00749_">Signout</CDropdownItem>
              </CDropdown>
            </CNavbarNav>
          </CCollapse>
        </CNavbar>
      </CCardBody>
    </CCard>
    <CCard _zx_="00750_">
      <CCardHeader _zx_="00751_">
        <CIcon _zx_="00752_" name="cil-justify-center"/> <strong> Navbar </strong>
        <small _zx_="00753_">brand</small>
      </CCardHeader>
      <CCardBody _zx_="00754_">
        <!-- Image and text -->
        <CNavbar _zx_="00755_" color="faded" light>
          <CNavbarBrand _zx_="00756_" href="#">
            <img _zx_="00757_" src="https://placekitten.com/g/30/30" class="d-inline-block align-top" alt="CoreuiVue">
            CoreuiVue
          </CNavbarBrand>
        </CNavbar>
      </CCardBody>
    </CCard>
    <CCard _zx_="00758_">
      <CCardHeader _zx_="00759_">
        <CIcon _zx_="00760_" name="cil-justify-center"/> <strong> Navbar </strong>
        <small _zx_="00761_">text</small>
      </CCardHeader>
      <CCardBody _zx_="00762_">
        <CNavbar _zx_="00763_" toggleable="sm" light color="light">
          <CToggler _zx_="00764_" inNavbar @click="navbarText=!navbarText"/>
          <CNavbarBrand _zx_="00765_">CoreuiVue</CNavbarBrand>
          <CCollapse _zx_="00766_" :show="navbarText" navbar>
            <CNavbarNav _zx_="00767_">
              <CNavbarText _zx_="00768_">Navbar text</CNavbarText>
            </CNavbarNav>
          </CCollapse>
        </CNavbar>
      </CCardBody>
    </CCard>
    <CCard _zx_="00769_">
      <CCardHeader _zx_="00770_">
        <CIcon _zx_="00771_" name="cil-justify-center"/> <strong> Navbar </strong>
        <small _zx_="00772_">dropdown</small>
      </CCardHeader>
      <CCardBody _zx_="00773_">
        <CNavbar _zx_="00774_" expandable="sm" color="primary" >
          <CToggler _zx_="00775_" inNavbar @click="navbarDropdown = !navbarDropdown"/>
          <CCollapse _zx_="00776_" :show="navbarDropdown" navbar>
            <CNavbarNav _zx_="00777_">
              <CNavItem _zx_="00778_" href="#">Home</CNavItem>
              <CNavItem _zx_="00779_" href="#">Link</CNavItem>
              <!-- Navbar dropdowns -->
              <CDropdown
                toggler-text="Lang"
                placement="bottom-end"
                in-nav
              >
                <CDropdownItem _zx_="00780_">EN</CDropdownItem>
                <CDropdownItem _zx_="00781_">ES</CDropdownItem>
                <CDropdownItem _zx_="00782_">RU</CDropdownItem>
                <CDropdownItem _zx_="00783_">FA</CDropdownItem>
              </CDropdown>
              <CDropdown
                toggler-text="User"
                placement="bottom-end"
                in-nav
              >
                <CDropdownItem _zx_="00784_">Account</CDropdownItem>
                <CDropdownItem _zx_="00785_">Settings</CDropdownItem>
              </CDropdown>
            </CNavbarNav>
          </CCollapse>
        </CNavbar>
      </CCardBody>
    </CCard>
    <CCard _zx_="00786_">
      <CCardHeader _zx_="00787_">
        <CIcon _zx_="00788_" name="cil-justify-center"/> <strong> Navbar </strong>
        <small _zx_="00789_">form</small>
      </CCardHeader>
      <CCardBody _zx_="00790_">
        <CNavbar _zx_="00791_" light color="light">
          <CForm _zx_="00792_" inline>
            <CInput
              class="mr-sm-2"
              placeholder="Search"
              size="sm"
            />
            <CButton _zx_="00793_" color="outline-success" class="my-2 my-sm-0" type="submit">Search</CButton>
          </CForm>
        </CNavbar>
      </CCardBody>
    </CCard>
    <CCard _zx_="00794_">
      <CCardHeader _zx_="00795_">
        <CIcon _zx_="00796_" name="cil-justify-center"/> <strong> Navbar </strong>
        <small _zx_="00797_">input group</small>
      </CCardHeader>
      <CCardBody _zx_="00798_">
        <CNavbar _zx_="00799_" light color="light">
          <CForm _zx_="00800_" inline>
            <CInput
              class="mr-sm-2"
              placeholder="Username"
            />
          </CForm>
        </CNavbar>
      </CCardBody>
    </CCard>
  </div></template>
<script>
export default {
  name: 'Navbars',
  data () {
    return {
      show: false,
      navbarText: false,
      navbarDropdown: false,
    }
  }
}
</script>
