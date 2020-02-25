<template>
  <CRow _zx_="01435_">
    <CCol _zx_="01436_" col="12">
      <CCard _zx_="01437_">
        <CCardHeader _zx_="01438_">
          <CIcon _zx_="01439_" name="cil-justify-center"/>
          <strong _zx_="01440_"> Bootstrap button group</strong>
          <div _zx_="01441_" class="card-header-actions">
            <a 
              href="https://coreui.io/vue/docs/components/button-components" 
              class="card-header-action" 
              rel="noreferrer noopener" 
              target="_blank"
            >
              <small _zx_="01442_" class="text-muted">docs</small>
            </a>
          </div>
        </CCardHeader>
        <CCardBody _zx_="01443_">
          <div _zx_="01444_">
            <CButtonGroup _zx_="01445_">
              <CButton _zx_="01446_" color="secondary">One</CButton>
              <CButton _zx_="01447_" color="secondary">Two</CButton>
              <CButton _zx_="01448_" color="secondary">Three</CButton>
              <CButton _zx_="01449_" color="secondary">Four</CButton>
              <CButton _zx_="01450_" color="secondary" class="d-sm-down-none">Five</CButton>
            </CButtonGroup>
            <br _zx_="01451_"><br>
            <CButtonGroup _zx_="01452_">
              <CButton _zx_="01453_" class="d-sm-down-none" color="success">Success</CButton>
              <CButton _zx_="01454_" color="info">Info</CButton>
              <CButton _zx_="01455_" color="warning">Warn</CButton>
              <CButton _zx_="01456_" class="d-sm-down-none" color="primary">Primary</CButton>
              <CButton _zx_="01457_" color="danger">Danger</CButton>
              <CButton _zx_="01458_" color="link">Link</CButton>
            </CButtonGroup>
          </div>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol _zx_="01459_" col="12">
      <CCard _zx_="01460_">
        <CCardHeader _zx_="01461_">
          <CIcon _zx_="01462_" name="cil-justify-center"/>
          <strong _zx_="01463_"> Button group </strong>sizing
        </CCardHeader>
        <CCardBody _zx_="01464_">
          <div _zx_="01465_">
            <CButtonGroup _zx_="01466_">
              <CButton _zx_="01467_" color="secondary">Left</CButton>
              <CButton _zx_="01468_" color="secondary">Middle</CButton>
              <CButton _zx_="01469_" color="secondary">Right</CButton>
            </CButtonGroup>
            <br _zx_="01470_"><br>
            <CButtonGroup _zx_="01471_" size="sm">
              <CButton _zx_="01472_" color="secondary">Left</CButton>
              <CButton _zx_="01473_" color="secondary">Middle</CButton>
              <CButton _zx_="01474_" color="secondary">Right</CButton>
            </CButtonGroup>
            <br _zx_="01475_"><br>
            <CButtonGroup _zx_="01476_" size="lg">
              <CButton _zx_="01477_" color="secondary">Left</CButton>
              <CButton _zx_="01478_" color="secondary">Middle</CButton>
              <CButton _zx_="01479_" color="secondary">Right</CButton>
            </CButtonGroup>
          </div>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol _zx_="01480_" col="12">
      <CCard _zx_="01481_">
        <CCardHeader _zx_="01482_">
          <CIcon _zx_="01483_" name="cil-justify-center"/><strong> Button group </strong>dropdown support
        </CCardHeader>
        <CCardBody _zx_="01484_">
          <div _zx_="01485_">
            <CButtonGroup _zx_="01486_">
              <CButton _zx_="01487_" color="secondary" class="d-sm-down-none">Button 1</CButton>
              <CButton _zx_="01488_" color="secondary" class="d-sm-down-none">Button 2</CButton>
              <CDropdown _zx_="01489_" right text="Menu" color="success">
                <CDropdownItem _zx_="01490_">Item 1</CDropdownItem>
                <CDropdownItem _zx_="01491_">Item 2</CDropdownItem>
                <CDropdownDivider _zx_="01492_"/>
                <CDropdownItem _zx_="01493_">Item 3</CDropdownItem>
              </CDropdown>
              <CButton _zx_="01494_" color="secondary" class="d-sm-down-none">Button 3</CButton>
              <CDropdown _zx_="01495_" right split text="Split Menu" color="info">
                <CDropdownItem _zx_="01496_">Item 1</CDropdownItem>
                <CDropdownItem _zx_="01497_">Item 2</CDropdownItem>
                <CDropdownDivider _zx_="01498_"/>
                <CDropdownItem _zx_="01499_">Item 3</CDropdownItem>
              </CDropdown>
            </CButtonGroup>
          </div>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol _zx_="01500_" col="12">
      <CCard _zx_="01501_">
        <CCardHeader _zx_="01502_">
          <CIcon _zx_="01503_" name="cil-justify-center"/>
          <strong _zx_="01504_"> Button group </strong>vertical variation
        </CCardHeader>
        <CCardBody _zx_="01505_">
          <div _zx_="01506_">
            <CButtonGroup _zx_="01507_" vertical>
              <CButton _zx_="01508_" color="secondary">Top</CButton>
              <CButton _zx_="01509_" color="secondary">Middle</CButton>
              <CButton _zx_="01510_" color="secondary">Bottom</CButton>
            </CButtonGroup>
          </div>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol _zx_="01511_" col="12">
      <CCard _zx_="01512_">
        <CCardHeader _zx_="01513_">
          <CIcon _zx_="01514_" name="cil-justify-center"/>
          <strong _zx_="01515_"> Button toolbar </strong>
          <small _zx_="01516_">with button groups</small>
        </CCardHeader>
        <CCardBody _zx_="01517_">
          <CButtonToolbar _zx_="01518_" aria-label="Toolbar with button groups" >
            <CButtonGroup _zx_="01519_" class="mx-1">
              <CButton _zx_="01520_" color="secondary" class="d-sm-down-none">&laquo;</CButton>
              <CButton _zx_="01521_" color="secondary">&lsaquo;</CButton>
            </CButtonGroup>
            <CButtonGroup _zx_="01522_" class="mx-1">
              <CButton _zx_="01523_" color="secondary" class="d-sm-down-none">Edit</CButton>
              <CButton _zx_="01524_" color="secondary">Undo</CButton>
              <CButton _zx_="01525_" color="secondary">Redo</CButton>
            </CButtonGroup>
            <CButtonGroup _zx_="01526_" class="mx-1">
              <CButton _zx_="01527_" color="secondary">&rsaquo;</CButton>
              <CButton _zx_="01528_" color="secondary" class="d-sm-down-none">&raquo;</CButton>
            </CButtonGroup>
          </CButtonToolbar>
          <hr _zx_="01529_" class="d-sm-down-none"/>
          <CButtonToolbar
            aria-label="Toolbar with button groups and input groups"
            class="d-sm-down-none"
          >
            <CButtonGroup _zx_="01530_" size="sm" class="mx-1">
              <CButton _zx_="01531_" color="secondary">New</CButton>
              <CButton _zx_="01532_" color="secondary">Edit</CButton>
            </CButtonGroup>
            <CInput
              class="mb-0 w-25 mx-1"
              size="sm"
              append=".00"
              value="100"
              prepend="$"
            />
            <CSelect
              class="mb-0 w-25 mx-1"
              size="sm"
              value="Medium"
              :options="['Large','Medium','Small']"
              custom
              prepend="Size"
            />
            <CButtonGroup _zx_="01533_" size="sm" class="mx-1">
              <CButton _zx_="01534_" color="secondary">Save</CButton>
              <CButton _zx_="01535_" color="secondary">Cancel</CButton>
            </CButtonGroup>
          </CButtonToolbar>
          <hr _zx_="01536_"/>
          <CButtonToolbar _zx_="01537_" aria-label="Toolbar with button groups and dropdown menu">
            <CButtonGroup _zx_="01538_" class="mx-1 d-sm-down-none">
              <CButton _zx_="01539_" color="secondary">New</CButton>
              <CButton _zx_="01540_" color="secondary">Edit</CButton>
              <CButton _zx_="01541_" color="secondary">Undo</CButton>
            </CButtonGroup>
            <CDropdown
              color="secondary"
              class="mx-1"
              placement="bottom-end"
              button-content="Menu"
            >
              <CDropdownItem _zx_="01542_">Item 1</CDropdownItem>
              <CDropdownItem _zx_="01543_">Item 2</CDropdownItem>
              <CDropdownItem _zx_="01544_">Item 3</CDropdownItem>
            </CDropdown>
            <CButtonGroup _zx_="01545_" class="mx-1">
              <CButton _zx_="01546_" color="secondary">Save</CButton>
              <CButton _zx_="01547_" color="secondary">Cancel</CButton>
            </CButtonGroup>
          </CButtonToolbar>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow></template>
<script>
export default {
  name: 'ButtonGroups',
}
</script>
