<template>
  <div _zx_="01548_">
    <CRow _zx_="01549_">
      <CCol _zx_="01550_" col="12" md="6">
        <CCard _zx_="01551_">
          <CCardHeader _zx_="01552_">
            <CIcon _zx_="01553_" name="cil-justify-center"/>
            <strong _zx_="01554_"> Bootstrap Dropdown</strong>
            <div _zx_="01555_" class="card-header-actions">
              <a 
                href="https://coreui.io/vue/docs/components/dropdown" 
                class="card-header-action" 
                rel="noreferrer noopener" 
                target="_blank"
              >
                <small _zx_="01556_" class="text-muted">docs</small>
              </a>
            </div>
          </CCardHeader>
          <CCardBody _zx_="01557_">
            <div _zx_="01558_">
              <CDropdown 
                toggler-text="Dropdown Button" 
                class="m-2"
                color="secondary"
              >
                <CDropdownItem _zx_="01559_">First Action</CDropdownItem>
                <CDropdownItem _zx_="01560_">Second Action</CDropdownItem>
                <CDropdownItem _zx_="01561_">Third Action</CDropdownItem>
                <CDropdownDivider _zx_="01562_"/>
                <CDropdownItem _zx_="01563_">Something else here...</CDropdownItem>
                <CDropdownItem _zx_="01564_" disabled>Disabled action</CDropdownItem>
              </CDropdown>
            </div>
            <!-- <div>
              <CDropdown _zx_="01565_" toggler-text="Dropdown using buttons as menu items" class="m-2">
                <CDropdownItem _zx_="01566_">I'm a button</CDropdownItem>
                <CDropdownItem _zx_="01567_">I'm also a button</CDropdownItem>
                <CDropdownItem _zx_="01568_" disabled>I'm a button, but disabled!</CDropdownItem>
                <CDropdownItem _zx_="01569_">I don't look like a button, but I am!</CDropdownItem>
              </CDropdown>
            </div> -->
            <div _zx_="01570_">
              <CDropdown 
                toggler-text="Dropdown with divider" 
                class="m-2"
                color="secondary"
              >
                <CDropdownItem _zx_="01571_">First item</CDropdownItem>
                <CDropdownItem _zx_="01572_">Second item</CDropdownItem>
                <CDropdownDivider _zx_="01573_"/>
                <CDropdownItem _zx_="01574_">Separated Item</CDropdownItem>
              </CDropdown>
            </div>
            <div _zx_="01575_">
              <CDropdown 
                toggler-text="Dropdown with header" 
                class="m-2"
                color="secondary"
              >
                <CDropdownHeader _zx_="01576_">Dropdown header</CDropdownHeader>
                <CDropdownItem _zx_="01577_">First item</CDropdownItem>
                <CDropdownItem _zx_="01578_">Second Item</CDropdownItem>
              </CDropdown>
            </div>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol _zx_="01579_" col="12" md="6">
        <CCard _zx_="01580_">
          <CCardHeader _zx_="01581_">
            <CIcon _zx_="01582_" name="cil-justify-center"/>
            <strong _zx_="01583_"> Dropdown </strong>
            <small _zx_="01584_">positioning</small>
          </CCardHeader>
          <CCardBody _zx_="01585_">
            <div _zx_="01586_">
              <CDropdown
                toggler-text="Left align"
                color="primary"
                class="m-2 d-inline-block"
              >
                <CDropdownItem _zx_="01587_">Action</CDropdownItem>
                <CDropdownItem _zx_="01588_">Another action</CDropdownItem>
                <CDropdownItem _zx_="01589_">Something else here</CDropdownItem>
              </CDropdown>
              <CDropdown
                placement="bottom-end"
                toggler-text="Right align"
                color="primary"
                class="m-2 d-inline-block"
              >
                <CDropdownItem _zx_="01590_">Action</CDropdownItem>
                <CDropdownItem _zx_="01591_">Another action</CDropdownItem>
                <CDropdownItem _zx_="01592_">Something else here</CDropdownItem>
              </CDropdown>
            </div>
            <div _zx_="01593_">
              <CDropdown
                toggler-text="Drop-Up"
                color="info"
                class="m-2"
                placement="top-start"

              >
                <CDropdownItem _zx_="01594_">Action</CDropdownItem>
                <CDropdownItem _zx_="01595_">Another action</CDropdownItem>
                <CDropdownItem _zx_="01596_">Something else here</CDropdownItem>
              </CDropdown>
            </div>
            <div _zx_="01597_">
              <CDropdown
                color="secondary"
                :offset="25"
                toggler-text="Offset Dropdown"
                class="m-2"
              >
                <CDropdownItem _zx_="01598_">Action</CDropdownItem>
                <CDropdownItem _zx_="01599_">Another action</CDropdownItem>
                <CDropdownItem _zx_="01600_">Something else here</CDropdownItem>
              </CDropdown>
            </div>
            <div _zx_="01601_">
              <CDropdown
                color="secondary"
                split
                toggler-text="Split Dropdown"
                class="m-2"
              >
                <CDropdownItem _zx_="01602_">Action</CDropdownItem>
                <CDropdownItem _zx_="01603_">Another action</CDropdownItem>
                <CDropdownItem _zx_="01604_">Something else here...</CDropdownItem>
              </CDropdown>
            </div>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    <CRow _zx_="01605_">
      <CCol _zx_="01606_" col="12" md="6">
        <CCard _zx_="01607_">
          <CCardHeader _zx_="01608_">
            <CIcon _zx_="01609_" name="cil-justify-center"/>
            <strong _zx_="01610_"> Dropdown </strong>
            <small _zx_="01611_">hidden caret</small>
          </CCardHeader>
          <CCardBody _zx_="01612_">
            <div _zx_="01613_">
              <CDropdown
                color="link"
                size="lg"
                :caret="false"
              >
                <template _zx_="01614_" #toggler-content>
                  &#x1f50d;<span _zx_="01615_" class="sr-only">Search</span>
                </template>
                <CDropdownItem _zx_="01616_">Action</CDropdownItem>
                <CDropdownItem _zx_="01617_">Another action</CDropdownItem>
                <CDropdownItem _zx_="01618_">Something else here...</CDropdownItem>
              </CDropdown>
            </div>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol _zx_="01619_" col="12" md="6">
        <CCard _zx_="01620_">
          <CCardHeader _zx_="01621_">
            <CIcon _zx_="01622_" name="cil-justify-center"/>
            <strong _zx_="01623_"> Dropdown </strong>
            <small _zx_="01624_">sizing</small>
          </CCardHeader>
          <CCardBody _zx_="01625_">
            <div _zx_="01626_">
              <CDropdown
                color="secondary"
                size="lg"
                toggler-text="Large"
                class="m-2 d-inline-block"
              >
                <CDropdownItem _zx_="01627_">Action</CDropdownItem>
                <CDropdownItem _zx_="01628_">Another action</CDropdownItem>
                <CDropdownItem _zx_="01629_">Something else here</CDropdownItem>
              </CDropdown>
              <CDropdown
                color="secondary"
                size="lg"
                split
                toggler-text="Large Split"
                class="m-2"
              >
                <CDropdownItem _zx_="01630_">Action</CDropdownItem>
                <CDropdownItem _zx_="01631_">Another action</CDropdownItem>
                <CDropdownItem _zx_="01632_">Something else here...</CDropdownItem>
              </CDropdown>
              <br _zx_="01633_">
              <CDropdown
                color="secondary"
                size="sm"
                toggler-text="Small"
                class="m-2 d-inline-block"
              >
                <CDropdownItem _zx_="01634_">Action</CDropdownItem>
                <CDropdownItem _zx_="01635_">Another action</CDropdownItem>
                <CDropdownItem _zx_="01636_">Something else here...</CDropdownItem>
              </CDropdown>
              <CDropdown
                color="secondary"
                size="sm"
                split toggler-text="Small Split"
                class="m-2"
              >
                <CDropdownItem _zx_="01637_">Action</CDropdownItem>
                <CDropdownItem _zx_="01638_">Another action</CDropdownItem>
                <CDropdownItem _zx_="01639_">Something else here...</CDropdownItem>
              </CDropdown>
            </div>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    <CRow _zx_="01640_">
      <CCol _zx_="01641_" col="12" md="6">
        <CCard _zx_="01642_">
          <CCardHeader _zx_="01643_">
            <CIcon _zx_="01644_" name="cil-justify-center"/>
            <strong _zx_="01645_"> Dropdown </strong>
            <small _zx_="01646_">headers and accessibility</small>
          </CCardHeader>
          <CCardBody _zx_="01647_">
            <div _zx_="01648_">
              <CDropdown
                toggler-text="Dropdown ARIA" color="primary"
                class="m-2"
              >
                <div _zx_="01649_" role="group">
                  <CDropdownHeader _zx_="01650_">Groups</CDropdownHeader>
                  <CDropdownItem _zx_="01651_">Add</CDropdownItem>
                  <CDropdownItem _zx_="01652_">Delete</CDropdownItem>
                </div>
                <div _zx_="01653_" role="group">
                  <CDropdownHeader _zx_="01654_">Users</CDropdownHeader>
                  <CDropdownItem _zx_="01655_">Add</CDropdownItem>
                  <CDropdownItem _zx_="01656_">Delete</CDropdownItem>
                </div>
                <CDropdownDivider _zx_="01657_"/>
                <CDropdownItem _zx_="01658_">
                  Something <strong _zx_="01659_">not</strong> associated with user
                </CDropdownItem>
              </CDropdown>
            </div>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol _zx_="01660_" col="12" md="6">
        <CCard _zx_="01661_">
          <CCardHeader _zx_="01662_">
            <CIcon _zx_="01663_" name="cil-justify-center"/>
            <strong _zx_="01664_"> Dropdown </strong>
            <small _zx_="01665_"><code>color</code></small>
          </CCardHeader>
          <CCardBody _zx_="01666_">
            <CDropdown
              size="sm"
              toggler-text="Primary"
              color="primary"
              class="m-0 d-inline-block"
            >
              <CDropdownItem _zx_="01667_">First Action</CDropdownItem>
              <CDropdownItem _zx_="01668_">Second Action</CDropdownItem>
              <CDropdownItem _zx_="01669_">Third Action</CDropdownItem>
            </CDropdown>
            <CDropdown
              size="sm"
              toggler-text="Secondary"
              color="secondary"
              class="m-0 d-inline-block"
            >
              <CDropdownItem _zx_="01670_">First Action</CDropdownItem>
              <CDropdownItem _zx_="01671_">Second Action</CDropdownItem>
              <CDropdownItem _zx_="01672_">Third Action</CDropdownItem>
            </CDropdown>
            <CDropdown
              size="sm"
              toggler-text="Success"
              color="success"
              class="m-0 d-inline-block"
            >
              <CDropdownItem _zx_="01673_">First Action</CDropdownItem>
              <CDropdownItem _zx_="01674_">Second Action</CDropdownItem>
              <CDropdownItem _zx_="01675_">Third Action</CDropdownItem>
            </CDropdown>
            <CDropdown
              size="sm"
              toggler-text="Warning"
              color="warning"
              class="m-0 d-inline-block"
            >
              <CDropdownItem _zx_="01676_">First Action</CDropdownItem>
              <CDropdownItem _zx_="01677_">Second Action</CDropdownItem>
              <CDropdownItem _zx_="01678_">Third Action</CDropdownItem>
            </CDropdown>
            <CDropdown
              size="sm"
              toggler-text="Danger"
              color="danger"
              class="m-0 d-inline-block"
            >
              <CDropdownItem _zx_="01679_">First Action</CDropdownItem>
              <CDropdownItem _zx_="01680_">Second Action</CDropdownItem>
              <CDropdownItem _zx_="01681_">Third Action</CDropdownItem>
            </CDropdown>
            <CDropdown
              size="sm"
              toggler-text="Info"
              color="info"
              class="m-0 d-inline-block"
            >
              <CDropdownItem _zx_="01682_">First Action</CDropdownItem>
              <CDropdownItem _zx_="01683_">Second Action</CDropdownItem>
              <CDropdownItem _zx_="01684_">Third Action</CDropdownItem>
            </CDropdown>
            <CDropdown
              size="sm"
              toggler-text="Light"
              color="light"
              class="m-0 d-inline-block"
            >
              <CDropdownItem _zx_="01685_">First Action</CDropdownItem>
              <CDropdownItem _zx_="01686_">Second Action</CDropdownItem>
              <CDropdownItem _zx_="01687_">Third Action</CDropdownItem>
            </CDropdown>
            <CDropdown
              size="sm"
              toggler-text="Dark"
              color="dark"
              class="m-0 d-inline-block"
            >
              <CDropdownItem _zx_="01688_">First Action</CDropdownItem>
              <CDropdownItem _zx_="01689_">Second Action</CDropdownItem>
              <CDropdownItem _zx_="01690_">Third Action</CDropdownItem>
            </CDropdown>
            <CDropdown
              size="sm"
              toggler-text="Link"
              color="link"
              class="m-0 d-inline-block"
            >
              <CDropdownItem _zx_="01691_">First Action</CDropdownItem>
              <CDropdownItem _zx_="01692_">Second Action</CDropdownItem>
              <CDropdownItem _zx_="01693_">Third Action</CDropdownItem>
            </CDropdown>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div></template>

<script>
export default {
  name: 'Dropdowns'
}
</script>
