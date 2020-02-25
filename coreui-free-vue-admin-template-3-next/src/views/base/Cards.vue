<template>
  <div _zx_="00085_">
    <CRow _zx_="00086_">
      <CCol _zx_="00087_" sm="6" md="4">
        <CCard _zx_="00088_">
          <CCardHeader _zx_="00089_">
            Card title
            <div _zx_="00090_" class="card-header-actions">
              <a 
                href="https://coreui.io/vue/docs/components/card-components" 
                class="card-header-action" 
                rel="noreferrer noopener" 
                target="_blank"
              >
                <small _zx_="00091_" class="text-muted">docs</small>
              </a>
            </div>
          </CCardHeader>
          <CCardBody _zx_="00092_">
            {{loremIpsum}}
          </CCardBody>
        </CCard>
      </CCol>
      <CCol _zx_="00093_" sm="6" md="4">
        <CCard _zx_="00094_">
          <CCardBody _zx_="00095_">{{loremIpsum}}</CCardBody>
          <CCardFooter _zx_="00096_">Card Footer</CCardFooter>
        </CCard>
      </CCol>
      <CCol _zx_="00097_" sm="6" md="4">
        <CCard _zx_="00098_">
          <CCardHeader _zx_="00099_"><CIcon name="cil-check"/> Card with icon</CCardHeader>
          <CCardBody _zx_="00100_">{{loremIpsum}}</CCardBody>
        </CCard>
      </CCol>
      <CCol _zx_="00101_" sm="6" md="4">
        <CCard _zx_="00102_">
          <CCardHeader _zx_="00103_">
            Card with switch
            <CSwitch
              class="float-right"
              size="sm"
              shape="pill"
              color="info"
              data-on="On"
              data-off="Off"
              :checked="true"
            />
          </CCardHeader>
          <CCardBody _zx_="00104_">
            {{loremIpsum}}
          </CCardBody>
        </CCard>
      </CCol>
      <CCol _zx_="00105_" sm="6" md="4">
        <CCard _zx_="00106_">
          <CCardHeader _zx_="00107_">
            Card with label
            <CBadge _zx_="00108_" color="success" class="float-right">Success</CBadge>
          </CCardHeader>
          <CCardBody _zx_="00109_">
            {{loremIpsum}}
          </CCardBody>
        </CCard>
      </CCol>
      <CCol _zx_="00110_" sm="6" md="4">
        <CCard _zx_="00111_">
          <CCardHeader _zx_="00112_">
            Card with label
            <CBadge _zx_="00113_" shape="pill" color="danger" class="float-right">42</CBadge>
          </CCardHeader>
          <CCardBody _zx_="00114_">
            {{loremIpsum}}
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    <CRow _zx_="00115_">
      <CCol _zx_="00116_" sm="6" md="4">
        <CCard _zx_="00117_" border-color="primary">
          <CCardHeader _zx_="00118_">Card outline primary</CCardHeader>
          <CCardBody _zx_="00119_">{{loremIpsum}}</CCardBody>
        </CCard>
      </CCol>
      <CCol _zx_="00120_" sm="6" md="4">
        <CCard _zx_="00121_" border-color="secondary">
          <CCardHeader _zx_="00122_">Card outline secondary</CCardHeader>
          <CCardBody _zx_="00123_">{{loremIpsum}}</CCardBody>
        </CCard>
      </CCol>
      <CCol _zx_="00124_" sm="6" md="4">
        <CCard _zx_="00125_" border-color="success">
          <CCardHeader _zx_="00126_">Card outline success</CCardHeader>
          <CCardBody _zx_="00127_">{{loremIpsum}}</CCardBody>
        </CCard>
      </CCol>
      <CCol _zx_="00128_" sm="6" md="4">
        <CCard _zx_="00129_" border-color="info">
          <CCardHeader _zx_="00130_">Card outline info</CCardHeader>
          <CCardBody _zx_="00131_">{{loremIpsum}}</CCardBody>
        </CCard>
      </CCol>
      <CCol _zx_="00132_" sm="6" md="4">
        <CCard _zx_="00133_" border-color="warning">
          <CCardHeader _zx_="00134_">Card outline warning</CCardHeader>
          <CCardBody _zx_="00135_">{{loremIpsum}}</CCardBody>
        </CCard>
      </CCol>
      <CCol _zx_="00136_" sm="6" md="4">
        <CCard _zx_="00137_" border-color="danger">
          <CCardHeader _zx_="00138_">Card outline danger</CCardHeader>
          <CCardBody _zx_="00139_">{{loremIpsum}}</CCardBody>
        </CCard>
      </CCol>
    </CRow>

    <CRow _zx_="00140_">
      <CCol _zx_="00141_" sm="6" md="4">
        <CCard _zx_="00142_" accent-color="primary">
          <CCardHeader _zx_="00143_">Card with primary accent</CCardHeader>
          <CCardBody _zx_="00144_">{{loremIpsum}}</CCardBody>
        </CCard>
      </CCol>
      <CCol _zx_="00145_" sm="6" md="4">
        <CCard _zx_="00146_" accent-color="secondary">
          <CCardHeader _zx_="00147_">Card with secondary accent</CCardHeader>
          <CCardBody _zx_="00148_">{{loremIpsum}}</CCardBody>
        </CCard>
      </CCol>
      <CCol _zx_="00149_" sm="6" md="4">
        <CCard _zx_="00150_" accent-color="success">
          <CCardHeader _zx_="00151_">Card with success accent</CCardHeader>
          <CCardBody _zx_="00152_">{{loremIpsum}}</CCardBody>
        </CCard>
      </CCol>
      <CCol _zx_="00153_" sm="6" md="4">
        <CCard _zx_="00154_" accent-color="info">
          <CCardHeader _zx_="00155_">Card with info accent</CCardHeader>
          <CCardBody _zx_="00156_">{{loremIpsum}}</CCardBody>
        </CCard>
      </CCol>
      <CCol _zx_="00157_" sm="6" md="4">
        <CCard _zx_="00158_" accent-color="info">
          <CCardHeader _zx_="00159_">Card with info accent</CCardHeader>
          <CCardBody _zx_="00160_">{{loremIpsum}}</CCardBody>
        </CCard>
      </CCol>
      <CCol _zx_="00161_" sm="6" md="4">
        <CCard _zx_="00162_" accent-color="danger">
          <CCardHeader _zx_="00163_">Card with danger accent</CCardHeader>
          <CCardBody _zx_="00164_">{{loremIpsum}}</CCardBody>
        </CCard>
      </CCol>
    </CRow>
    <CRow _zx_="00165_">
      <CCol _zx_="00166_" sm="6" md="4">
        <CCard _zx_="00167_" color="primary" class="text-center" body-wrapper text-color="white">
          <blockquote _zx_="00168_" class="card-blockquote">
            <p _zx_="00169_">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer _zx_="00170_">Someone famous in
              <cite _zx_="00171_" title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </CCard>
      </CCol>
      <CCol _zx_="00172_" sm="6" md="4">
        <CCard 
          color="success" 
          class="text-center" 
          body-wrapper
          text-color="white"
        >
          <blockquote _zx_="00173_" class="card-blockquote">
            <p _zx_="00174_">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer _zx_="00175_">Someone famous in
              <cite _zx_="00176_" title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </CCard>
      </CCol>
      <CCol _zx_="00177_" sm="6" md="4">
        <CCard _zx_="00178_" color="info" class="text-center" body-wrapper text-color="white">
          <blockquote _zx_="00179_" class="card-blockquote">
            <p _zx_="00180_">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer _zx_="00181_">Someone famous in
              <cite _zx_="00182_" title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </CCard>
      </CCol>
      <CCol _zx_="00183_" sm="6" md="4">
        <CCard _zx_="00184_" color="warning" class="text-center" body-wrapper text-color="white">
          <blockquote _zx_="00185_" class="card-blockquote">
            <p _zx_="00186_">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer _zx_="00187_">Someone famous in
              <cite _zx_="00188_" title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </CCard>
      </CCol>
      <CCol _zx_="00189_" sm="6" md="4">
        <CCard _zx_="00190_" color="danger" class="text-center" body-wrapper text-color="white">
          <blockquote _zx_="00191_" class="card-blockquote">
            <p _zx_="00192_">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer _zx_="00193_">Someone famous in
              <cite _zx_="00194_" title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </CCard>
      </CCol>
      <CCol _zx_="00195_" sm="6" md="4">
        <CCard _zx_="00196_" color="secondary" class="text-center" body-wrapper>
          <blockquote _zx_="00197_" class="card-blockquote">
            <p _zx_="00198_">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer _zx_="00199_">Someone famous in
              <cite _zx_="00200_" title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </CCard>
      </CCol>
    </CRow>
    <CRow _zx_="00201_">
      <CCol _zx_="00202_" sm="6" md="4">
        <CCard _zx_="00203_" color="primary" body-wrapper text-color="white">
          {{loremIpsum}}
        </CCard>
      </CCol>
      <CCol _zx_="00204_" sm="6" md="4">
        <CCard _zx_="00205_" color="success" body-wrapper text-color="white">
          {{loremIpsum}}
        </CCard>
      </CCol>
      <CCol _zx_="00206_" sm="6" md="4">
        <CCard _zx_="00207_" color="info" body-wrapper text-color="white">
          {{loremIpsum}}
        </CCard>
      </CCol>
      <CCol _zx_="00208_" sm="6" md="4">
        <CCard _zx_="00209_" color="warning" body-wrapper text-color="white">
          {{loremIpsum}}
        </CCard>
      </CCol>
      <CCol _zx_="00210_" sm="6" md="4">
        <CCard _zx_="00211_" color="danger" body-wrapper text-color="white">
          {{loremIpsum}}
        </CCard>
      </CCol>
      <CCol _zx_="00212_" sm="6" md="4">
        <transition _zx_="00213_" name="fade">
          <CCard _zx_="00214_" v-if="show" color="secondary">
            <CCardHeader _zx_="00215_">
              Card with header actions
              <div _zx_="00216_" class="card-header-actions">
                <CLink _zx_="00217_" href="#" class="card-header-action btn-setting">
                  <CIcon _zx_="00218_" name="cil-settings"/>
                </CLink>
                <CLink _zx_="00219_" class="card-header-action btn-minimize" @click="isCollapsed = !isCollapsed">
                  <CIcon _zx_="00220_" :name="`cil-chevron-${isCollapsed ? 'bottom' : 'top'}`"/>
                </CLink>
                <CLink _zx_="00221_" href="#" class="card-header-action btn-close" v-on:click="show = false">
                  <CIcon _zx_="00222_" name="cil-x-circle"/>
                </CLink>
              </div>
            </CCardHeader>
            <CCollapse _zx_="00223_" :show="isCollapsed" :duration="400">
              <CCardBody _zx_="00224_">
                {{loremIpsum}}
              </CCardBody>
            </CCollapse>
          </CCard>
        </transition>
      </CCol>
    </CRow>
  </div></template>

<script>

export default {
  name: 'Cards',
  data: function () {
    return {
      show: true,
      isCollapsed: true,
      loremIpsum: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'
    }
  }
}
</script>
