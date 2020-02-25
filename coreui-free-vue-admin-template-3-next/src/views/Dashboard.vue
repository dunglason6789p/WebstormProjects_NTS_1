<template>
  <div _zx_="02155_">
    <WidgetsDropdown _zx_="02156_"/>
    <CCard _zx_="02157_">
      <CCardBody _zx_="02158_">
        <CRow _zx_="02159_">
          <CCol _zx_="02160_" sm="5">
            <h4 _zx_="02161_" id="traffic" class="card-title mb-0">Traffic</h4>
            <div _zx_="02162_" class="small text-muted">November 2017</div>
          </CCol>
          <CCol _zx_="02163_" sm="7" class="d-none d-md-block">
            <CButton _zx_="02164_" color="primary" class="float-right">
              <CIcon _zx_="02165_" name="cil-cloud-download"/>
            </CButton>
            <CButtonGroup _zx_="02166_" class="float-right mr-3">
              <CButton
                color="outline-secondary"
                v-for="(value, key) in ['Day', 'Month', 'Year']"
                :key="key"
                class="mx-0"
                :pressed="value === selected ? true : false"
                @click="selected = value"
              >
                {{value}}
              </CButton>
            </CButtonGroup>
          </CCol>
        </CRow>
        <MainChartExample _zx_="02167_" style="height:300px;margin-top:40px;"/>
      </CCardBody>
      <CCardFooter _zx_="02168_">
        <CRow _zx_="02169_" class="text-center">
          <CCol _zx_="02170_" md sm="12" class="mb-sm-2 mb-0">
            <div _zx_="02171_" class="text-muted">Visits</div>
            <strong _zx_="02172_">29.703 Users (40%)</strong>
            <CProgress
              class="progress-xs mt-2"
              :precision="1"
              color="success"
              :value="40"
            />
          </CCol>
          <CCol _zx_="02173_" md sm="12" class="mb-sm-2 mb-0 d-md-down-none">
            <div _zx_="02812_" class="text-muted">Unique</div>
            <strong _zx_="02175_">24.093 Users (20%)</strong>
            <CProgress
              class="progress-xs mt-2"
              :precision="1"
              color="info"
              :value="20"
            />
          </CCol>
          <CCol _zx_="02176_" md sm="12" class="mb-sm-2 mb-0">
            <div _zx_="02177_" class="text-muted">Pageviews</div>
            <strong _zx_="02178_">78.706 Views (60%)</strong>
            <CProgress
              class="progress-xs mt-2"
              :precision="1"
              color="warning"
              :value="60"
            />
          </CCol>
          <CCol _zx_="02179_" md sm="12" class="mb-sm-2 mb-0">
            <div _zx_="02180_" class="text-muted">New Users</div>
            <strong _zx_="02181_">22.123 Users (80%)</strong>
            <CProgress
              class="progress-xs mt-2"
              :precision="1"
              color="danger"
              :value="80"
            />
          </CCol>
          <CCol _zx_="02182_" md sm="12" class="mb-sm-2 mb-0 d-md-down-none">
            <div _zx_="02183_" class="text-muted">Bounce Rate</div>
            <strong _zx_="02184_">Average Rate (40.15%)</strong>
            <CProgress
              class="progress-xs mt-2"
              :precision="1"
              :value="40"
            />
          </CCol>
        </CRow>
      </CCardFooter>
    </CCard>
    <WidgetsBrand _zx_="02185_"/>
    <CRow _zx_="02186_">
      <CCol _zx_="02187_" md="12">
        <CCard _zx_="02188_">
          <CCardHeader _zx_="02189_">
            Traffic &amp; Sales
          </CCardHeader>
          <CCardBody _zx_="02190_">
            <CRow _zx_="02191_">
              <CCol _zx_="02192_" sm="12" lg="6">
                <CRow _zx_="02193_">
                  <CCol _zx_="02194_" sm="6">
                    <CCallout _zx_="02195_" color="info">
                      <small _zx_="02196_" class="text-muted">New Clients</small><br>
                      <strong _zx_="02197_" class="h4">9,123</strong>
                    </CCallout>
                  </CCol>
                  <CCol _zx_="02198_" sm="6">
                    <CCallout _zx_="02199_" color="danger">
                      <small _zx_="02200_" class="text-muted">Recurring Clients</small><br>
                      <strong _zx_="02201_" class="h4">22,643</strong>
                    </CCallout>
                  </CCol>
                </CRow>
                <hr _zx_="02202_" class="mt-0">
                <div _zx_="02203_" class="progress-group mb-4">
                  <div _zx_="02204_" class="progress-group-prepend">
                    <span _zx_="02205_" class="progress-group-text">
                      Monday
                    </span>
                  </div>
                  <div _zx_="02206_" class="progress-group-bars">
                    <CProgress
                      class="progress-xs"
                      color="info"
                      :value="34"
                    />
                    <CProgress
                      class="progress-xs"
                      color="danger"
                      :value="78"
                    />
                  </div>
                </div>
                <div _zx_="02207_" class="progress-group mb-4">
                  <div _zx_="02208_" class="progress-group-prepend">
                    <span _zx_="02209_" class="progress-group-text">
                      Tuesday
                    </span>
                  </div>
                  <div _zx_="02210_" class="progress-group-bars">
                    <CProgress
                      class="progress-xs"
                      :value="56"
                      color="info"
                    />
                    <CProgress
                      class="progress-xs"
                      :value="94"
                      color="danger"
                    />
                  </div>
                </div>
                <div _zx_="02211_" class="progress-group mb-4">
                  <div _zx_="02212_" class="progress-group-prepend">
                    <span _zx_="02213_" class="progress-group-text">
                      Wednesday
                    </span>
                  </div>
                  <div _zx_="02214_" class="progress-group-bars">
                    <CProgress
                      class="progress-xs"
                      :value="12"
                      color="info"
                    />
                    <CProgress
                      class="progress-xs"
                      :value="67"
                      color="danger"
                    />
                  </div>
                </div>
                <div _zx_="02215_" class="progress-group mb-4">
                  <div _zx_="02216_" class="progress-group-prepend">
                    <span _zx_="02217_" class="progress-group-text">
                      Thursday
                    </span>
                  </div>
                  <div _zx_="02218_" class="progress-group-bars">
                    <CProgress
                      class="progress-xs"
                      :value="43"
                      color="info"
                    />
                    <CProgress
                      class="progress-xs"
                      :value="91"
                      color="danger"
                    />
                  </div>
                </div>
                <div _zx_="02219_" class="progress-group mb-4">
                  <div _zx_="02220_" class="progress-group-prepend">
                    <span _zx_="02221_" class="progress-group-text">
                      Friday
                    </span>
                  </div>
                  <div _zx_="02222_" class="progress-group-bars">
                    <CProgress
                      class="progress-xs"
                      :value="22"
                      color="info"
                    />
                    <CProgress
                      class="progress-xs"
                      :value="73"
                      color="danger"
                    />
                  </div>
                </div>
                <div _zx_="02223_" class="progress-group mb-4">
                  <div _zx_="02224_" class="progress-group-prepend">
                    <span _zx_="02225_" class="progress-group-text">
                      Saturday
                    </span>
                  </div>
                  <div _zx_="02226_" class="progress-group-bars">
                    <CProgress
                      class="progress-xs"
                      :value="53"
                      color="info"
                    />
                    <CProgress
                      class="progress-xs"
                      :value="82"
                      color="danger"
                    />
                  </div>
                </div>
                <div _zx_="02227_" class="progress-group mb-4">
                  <div _zx_="02228_" class="progress-group-prepend">
                    <span _zx_="02229_" class="progress-group-text">
                      Sunday
                    </span>
                  </div>
                  <div _zx_="02230_" class="progress-group-bars">
                    <CProgress
                      class="progress-xs"
                      :value="9"
                      color="info"
                    />
                    <CProgress
                      class="progress-xs"
                      :value="69"
                      color="danger"
                    />
                  </div>
                </div>
                <div _zx_="02231_" class="legend text-center">
                  <small _zx_="02232_">
                    <sup _zx_="02233_"><CBadge shape="pill" color="info">&nbsp;</CBadge></sup>
                    New clients
                    &nbsp;&nbsp;
                    <sup _zx_="02234_"><CBadge shape="pill" color="danger">&nbsp;</CBadge></sup>
                    Recurring clients
                  </small>
                </div>
              </CCol>
              <CCol _zx_="02235_" sm="12" lg="6">
                <CRow _zx_="02236_">
                  <CCol _zx_="02237_" sm="6">
                    <CCallout _zx_="02238_" color="warning">
                      <small _zx_="02239_" class="text-muted">Pageviews</small><br>
                      <strong _zx_="02240_" class="h4">78,623</strong>
                    </CCallout>
                  </CCol>
                  <CCol _zx_="02241_" sm="6">
                    <CCallout _zx_="02242_" color="success">
                      <small _zx_="02243_" class="text-muted">Organic</small><br>
                      <strong _zx_="02244_" class="h4">49,123</strong>
                    </CCallout>
                  </CCol>
                </CRow>
                <hr _zx_="02245_" class="mt-0">
                <ul _zx_="02246_" class="horizontal-bars type-2">
                  <div _zx_="02247_" class="progress-group">
                    <div _zx_="02248_" class="progress-group-header">
                      <CIcon _zx_="02249_" name="cil-user" class="progress-group-icon"/>
                      <span _zx_="02250_" class="title">Male</span>
                      <span _zx_="02251_" class="ml-auto font-weight-bold">43%</span>
                    </div>
                    <div _zx_="02252_" class="progress-group-bars">
                      <CProgress
                        class="progress-xs"
                        :value="43"
                        color="warning"
                      />
                    </div>
                  </div>
                  <div _zx_="02253_" class="progress-group mb-5">
                    <div _zx_="02254_" class="progress-group-header">
                      <CIcon _zx_="02255_" name="cil-user-female" class="progress-group-icon"/>
                      <span _zx_="02256_" class="title">Female</span>
                      <span _zx_="02257_" class="ml-auto font-weight-bold">37%</span>
                    </div>
                    <div _zx_="02258_" class="progress-group-bars">
                      <CProgress
                        class="progress-xs"
                        :value="37"
                        color="warning"
                      />
                    </div>
                  </div>
                  <div _zx_="02259_" class="progress-group">
                    <div _zx_="02260_" class="progress-group-header">
                      <CIcon _zx_="02261_" name="cil-globe-alt" class="progress-group-icon"/>
                      <span _zx_="02262_" class="title">Organic Search</span>
                      <span _zx_="02263_" class="ml-auto font-weight-bold">
                        191,235 <span _zx_="02264_" class="text-muted small">(56%)</span>
                      </span>
                    </div>
                    <div _zx_="02265_" class="progress-group-bars">
                      <CProgress
                        class="progress-xs"
                        :value="56"
                        color="success"
                      />
                    </div>
                  </div>
                  <div _zx_="02266_" class="progress-group">
                    <div _zx_="02267_" class="progress-group-header">
                      <CIcon
                        name="cib-facebook"
                        height="17"
                        class="progress-group-icon"
                      />
                      <span _zx_="02268_" class="title">Facebook</span>
                      <span _zx_="02269_" class="ml-auto font-weight-bold">
                        51,223 <span _zx_="02270_" class="text-muted small">(15%)</span>
                      </span>
                    </div>
                    <div _zx_="02271_" class="progress-group-bars">
                      <CProgress
                        class="progress-xs"
                        :value="15"
                        color="success"
                      />
                    </div>
                  </div>
                  <div _zx_="02272_" class="progress-group">
                    <div _zx_="02273_" class="progress-group-header">
                      <CIcon
                        name="cib-twitter"
                        height="17"
                        class="progress-group-icon"
                      />
                      <span _zx_="02274_" class="title">Twitter</span>
                      <span _zx_="02275_" class="ml-auto font-weight-bold">
                        37,564 <span _zx_="02276_" class="text-muted small">(11%)</span>
                      </span>
                    </div>
                    <div _zx_="02277_" class="progress-group-bars">
                      <CProgress
                        class="progress-xs"
                        :value="11"
                        color="success"
                      />
                    </div>
                  </div>
                  <div _zx_="02278_" class="progress-group">
                    <div _zx_="02279_" class="progress-group-header">
                      <CIcon
                        name="cib-linkedin"
                        height="17"
                        class="progress-group-icon"
                      />
                      <span _zx_="02280_" class="title">LinkedIn</span>
                      <span _zx_="02281_" class="ml-auto font-weight-bold">
                        27,319 <span _zx_="02282_" class="text-muted small">&nbsp;(8%)</span>
                      </span>
                    </div>
                    <div _zx_="02283_" class="progress-group-bars">
                      <CProgress
                        class="progress-xs"
                        :value="8"
                        color="success"
                      />
                    </div>
                  </div>
                  <div _zx_="02284_" class="divider text-center">
                    <CButton _zx_="02285_" color="link" size="sm" class="text-muted">
                      <CIcon _zx_="02286_" name="cil-options"/>
                    </CButton>
                  </div>
                </ul>
              </CCol>
            </CRow>
            <br _zx_="02287_"/>
            <CDataTable
              class="mb-0 table-outline"
              hover
              :items="tableItems"
              :fields="tableFields"
              head-color="light"
              no-sorting
            >
              <td _zx_="02288_" slot="avatar" class="text-center" slot-scope="{item}">
                <div _zx_="02289_" class="c-avatar">
                  <img _zx_="02290_" :src="item.avatar.url" class="c-avatar-img" alt="">
                  <span
                    class="c-avatar-status"
                    :class="`bg-${item.avatar.status || 'secondary'}`"
                  ></span>
                </div>
              </td>
              <td _zx_="02291_" slot="user" slot-scope="{item}">
                <div _zx_="02292_">{{item.user.name}}</div>
                <div _zx_="02293_" class="small text-muted">
                  <span _zx_="02294_">
                    <template _zx_="02295_" v-if="item.user.new">New</template>
                    <template _zx_="02296_" v-else>Recurring</template>
                  </span> | Registered: {{item.user.registered}}
                </div>
              </td>
              <td
                slot="country"
                slot-scope="{item}"
                class="text-center"
              >
                <CIcon
                  :name="item.country.flag"
                  height="25"
                />
              </td>
              <td _zx_="02297_" slot="usage" slot-scope="{item}">
                <div _zx_="02298_" class="clearfix">
                  <div _zx_="02299_" class="float-left">
                    <strong _zx_="02300_">{{item.usage.value}}%</strong>
                  </div>
                  <div _zx_="02301_" class="float-right">
                    <small _zx_="02302_" class="text-muted">{{item.usage.period}}</small>
                  </div>
                </div>
                <CProgress
                  class="progress-xs"
                  v-model="item.usage.value"
                  :color="color(item.usage.value)"
                />
              </td>
              <td
                slot="payment"
                slot-scope="{item}"
                class="text-center"
              >
                <CIcon
                  :name="item.payment.icon"
                  height="25"
                />
              </td>
              <td _zx_="02303_" slot="activity" slot-scope="{item}">
                <div _zx_="02304_" class="small text-muted">Last login</div>
                <strong _zx_="02305_">{{item.activity}}</strong>
              </td>
            </CDataTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div></template>

