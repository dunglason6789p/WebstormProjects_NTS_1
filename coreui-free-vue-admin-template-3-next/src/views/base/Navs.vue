<template>
  <div _zx_="00801_">
    <CCard _zx_="00802_">
      <CCardHeader _zx_="00803_">
        <CIcon _zx_="00804_" name="cil-justify-center"/><strong> Bootstrap Navs</strong>
        <div _zx_="00805_" class="card-header-actions">
          <a 
            href="https://coreui.io/vue/docs/components/nav" 
            class="card-header-action" 
            rel="noreferrer noopener" 
            target="_blank"
          >
            <small _zx_="00806_" class="text-muted">docs</small>
          </a>
        </div>
      </CCardHeader>
      <CCardBody _zx_="00807_">
        <CNav _zx_="00808_">
          <CNavItem _zx_="00809_" active>Active</CNavItem>
          <CNavItem _zx_="00810_" title="Link"/>
          <CNavItem _zx_="00811_">Another Link</CNavItem>
          <CNavItem _zx_="00812_" disabled>Disabled</CNavItem>
        </CNav>
      </CCardBody>
    </CCard>
    <CCard _zx_="00813_">
      <CCardHeader _zx_="00814_">
        <CIcon _zx_="00815_" name="cil-justify-center"/>
        <strong _zx_="00816_"> Bootstrap Navs </strong>
        <small _zx_="00817_">icons</small>
      </CCardHeader>
      <CCardBody _zx_="00818_">
        <CNav _zx_="00819_">
          <CNavItem _zx_="00820_" active>
            <CIcon _zx_="00821_" name="cil-basket"/>
          </CNavItem>
          <CNavItem _zx_="00822_">
            Link
          </CNavItem>
          <CNavItem _zx_="00823_">
            Another Link
          </CNavItem>
          <CNavItem _zx_="00824_" disabled>Disabled</CNavItem>
        </CNav>
      </CCardBody>
    </CCard>
    <CCard _zx_="00825_">
      <CCardHeader _zx_="00826_">
        <CIcon _zx_="00827_" name="cil-justify-center"/>
        <strong _zx_="00828_"> Bootstrap Navs </strong>
        <small _zx_="00829_">tab style</small>
      </CCardHeader>
      <CCardBody _zx_="00830_">
        <CNav _zx_="00831_" variant="tabs">
          <CNavItem _zx_="00832_" active>
            Active
          </CNavItem>
          <CNavItem _zx_="00833_">
            Link
          </CNavItem>
          <CNavItem _zx_="00834_">
            Another Link
          </CNavItem>
          <CNavItem _zx_="00835_" disabled>Disabled</CNavItem>
        </CNav>
      </CCardBody>
    </CCard>
    <CCard _zx_="00836_">
      <CCardHeader _zx_="00837_" @click="item++">
        <CIcon _zx_="00838_" name="cil-justify-center"/>
        <strong _zx_="00839_"> Bootstrap Navs </strong>
        <small _zx_="00840_">pill style</small>
      </CCardHeader>
      <CCardBody _zx_="00841_">
        <CNav _zx_="00842_" variant="pills">
          <CNavItem _zx_="00843_" active>Active</CNavItem>
          <CNavItem _zx_="00844_">Link</CNavItem>
          <CNavItem _zx_="00845_">Another Link</CNavItem>
          <CNavItem _zx_="00846_" disabled>Disabled</CNavItem>
        </CNav>
      </CCardBody>
    </CCard>
    <CCard _zx_="00847_">
      <CCardHeader _zx_="00848_">
        <CIcon _zx_="00849_" name="cil-justify-center"/>
        <strong _zx_="00850_"> Bootstrap Navs </strong>
        <small _zx_="00851_">fill tabs</small>
      </CCardHeader>
      <CCardBody _zx_="00852_">
        <CNav _zx_="00853_" fill variant="tabs">
          <CNavItem _zx_="00854_" active>Active</CNavItem>
          <CNavItem _zx_="00855_">Link</CNavItem>
          <CNavItem _zx_="00856_">Link with a long name </CNavItem>
          <CNavItem _zx_="00857_" disabled>Disabled</CNavItem>
        </CNav>
      </CCardBody>
    </CCard>
    <CCard _zx_="00858_">
      <CCardHeader _zx_="00859_">
        <CIcon _zx_="00860_" name="cil-justify-center"/>
        <strong _zx_="00861_"> Bootstrap Navs </strong>
        <small _zx_="00862_">justified tabs</small>
      </CCardHeader>
      <CCardBody _zx_="00863_">
        <CNav _zx_="00864_" justified variant="tabs">
          <CNavItem _zx_="00865_" active>Active</CNavItem>
          <CNavItem _zx_="00866_">Link</CNavItem>
          <CNavItem _zx_="00867_">Link with a long name </CNavItem>
          <CNavItem _zx_="00868_" disabled>Disabled</CNavItem>
        </CNav>
      </CCardBody>
    </CCard>
    <CCard _zx_="00869_">
      <CCardHeader _zx_="00870_">
        <CIcon _zx_="00871_" name="cil-justify-center"/>
        <strong _zx_="00872_"> Bootstrap Navs </strong>
        <small _zx_="00873_">dropdown support</small>
      </CCardHeader>
      <CCardBody _zx_="00874_">
        <CNav _zx_="00875_" pills>
          <CNavItem _zx_="00876_" active>Active</CNavItem>
          <CNavItem _zx_="00877_">Link</CNavItem>
          <CDropdown
            id="nav7_ddown"
            nav
            placement="bottom-end"
            button-content="Dropdown"
          >
            <!-- <a class="nav-link dropdown-toggle" slot="button">Dropdown</a> -->
            <CDropdownItem _zx_="00878_">one</CDropdownItem>
            <CDropdownItem _zx_="00879_">two</CDropdownItem>
            <CDropdownDivider _zx_="00880_"/>
            <CDropdownItem _zx_="00881_">three</CDropdownItem>
          </CDropdown>
        </CNav>
      </CCardBody>
    </CCard>
    <CCard _zx_="00882_">
      <CCardHeader _zx_="00883_">
        <CIcon _zx_="00884_" name="cil-justify-center"/>
        <strong _zx_="00885_"> Bootstrap Navs </strong>
        <small _zx_="00886_">vertical variation</small>
      </CCardHeader>
      <CCardBody _zx_="00887_">
        <CRow _zx_="00888_">
          <CCol _zx_="00889_" col="3" class="m-0">
            <CNav _zx_="00890_" vertical pills >
              <CNavItem _zx_="00891_" active>Active</CNavItem>
              <CNavItem _zx_="00892_">Link</CNavItem>
              <CNavItem _zx_="00893_">Another Link</CNavItem>
              <CNavItem _zx_="00894_" disabled>Disabled</CNavItem>
            </CNav>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  </div></template>

<script>
export default {
  name: 'Navs',
  data () {
    return {
      item: 2
    }
  }
}
</script>
