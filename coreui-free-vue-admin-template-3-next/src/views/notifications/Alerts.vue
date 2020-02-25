<template>
  <CRow _zx_="02338_">
    <CCol _zx_="02339_" col="12" md="6">
      <CCard _zx_="02340_">
        <CCardHeader _zx_="02341_">
          <CIcon _zx_="02342_" name="cil-justify-center"/>
          <strong _zx_="02343_"> Bootstrap Alert</strong>
          <div _zx_="02344_" class="card-header-actions">
            <a 
              href="https://coreui.io/vue/docs/components/alert" 
              class="card-header-action" 
              rel="noreferrer noopener" 
              target="_blank"
            >
              <small _zx_="02345_" class="text-muted">docs</small>
            </a>
          </div>
        </CCardHeader>
        <CCardBody _zx_="02346_">
          <div _zx_="02347_">
            <p _zx_="02348_"></p>
            <CAlert _zx_="02349_" show color="primary">Primary Alert</CAlert>
            <CAlert _zx_="02350_" show color="secondary">Secondary Alert</CAlert>
            <CAlert _zx_="02351_" show color="success">Success Alert</CAlert>
            <CAlert _zx_="02352_" show color="danger">Danger Alert</CAlert>
            <CAlert _zx_="02353_" show color="warning">Warning Alert</CAlert>
            <CAlert _zx_="02354_" show color="info">Info Alert</CAlert>
            <CAlert _zx_="02355_" show color="light">Light Alert</CAlert>
            <CAlert _zx_="02356_" show color="dark">Dark Alert</CAlert>
          </div>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol _zx_="02357_" col="12" md="6">
      <CCard _zx_="02358_">
        <CCardHeader _zx_="02359_">
          <CIcon _zx_="02360_" name="cil-justify-center"/> Alert
          <small _zx_="02361_"> use <code>.alert-link</code> to provide links</small>
        </CCardHeader>
        <CCardBody _zx_="02362_">
          <div _zx_="02363_">
            <CAlert _zx_="02364_" show color="primary">
              Primary Alert with <a _zx_="02365_" href="#" class="alert-link">an example link</a>.
            </CAlert>
            <CAlert _zx_="02366_" show color="secondary">
              Secondary Alert with <a _zx_="02367_" href="#" class="alert-link">an example link</a>.
            </CAlert>
            <CAlert _zx_="02368_" show color="success">
              Success Alert with <a _zx_="02369_" href="#" class="alert-link">an example link</a>.
            </CAlert>
            <CAlert _zx_="02370_" show color="danger">
              Danger Alert with <a _zx_="02371_" href="#" class="alert-link">an example link</a>.
            </CAlert>
            <CAlert _zx_="02372_" show color="warning">
              Warning Alert with <a _zx_="02373_" href="#" class="alert-link">an example link</a>.
            </CAlert>
            <CAlert _zx_="02374_" show color="info">
              Info Alert with <a _zx_="02375_" href="#" class="alert-link">an example link</a>.
            </CAlert>
            <CAlert _zx_="02376_" show color="light">
              Light Alert with <a _zx_="02377_" href="#" class="alert-link">an example link</a>.
            </CAlert>
            <CAlert _zx_="02378_" show color="dark">
              Dark Alert with
              <CLink _zx_="02379_" href="#" class="alert-link">an example link</CLink>
              .
            </CAlert>
          </div>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol _zx_="02380_" col="12" md="6">
      <CCard _zx_="02381_">
        <CCardHeader _zx_="02382_">
          <CIcon _zx_="02383_" name="cil-justify-center"/> Alerts <small>with additional content</small>
        </CCardHeader>
        <CCardBody _zx_="02384_">
          <CAlert _zx_="02385_" show color="success">
            <h4 _zx_="02386_" class="alert-heading">Well done!</h4>
            <p _zx_="02387_">
              Aww yeah, you successfully read this important alert message.
              This example text is going to run a bit longer so that you can see
              how spacing within an alert works with this kind of content.
            </p>
            <hr _zx_="02388_">
            <p _zx_="02389_" class="mb-0">
              Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
            </p>
          </CAlert>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol _zx_="02390_" col="12" md="6">
      <CCard _zx_="02391_">
        <CCardHeader _zx_="02392_">
          <CIcon _zx_="02393_" name="cil-justify-center"/> Alerts
          <small _zx_="02394_">dismissible</small>
        </CCardHeader>
        <CCardBody _zx_="02395_">
          <CAlert
            color="secondary"
            closeButton
            :show.sync="alert1"
          >
            Dismissible Alert!
          </CAlert>

          <CAlert
            color="secondary"
            :show.sync="alert2"
            class="alert-dismissible"
          >
            Dismissible Alert with custom button!
            <CButton
              class="position-absolute"
              color="secondary"
              style="right:10px;top: 50%;transform: translateY(-50%);"
              @click="alert2 = false"
            >
              Close
            </CButton>
          </CAlert>
          <CButton
            @click="showDismissibleAlerts"
            color="info"
            class="m-1"
          >
            Show dismissible alerts
          </CButton>
        </CCardBody>
      </CCard>
      <CCard _zx_="02396_">
        <CCardHeader _zx_="02397_">
          <CIcon _zx_="02398_" name="cil-justify-center"/> Alerts
          <small _zx_="02399_">auto dismissible</small>
        </CCardHeader>
        <CCardBody _zx_="02400_">
          <div _zx_="02401_">
            <CAlert
              :show.sync="dismissCountDown"
              closeButton
              color="warning"
              fade
            >
              Alert will dismiss after
              <strong _zx_="02402_">{{dismissCountDown}}</strong> seconds...
            </CAlert>

            <CAlert
              :show.sync="dismissCountDown"
              closeButton
              color="info"
            >
              Alert will dismiss after {{dismissCountDown}} seconds...
              <CProgress
                color="info"
                :max="dismissSecs"
                :value="dismissCountDown"
                height="4px"
              />
            </CAlert>
            <CButton _zx_="02403_" @click="showAlert" color="info" class="m-1">
              Show alert with timer
            </CButton>
          </div>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow></template>

<script>
export default {
  name: 'Alerts',
  data () {
    return {
      dismissSecs: 10,
      dismissCountDown: 10,
      alert1: true,
      alert2: true
    }
  },
  methods: {
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    },
    showDismissibleAlerts () {
      ['alert1', 'alert2', 'alert3'].forEach(alert => this[alert] = true)
    }
  }
}
</script>
