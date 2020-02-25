<template>
  <div _zx_="02404_" class="wrapper">
    <div _zx_="02405_">
      <CRow _zx_="02406_">
        <CCol _zx_="02407_" col="12">
          <CCard _zx_="02408_">
            <CCardHeader _zx_="02409_">
              <CIcon _zx_="02410_" name="cil-justify-center"/> Bootstrap Modals
              <div _zx_="02411_" class="card-header-actions">
                <a 
                  href="https://coreui.io/vue/docs/components/modal" 
                  class="card-header-action" 
                  rel="noreferrer noopener" 
                  target="_blank"
                >
                  <small _zx_="02412_" class="text-muted">docs</small>
                </a>
              </div>
            </CCardHeader>
            <CCardBody _zx_="02413_">
              <CButton _zx_="02414_" color="secondary" @click="myModal = true" class="mr-1">
                Launch demo modal
              </CButton>
              <CButton _zx_="02415_" color="secondary" @click="largeModal = true" class="mr-1">
                Launch large modal
              </CButton>
              <CButton _zx_="02416_" color="secondary" @click="smallModal = true" class="mr-1">
                Launch small modal
              </CButton>
              <hr _zx_="02417_">
              <CButton _zx_="02418_" color="primary" @click="primaryModal = true" class="mr-1">
                Launch primary modal
              </CButton>
              <CButton _zx_="02419_" color="success" @click="successModal = true" class="mr-1">
                Launch success modal
              </CButton>
              <CButton _zx_="02420_" color="warning" @click="warningModal = true" class="mr-1">
                Launch warning modal
              </CButton>
              <CButton _zx_="02421_" color="danger" @click="dangerModal = true" class="mr-1">
                Launch danger modal
              </CButton>
              <CButton _zx_="02422_" color="info" @click="infoModal = true" class="mr-1">
                Launch info modal
              </CButton>
              <CButton _zx_="02423_" color="dark" @click="darkModal = true" class="mr-1">
                Launch dark modal
              </CButton>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
    <!-- Modal Component -->
    <CModal
      title="Modal title"
      :show.sync="myModal"
    >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </CModal>
    <CModal
      title="Modal title"
      size="lg"
      :show.sync="largeModal"
    >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </CModal>
    <CModal
      title="Modal title"
      size="sm"
      :show.sync="smallModal"
    >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </CModal>

    <CModal
      title="Modal title"
      :show.sync="primaryModal"
      color="primary"
    >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </CModal>
    <CModal
      title="Modal title"
      color="success"
      :show.sync="successModal"
    >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </CModal>
    <CModal
      title="Modal title"
      color="warning"
      :show.sync="warningModal"
    >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </CModal>
    <CModal
      title="Modal title"
      color="danger"
      :show.sync="dangerModal"
    >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </CModal>
    <CModal
      title="Modal title"
      color="info"
      :show.sync="infoModal"
    >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </CModal>
    <CModal
      :show.sync="darkModal"
      :no-close-on-backdrop="true"
      :centered="true"
      title="Modal title 2"
      size="lg"
      color="dark"
    >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      <template _zx_="02424_" #header>
        <h6 _zx_="02425_" class="modal-title">Custom smaller modal title</h6>
        <CButtonClose _zx_="02426_" @click="darkModal = false" class="text-white"/>
      </template>
      <template _zx_="02427_" #footer>
        <CButton _zx_="02428_" @click="darkModal = false" color="danger">Discard</CButton>
        <CButton _zx_="02429_" @click="darkModal = false" color="success">Accept</CButton>
      </template>
    </CModal>
  </div></template>

<script>
export default {
  name: 'Modals',
  data () {
    return {
      myModal: false,
      largeModal: false,
      smallModal: false,
      primaryModal: false,
      successModal: false,
      warningModal: false,
      dangerModal: false,
      infoModal: false,
      darkModal: false
    }
  }
}
</script>
