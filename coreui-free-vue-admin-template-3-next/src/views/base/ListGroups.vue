<template>
  <div _zx_="00566_">
    <CRow _zx_="00567_">
      <CCol _zx_="00568_" md="6">
        <CCard _zx_="00569_">
          <CCardHeader _zx_="00570_">
            <CIcon _zx_="00571_" name="cil-justify-center"/>
            <strong _zx_="00572_"> Bootstrap list group </strong>
            <div _zx_="00573_" class="card-header-actions">
              <a 
                href="https://coreui.io/vue/docs/components/list-group" 
                class="card-header-action" 
                rel="noreferrer noopener" 
                target="_blank"
              >
                <small _zx_="00574_" class="text-muted">docs</small>
              </a>
            </div>
          </CCardHeader>
          <CCardBody _zx_="00575_">
            <CListGroup _zx_="00576_">
              <CListGroupItem _zx_="00577_">Cras justo odio</CListGroupItem>
              <CListGroupItem _zx_="00578_">Dapibus ac facilisis in</CListGroupItem>
              <CListGroupItem _zx_="00579_">Morbi leo risus</CListGroupItem>
              <CListGroupItem _zx_="00580_">Porta ac consectetur ac</CListGroupItem>
              <CListGroupItem _zx_="00581_">Vestibulum at eros</CListGroupItem>
            </CListGroup>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol _zx_="00582_" md="6">
        <CCard _zx_="00583_">
          <CCardHeader _zx_="00584_">
            <CIcon _zx_="00585_" name="cil-justify-center"/><strong> List group </strong><small>active items</small>
          </CCardHeader>
          <CCardBody _zx_="00586_">
            <CListGroup _zx_="00587_">
              <CListGroupItem _zx_="00588_">Cras justo odio</CListGroupItem>
              <CListGroupItem _zx_="00589_" active>Dapibus ac facilisis in</CListGroupItem>
              <CListGroupItem _zx_="00590_">Morbi leo risus</CListGroupItem>
              <CListGroupItem _zx_="00591_">Porta ac consectetur ac</CListGroupItem>
              <CListGroupItem _zx_="00592_">Vestibulum at eros</CListGroupItem>
            </CListGroup>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    <CRow _zx_="00593_">
      <CCol _zx_="00594_" md="6">
        <CCard _zx_="00595_">
          <CCardHeader _zx_="00596_">
            <CIcon _zx_="00597_" name="cil-justify-center"/>
            <strong _zx_="00598_"> List group </strong>
            <small _zx_="00599_">disabled items</small>
          </CCardHeader>
          <CCardBody _zx_="00600_">
            <CListGroup _zx_="00601_">
              <CListGroupItem _zx_="00602_" disabled>Cras justo odio</CListGroupItem>
              <CListGroupItem _zx_="00603_">Dapibus ac facilisis in</CListGroupItem>
              <CListGroupItem _zx_="00604_">Morbi leo risus</CListGroupItem>
              <CListGroupItem _zx_="00605_" disabled>Porta ac consectetur ac</CListGroupItem>
              <CListGroupItem _zx_="00606_">Vestibulum at eros</CListGroupItem>
            </CListGroup>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol _zx_="00607_" md="6">
        <CCard _zx_="00608_">
          <CCardHeader _zx_="00609_">
            <CIcon _zx_="00610_" name="cil-justify-center"/>
            <strong _zx_="00611_"> List group </strong>
            <small _zx_="00612_">actionable items</small>
          </CCardHeader>
          <CCardBody _zx_="00613_">
            <CListGroup _zx_="00614_">
              <CListGroupItem _zx_="00615_" href="#some-link">Awesome link</CListGroupItem>
              <CListGroupItem _zx_="00616_" href="#" active>Link with active state</CListGroupItem>
              <CListGroupItem _zx_="00617_" href="#">Action links are easy</CListGroupItem>
              <CListGroupItem _zx_="00618_" href="#foobar" disabled>Disabled link</CListGroupItem>
            </CListGroup>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    <CRow _zx_="00619_">
      <CCol _zx_="00620_" md="6">
        <CCard _zx_="00621_">
          <CCardHeader _zx_="00622_">
            <CIcon _zx_="00623_" name="cil-justify-center"/>
            <strong _zx_="00624_"> List group </strong>
            <small _zx_="00625_">buttons</small>
          </CCardHeader>
          <CCardBody _zx_="00626_">
            <CListGroup _zx_="00627_">
              <CListGroupItem _zx_="00628_" tag="button">Button item</CListGroupItem>
              <CListGroupItem _zx_="00629_" tag="button">I am a button</CListGroupItem>
              <CListGroupItem _zx_="00630_" tag="button" disabled>Disabled button</CListGroupItem>
              <CListGroupItem _zx_="00631_" tag="button">This is a button too</CListGroupItem>
            </CListGroup>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol _zx_="00632_" md="6">
        <CCard _zx_="00633_">
          <CCardHeader _zx_="00634_">
            <CIcon _zx_="00635_" name="cil-justify-center"/>
            <strong _zx_="00636_"> List group </strong>
            <small _zx_="00637_">with badges</small>
          </CCardHeader>
          <CCardBody _zx_="00638_">
            <CListGroup _zx_="00639_">
              <CListGroupItem
                class="d-flex justify-content-between align-items-center"
              >
                Cras justo odio
                <CBadge _zx_="00640_" color="primary" shape="pill">14</CBadge>
              </CListGroupItem>
              <CListGroupItem
                class="d-flex justify-content-between align-items-center"
              >
                Dapibus ac facilisis in
                <CBadge _zx_="00641_" color="primary" shape="pill">2</CBadge>
              </CListGroupItem>
              <CListGroupItem
                class="d-flex justify-content-between align-items-center"
              >
                Morbi leo risus
                <CBadge _zx_="00642_" color="primary" shape="pill">1</CBadge>
              </CListGroupItem>
            </CListGroup>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    <CRow _zx_="00643_">
      <CCol _zx_="00644_" md="6">
        <CCard _zx_="00645_">
          <CCardHeader _zx_="00646_">
            <CIcon _zx_="00647_" name="cil-justify-center"/>
            <strong _zx_="00648_"> List group </strong>
            <small _zx_="00649_">colors</small>
          </CCardHeader>
          <CCardBody _zx_="00650_">
            <CListGroup _zx_="00651_">
              <CListGroupItem _zx_="00652_">This is a default list group item</CListGroupItem>
              <CListGroupItem _zx_="00653_" color="primary">This is a primary list group item</CListGroupItem>
              <CListGroupItem _zx_="00654_" color="secondary">This is a secondary list group item</CListGroupItem>
              <CListGroupItem _zx_="00655_" color="success">This is a success list group item</CListGroupItem>
              <CListGroupItem _zx_="00656_" color="danger">This is a danger list group item</CListGroupItem>
              <CListGroupItem _zx_="00657_" color="warning">This is a warning list group item</CListGroupItem>
              <CListGroupItem _zx_="00658_" color="info">This is a info list group item</CListGroupItem>
              <CListGroupItem _zx_="00659_" color="light">This is a light list group item</CListGroupItem>
              <CListGroupItem _zx_="00660_" color="dark">This is a dark list group item</CListGroupItem>
            </CListGroup>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol _zx_="00661_" md="6">
        <CCard _zx_="00662_">
          <CCardHeader _zx_="00663_">
            <CIcon _zx_="00664_" name="cil-justify-center"/>
            <strong _zx_="00665_"> List group </strong>
            <small _zx_="00666_">colors active</small>
          </CCardHeader>
          <CCardBody _zx_="00667_">
            <CListGroup _zx_="00668_">
              <CListGroupItem _zx_="00669_" href="#">This is a default list group item</CListGroupItem>
              <CListGroupItem _zx_="00670_" href="#" color="primary">This is a primary list group item</CListGroupItem>
              <CListGroupItem _zx_="00671_" href="#" color="secondary">This is a secondary list group item</CListGroupItem>
              <CListGroupItem _zx_="00672_" href="#" color="success">This is a success list group item</CListGroupItem>
              <CListGroupItem _zx_="00673_" href="#" color="danger">This is a danger list group item</CListGroupItem>
              <CListGroupItem _zx_="00674_" href="#" color="warning">This is a warning list group item</CListGroupItem>
              <CListGroupItem _zx_="00675_" href="#" color="info">This is a info list group item</CListGroupItem>
              <CListGroupItem _zx_="00676_" href="#" color="light">This is a light list group item</CListGroupItem>
              <CListGroupItem _zx_="00677_" href="#" color="dark">This is a dark list group item</CListGroupItem>
            </CListGroup>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    <CRow _zx_="00678_">
      <CCol _zx_="00679_" col="12">
        <CCard _zx_="00680_">
          <CCardHeader _zx_="00681_">
            <CIcon _zx_="00682_" name="cil-justify-center"/>
            <strong _zx_="00683_"> List group </strong>
            <small _zx_="00684_">inside cards</small>
          </CCardHeader>
          <CCardBody _zx_="00685_">
            <CCardGroup _zx_="00686_" deck>
              <CCard _zx_="00687_">
                <CCardHeader _zx_="00688_">
                  <b _zx_="00689_">Card with list group</b>
                </CCardHeader>
                <CCardBody _zx_="00690_">
                  <CListGroup _zx_="00691_">
                    <CListGroupItem _zx_="00692_" href="#">Cras justo odio</CListGroupItem>
                    <CListGroupItem _zx_="00693_" href="#">Dapibus ac facilisis in</CListGroupItem>
                    <CListGroupItem _zx_="00694_" href="#">Vestibulum at eros</CListGroupItem>
                  </CListGroup>
                  <CCardText _zx_="00695_" class="mt-2">
                    Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex
                    nulla tempor. Laborum consequat non elit enim exercitation cillum aliqua
                    consequat id aliqua. Esse ex consectetur mollit voluptate est in duis laboris
                    ad sit ipsum anim Lorem.
                  </CCardText>
                </CCardBody>
              </CCard>
              <CCard _zx_="00696_">
                <CCardHeader _zx_="00697_"><b>Card with flush list group</b></CCardHeader>
                <CListGroup _zx_="00698_" flush>
                  <CListGroupItem _zx_="00699_" href="#">Cras justo odio</CListGroupItem>
                  <CListGroupItem _zx_="00700_" href="#">Dapibus ac facilisis in</CListGroupItem>
                  <CListGroupItem _zx_="00701_" href="#">Vestibulum at eros</CListGroupItem>
                </CListGroup>
                <CCardBody _zx_="00702_">
                  Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex
                  nulla tempor. Laborum consequat non elit enim exercitation cillum aliqua
                  consequat id aliqua. Esse ex consectetur mollit voluptate est in duis laboris
                  ad sit ipsum anim Lorem.
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    <CRow _zx_="00703_">
      <CCol _zx_="00704_" md="6">
        <CCard _zx_="00705_">
          <CCardHeader _zx_="00706_">
            <CIcon _zx_="00707_" name="cil-justify-center"/><strong> List group </strong><small>custom content</small>
          </CCardHeader>
          <CCardBody _zx_="00708_">
            <CListGroup _zx_="00709_">
              <CListGroupItem
                href="#"
                active
                class="flex-column align-items-start"
              >
                <div _zx_="00710_" class="d-flex w-100 justify-content-between">
                  <h5 _zx_="00711_" class="mb-1">List group item heading</h5>
                  <small _zx_="00712_">3 days ago</small>
                </div>
                <p _zx_="00713_" class="mb-1">
                  Donec id elit non mi porta gravida at eget metus. Maecenas
                  sed diam eget risus varius blandit.
                </p>
                <small _zx_="00714_">Donec id elit non mi porta.</small>
              </CListGroupItem>
              <CListGroupItem _zx_="00715_" href="#" class="flex-column align-items-start">
                <div _zx_="00716_" class="d-flex w-100 justify-content-between">
                  <h5 _zx_="00717_" class="mb-1">List group item heading</h5>
                  <small _zx_="00718_" class="text-muted">3 days ago</small>
                </div>
                <p _zx_="00719_" class="mb-1">
                  Donec id elit non mi porta gravida at eget metus. Maecenas
                  sed diam eget risus varius blandit.
                </p>
                <small _zx_="00720_" class="text-muted">Donec id elit non mi porta.</small>
              </CListGroupItem>
              <CListGroupItem _zx_="00721_" href="#" disabled class="flex-column align-items-start">
                <div _zx_="00722_" class="d-flex w-100 justify-content-between">
                  <h5 _zx_="00723_" class="mb-1">Disabled List group item</h5>
                  <small _zx_="00724_" class="text-muted">3 days ago</small>
                </div>
                <p _zx_="00725_" class="mb-1">
                  Donec id elit non mi porta gravida at eget metus. Maecenas
                  sed diam eget risus varius blandit.
                </p>
                <small _zx_="00726_" class="text-muted">Donec id elit non mi porta.</small>
              </CListGroupItem>
            </CListGroup>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div></template>

<script>
export default {
  name: 'ListGroups'
}
</script>