<script>
import MainChartExample from './charts/MainChartExample'
import WidgetsDropdown from './widgets/WidgetsDropdown'
import WidgetsBrand from './widgets/WidgetsBrand'

export default {
  name: 'Dashboard',
  components: {
    MainChartExample,
    WidgetsDropdown,
    WidgetsBrand
  },
  data () {
    return {
      selected: 'Month',
      tableItems: [
        {
          avatar: { url: 'img/avatars/1.jpg', status: 'success' },
          user: { name: 'Yiorgos Avraamu', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'USA', flag: 'cif-us' },
          usage: { value: 50, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Mastercard', icon: 'cib-cc-mastercard' },
          activity: '10 sec ago'
        },
        {
          avatar: { url: 'img/avatars/2.jpg', status: 'danger' },
          user: { name: 'Avram Tarasios', new: false, registered: 'Jan 1, 2015' },
          country: { name: 'Brazil', flag: 'cif-br' },
          usage: { value: 22, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Visa', icon: 'cib-cc-visa' },
          activity: '5 minutes ago'
        },
        {
          avatar: { url: 'img/avatars/3.jpg', status: 'warning' },
          user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'India', flag: 'cif-in' },
          usage: { value: 74, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Stripe', icon: 'cib-stripe' },
          activity: '1 hour ago'
        },
        {
          avatar: { url: 'img/avatars/4.jpg', status: '' },
          user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'France', flag: 'cif-fr' },
          usage: { value: 98, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'PayPal', icon: 'cib-paypal' },
          activity: 'Last month'
        },
        {
          avatar: { url: 'img/avatars/5.jpg', status: 'success' },
          user: { name: 'Agapetus Tadeáš', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'Spain', flag: 'cif-es' },
          usage: { value: 22, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Google Wallet', icon: 'cib-google-pay' },
          activity: 'Last week'
        },
        {
          avatar: { url: 'img/avatars/6.jpg', status: 'danger' },
          user: { name: 'Friderik Dávid', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'Poland', flag: 'cif-pl' },
          usage: { value: 43, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Amex', icon: 'cib-cc-amex' },
          activity: 'Last week'
        }
      ],
      tableFields: [
        { key: 'avatar', label: '', _classes: 'text-center' },
        { key: 'user' },
        { key: 'country', _classes: 'text-center' },
        { key: 'usage' },
        { key: 'payment', label: 'Payment method', _classes: 'text-center' },
        { key: 'activity' },
      ]
    }
  },
  methods: {
    color (value) {
      let $color
      if (value <= 25) {
        $color = 'info'
      } else if (value > 25 && value <= 50) {
        $color = 'success'
      } else if (value > 50 && value <= 75) {
        $color = 'warning'
      } else if (value > 75 && value <= 100) {
        $color = 'danger'
      }
      return $color
    }
  }
}
</script>
