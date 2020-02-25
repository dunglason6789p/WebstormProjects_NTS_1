<template>
  <div _zx_="01041_">
    <CRow _zx_="01042_">
      <CCol _zx_="01043_" xs="12" md="6">
        <CCard _zx_="01044_" v-if="true">
          <CCardHeader _zx_="01045_">
            Radio switches
            <CBadge _zx_="01046_" :color="radio" class="mr-auto">{{radio}}</CBadge>
            <div _zx_="01047_" class="card-header-actions">
              <a 
                href="https://coreui.io/vue/docs/components/switch" 
                class="card-header-action" 
                rel="noreferrer noopener" 
                target="_blank"
              >
                <small _zx_="01048_" class="text-muted">docs</small>
              </a>
            </div>
          </CCardHeader>
          <CCardBody _zx_="01049_">
            <CSwitch
              v-for="(color, key) in colors"
              :key="'radio' + key"
              class="mx-1"
              :color="color"
             variant="3d"
              v-bind="labelIcon"
              type="radio"
              name="radio"
              :checked="key === 2"
              @update:checked="(val) => val ? radio = color : null"
              :value="color"
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    <CRow _zx_="01050_">
      <CCol _zx_="01051_" xs="12" md="6">
        <CCard _zx_="01052_">
          <CCardHeader _zx_="01053_">
            Switch default
            <CBadge _zx_="01054_" color="primary">{{checker}}</CBadge>
          </CCardHeader>
          <CCardBody _zx_="01055_">
            <CSwitch
              class="mx-1"
              color="primary"
              name="switch1"
              :checked.sync="checker"
            />
            <CSwitch
              class="mx-1"
              :color="color"
              checked
              :key="key"
              v-for="(color, key) in ['secondary', 'success','warning','info','danger','light','dark']"
            />
            <CSwitch _zx_="01056_" class="mx-1" color="primary" disabled />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol _zx_="01057_" xs="12" md="6">
        <CCard _zx_="01058_">
          <CCardHeader _zx_="01059_">
            Switch pills
          </CCardHeader>
          <CCardBody _zx_="01060_">
            <CSwitch _zx_="01061_" class="mx-1" color="primary" checked shape="pill"/>
            <CSwitch _zx_="01062_" class="mx-1" color="secondary" checked shape="pill" />
            <CSwitch _zx_="01063_" class="mx-1" color="success" checked shape="pill" />
            <CSwitch _zx_="01064_" class="mx-1" color="warning" checked shape="pill" />
            <CSwitch _zx_="01065_" class="mx-1" color="info" checked shape="pill" />
            <CSwitch _zx_="01066_" class="mx-1" color="danger" checked shape="pill" />
            <CSwitch _zx_="01067_" class="mx-1" color="light" checked shape="pill" />
            <CSwitch _zx_="01068_" class="mx-1" color="dark" checked shape="pill" />
            <CSwitch _zx_="01069_" class="mx-1" color="primary" disabled shape="pill" />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol _zx_="01070_" xs="12" md="6">
        <CCard _zx_="01071_">
          <CCardHeader _zx_="01072_">
            3d Switch
          </CCardHeader>
          <CCardBody _zx_="01073_">
            <CSwitch _zx_="01074_" class="mx-1" color="primary" checked variant="3d" />
            <CSwitch _zx_="01075_" class="mx-1" color="secondary" checked variant="3d" />
            <CSwitch _zx_="01076_" class="mx-1" color="success" checked variant="3d" />
            <CSwitch _zx_="01077_" class="mx-1" color="warning" checked variant="3d" />
            <CSwitch _zx_="01078_" class="mx-1" color="info" checked variant="3d" />
            <CSwitch _zx_="01079_" class="mx-1" color="danger" checked variant="3d" />
            <CSwitch _zx_="01080_" class="mx-1" color="light" checked variant="3d" />
            <CSwitch _zx_="01081_" class="mx-1" color="dark" checked variant="3d" />
            <CSwitch _zx_="01082_" class="mx-1" color="primary" disabled variant="3d" />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol _zx_="01083_" xs="12" md="6">
        <CCard _zx_="01084_">
          <CCardHeader _zx_="01085_">
            3d Switch <small _zx_="01086_"><code>disabled</code></small>
          </CCardHeader>
          <CCardBody _zx_="01087_">
            <CSwitch _zx_="01088_" class="mx-1" color="primary" checked variant="3d" disabled />
            <CSwitch _zx_="01089_" class="mx-1" color="secondary" checked variant="3d" disabled />
            <CSwitch _zx_="01090_" class="mx-1" color="success" checked variant="3d" disabled />
            <CSwitch _zx_="01091_" class="mx-1" color="warning" checked variant="3d" disabled />
            <CSwitch _zx_="01092_" class="mx-1" color="info" checked variant="3d" disabled />
            <CSwitch _zx_="01093_" class="mx-1" color="danger" checked variant="3d" disabled />
            <CSwitch _zx_="01094_" class="mx-1" color="light" checked variant="3d" disabled />
            <CSwitch _zx_="01095_" class="mx-1" color="dark" checked variant="3d" disabled />
            <CSwitch _zx_="01096_" class="mx-1" color="primary" disabled variant="3d" />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol _zx_="01097_" xs="12" md="6">
        <CCard _zx_="01098_">
          <CCardHeader _zx_="01099_">
            3d Switch <small _zx_="01100_"><code>label</code></small>
          </CCardHeader>
          <CCardBody _zx_="01101_">
            <CSwitch _zx_="01102_" class="mx-1" color="primary" variant="3d" shape="square" checked v-bind="labelIcon"/>
            <CSwitch _zx_="01103_" class="mx-1" color="secondary" checked variant="3d" v-bind="labelIcon" />
            <CSwitch _zx_="01104_" class="mx-1" color="success" checked variant="3d" v-bind="labelIcon" />
            <CSwitch _zx_="01105_" class="mx-1" color="warning" checked variant="3d" v-bind="labelIcon" />
            <CSwitch _zx_="01106_" class="mx-1" color="info" checked variant="3d" v-bind="labelIcon" />
            <CSwitch _zx_="01107_" class="mx-1" color="danger" checked variant="3d" v-bind="labelIcon" />
            <CSwitch _zx_="01108_" class="mx-1" color="light" checked variant="3d" v-bind="labelIcon" />
            <CSwitch _zx_="01109_" class="mx-1" color="dark" checked variant="3d" v-bind="labelIcon" />
            <CSwitch _zx_="01110_" class="mx-1" color="primary" disabled variant="3d" v-bind="labelIcon" />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol _zx_="01111_" xs="12" md="6">
        <CCard _zx_="01112_">
          <CCardHeader _zx_="01113_">
            Switch <small _zx_="01114_"><code>variant="outline"</code></small>
          </CCardHeader>
          <CCardBody _zx_="01115_">
            <CSwitch _zx_="01116_" class="mx-1" color="primary" checked variant="outline" />
            <CSwitch _zx_="01117_" class="mx-1" color="secondary" checked variant="outline" />
            <CSwitch _zx_="01118_" class="mx-1" color="success" checked variant="outline" />
            <CSwitch _zx_="01119_" class="mx-1" color="warning" checked variant="outline" />
            <CSwitch _zx_="01120_" class="mx-1" color="info" checked variant="outline" />
            <CSwitch _zx_="01121_" class="mx-1" color="danger" checked variant="outline" />
            <CSwitch _zx_="01122_" class="mx-1" color="light" checked variant="outline" />
            <CSwitch _zx_="01123_" class="mx-1" color="dark" checked variant="outline" />
            <CSwitch _zx_="01124_" class="mx-1" color="primary" variant="outline" disabled />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol _zx_="01125_" xs="12" md="6">
        <CCard _zx_="01126_">
          <CCardHeader _zx_="01127_">
            Switch <small _zx_="01128_"><code>variant="outline"  shape="pill"</code></small>
          </CCardHeader>
          <CCardBody _zx_="01129_">
            <CSwitch _zx_="01130_" class="mx-1" color="primary" checked variant="outline" shape="pill"/>
            <CSwitch _zx_="01131_" class="mx-1" color="secondary" checked variant="outline" shape="pill" />
            <CSwitch _zx_="01132_" class="mx-1" color="success" checked variant="outline" shape="pill" />
            <CSwitch _zx_="01133_" class="mx-1" color="warning" checked variant="outline" shape="pill" />
            <CSwitch _zx_="01134_" class="mx-1" color="info" checked variant="outline" shape="pill" />
            <CSwitch _zx_="01135_" class="mx-1" color="danger" checked variant="outline" shape="pill" />
            <CSwitch _zx_="01136_" class="mx-1" color="light" checked variant="outline" shape="pill" />
            <CSwitch _zx_="01137_" class="mx-1" color="dark" checked variant="outline" shape="pill" />
            <CSwitch _zx_="01138_" class="mx-1" color="primary" variant="outline" shape="pill" disabled />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol _zx_="01139_" xs="12" md="6">
        <CCard _zx_="01140_">
          <CCardHeader _zx_="01141_">
            Switch <small _zx_="01142_"><code>variant="opposite"</code></small>
          </CCardHeader>
          <CCardBody _zx_="01143_">
            <CSwitch _zx_="01144_" class="mx-1" color="primary" checked variant="opposite" />
            <CSwitch _zx_="01145_" class="mx-1" color="secondary" checked variant="opposite" />
            <CSwitch _zx_="01146_" class="mx-1" color="success" checked variant="opposite" />
            <CSwitch _zx_="01147_" class="mx-1" color="warning" checked variant="opposite" />
            <CSwitch _zx_="01148_" class="mx-1" color="info" checked variant="opposite" />
            <CSwitch _zx_="01149_" class="mx-1" color="danger" checked variant="opposite" />
            <CSwitch _zx_="01150_" class="mx-1" color="light" checked variant="opposite" />
            <CSwitch _zx_="01151_" class="mx-1" color="dark" checked variant="opposite" />
            <CSwitch _zx_="01152_" class="mx-1" color="primary" variant="opposite" disabled />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol _zx_="01153_" xs="12" md="6">
        <CCard _zx_="01154_">
          <CCardHeader _zx_="01155_">
            Switch <small _zx_="01156_"><code>variant="opposite"  shape="pill"</code></small>
          </CCardHeader>
          <CCardBody _zx_="01157_">
            <CSwitch _zx_="01158_" class="mx-1" color="primary" checked variant="opposite" shape="pill"/>
            <CSwitch _zx_="01159_" class="mx-1" color="secondary" checked variant="opposite" shape="pill" />
            <CSwitch _zx_="01160_" class="mx-1" color="success" checked variant="opposite" shape="pill" />
            <CSwitch _zx_="01161_" class="mx-1" color="warning" checked variant="opposite" shape="pill" />
            <CSwitch _zx_="01162_" class="mx-1" color="info" checked variant="opposite" shape="pill" />
            <CSwitch _zx_="01163_" class="mx-1" color="danger" checked variant="opposite" shape="pill" />
            <CSwitch _zx_="01164_" class="mx-1" color="light" checked variant="opposite" shape="pill" />
            <CSwitch _zx_="01165_" class="mx-1" color="dark" checked variant="opposite" shape="pill" />
            <CSwitch _zx_="01166_" class="mx-1" color="primary" variant="opposite" shape="pill" disabled />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol _zx_="01167_" xs="12" md="6">
        <CCard _zx_="01168_">
          <CCardHeader _zx_="01169_">
            Switch <small _zx_="01170_"><code>label</code></small>
          </CCardHeader>
          <CCardBody _zx_="01171_">
            <CSwitch _zx_="01172_" class="mx-1" color="primary" checked v-bind="labelIcon"/>
            <CSwitch _zx_="01173_" class="mx-1" color="secondary" checked v-bind="labelIcon" />
            <CSwitch _zx_="01174_" class="mx-1" color="success" checked v-bind="labelIcon" />
            <CSwitch _zx_="01175_" class="mx-1" color="warning" checked v-bind="labelIcon" />
            <CSwitch _zx_="01176_" class="mx-1" color="info" checked v-bind="labelIcon" />
            <CSwitch _zx_="01177_" class="mx-1" color="danger" checked v-bind="labelIcon" />
            <CSwitch _zx_="01178_" class="mx-1" color="light" checked v-bind="labelIcon" />
            <CSwitch _zx_="01179_" class="mx-1" color="dark" checked v-bind="labelIcon" />
            <CSwitch _zx_="01180_" class="mx-1" color="primary" disabled v-bind="labelIcon" />
          </CCardBody>
        </CCard>shape
      </CCol>
      <CCol _zx_="01181_" xs="12" md="6">
        <CCard _zx_="01182_">
          <CCardHeader _zx_="01183_">
            Switch <small _zx_="01184_"><code>label shape="pill"</code></small>
          </CCardHeader>
          <CCardBody _zx_="01185_">
            <CSwitch _zx_="01186_" class="mx-1" color="primary" checked shape="pill" v-bind="labelIcon" />
            <CSwitch _zx_="01187_" class="mx-1" color="secondary" checked shape="pill" v-bind="labelIcon" />
            <CSwitch _zx_="01188_" class="mx-1" color="success" checked shape="pill" v-bind="labelIcon" />
            <CSwitch _zx_="01189_" class="mx-1" color="warning" checked shape="pill" v-bind="labelIcon" />
            <CSwitch _zx_="01190_" class="mx-1" color="info" checked shape="pill" v-bind="labelIcon" />
            <CSwitch _zx_="01191_" class="mx-1" color="danger" checked shape="pill" v-bind="labelIcon" />
            <CSwitch _zx_="01192_" class="mx-1" color="light" checked shape="pill" v-bind="labelIcon" />
            <CSwitch _zx_="01193_" class="mx-1" color="dark" checked shape="pill" v-bind="labelIcon" />
            <CSwitch _zx_="01194_" class="mx-1" color="primary" shape="pill" disabled v-bind="labelIcon" />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol _zx_="01195_" xs="12" md="6">
        <CCard _zx_="01196_">
          <CCardHeader _zx_="01197_">
            Switch <small _zx_="01198_"><code>label variant="outline"</code></small>
          </CCardHeader>
          <CCardBody _zx_="01199_">
            <CSwitch _zx_="01200_" class="mx-1" color="primary" checked variant="outline" v-bind="labelIcon" />
            <CSwitch _zx_="01201_" class="mx-1" color="secondary" checked variant="outline" v-bind="labelIcon" />
            <CSwitch _zx_="01202_" class="mx-1" color="success" checked variant="outline" v-bind="labelIcon" />
            <CSwitch _zx_="01203_" class="mx-1" color="warning" checked variant="outline" v-bind="labelIcon" />
            <CSwitch _zx_="01204_" class="mx-1" color="info" checked variant="outline" v-bind="labelIcon" />
            <CSwitch _zx_="01205_" class="mx-1" color="danger" checked variant="outline" v-bind="labelIcon" />
            <CSwitch _zx_="01206_" class="mx-1" color="light" checked variant="outline" v-bind="labelIcon" />
            <CSwitch _zx_="01207_" class="mx-1" color="dark" checked variant="outline" v-bind="labelIcon" />
            <CSwitch _zx_="01208_" class="mx-1" color="primary" variant="outline" disabled v-bind="labelIcon" />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol _zx_="01209_" xs="12" md="6">
        <CCard _zx_="01210_">
          <CCardHeader _zx_="01211_">
            Switch <small _zx_="01212_"><code>label variant="outline"</code></small>
          </CCardHeader>
          <CCardBody _zx_="01213_">
            <CSwitch _zx_="01214_" class="mx-1" color="primary" checked variant="outline" shape="pill" v-bind="labelIcon" />
            <CSwitch _zx_="01215_" class="mx-1" color="secondary" checked variant="outline" shape="pill" v-bind="labelIcon" />
            <CSwitch _zx_="01216_" class="mx-1" color="success" checked variant="outline" shape="pill" v-bind="labelIcon" />
            <CSwitch _zx_="01217_" class="mx-1" color="warning" checked variant="outline" shape="pill" v-bind="labelIcon" />
            <CSwitch _zx_="01218_" class="mx-1" color="info" checked variant="outline" shape="pill" v-bind="labelIcon" />
            <CSwitch _zx_="01219_" class="mx-1" color="danger" checked variant="outline" shape="pill" v-bind="labelIcon" />
            <CSwitch _zx_="01220_" class="mx-1" color="light" checked variant="outline" shape="pill" v-bind="labelIcon" />
            <CSwitch _zx_="01221_" class="mx-1" color="dark" checked variant="outline" shape="pill" v-bind="labelIcon" />
            <CSwitch _zx_="01222_" class="mx-1" color="primary" variant="outline" shape="pill" disabled v-bind="labelIcon" />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol _zx_="01223_" xs="12" md="6">
        <CCard _zx_="01224_">
          <CCardHeader _zx_="01225_">
            Switch <small _zx_="01226_"><code>label variant="opposite"</code></small>
          </CCardHeader>
          <CCardBody _zx_="01227_">
            <CSwitch _zx_="01228_" class="mx-1" color="primary" checked variant="opposite" v-bind="labelIcon" />
            <CSwitch _zx_="01229_" class="mx-1" color="secondary" checked variant="opposite" v-bind="labelIcon" />
            <CSwitch _zx_="01230_" class="mx-1" color="success" checked variant="opposite" v-bind="labelIcon" />
            <CSwitch _zx_="01231_" class="mx-1" color="warning" checked variant="opposite" v-bind="labelIcon" />
            <CSwitch _zx_="01232_" class="mx-1" color="info" checked variant="opposite" v-bind="labelIcon" />
            <CSwitch _zx_="01233_" class="mx-1" color="danger" checked variant="opposite" v-bind="labelIcon" />
            <CSwitch _zx_="01234_" class="mx-1" color="light" checked variant="opposite" v-bind="labelIcon" />
            <CSwitch _zx_="01235_" class="mx-1" color="dark" checked variant="opposite" v-bind="labelIcon" />
            <CSwitch _zx_="01236_" class="mx-1" color="primary" variant="opposite" disabled v-bind="labelIcon" />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol _zx_="01237_" xs="12" md="6">
        <CCard _zx_="01238_">
          <CCardHeader _zx_="01239_">
            Switch <small _zx_="01240_"><code>label variant="opposite"</code></small>
          </CCardHeader>
          <CCardBody _zx_="01241_">
            <CSwitch _zx_="01242_" class="mx-1" color="primary" checked variant="opposite" shape="pill" v-bind="labelTxt" />
            <CSwitch _zx_="01243_" class="mx-1" color="secondary" checked variant="opposite" shape="pill" v-bind="labelIcon" />
            <CSwitch _zx_="01244_" class="mx-1" color="success" checked variant="opposite" shape="pill" v-bind="labelIcon" />
            <CSwitch _zx_="01245_" class="mx-1" color="warning" checked variant="opposite" shape="pill" v-bind="labelIcon" />
            <CSwitch _zx_="01246_" class="mx-1" color="info" checked variant="opposite" shape="pill" v-bind="labelIcon" />
            <CSwitch _zx_="01247_" class="mx-1" color="danger" checked variant="opposite" shape="pill" v-bind="labelIcon" />
            <CSwitch _zx_="01248_" class="mx-1" color="light" checked variant="opposite" shape="pill" v-bind="labelIcon" />
            <CSwitch _zx_="01249_" class="mx-1" color="dark" checked variant="opposite" shape="pill" v-bind="labelIcon" />
            <CSwitch _zx_="01250_" class="mx-1" color="primary" variant="opposite" shape="pill" disabled v-bind="labelIcon" />
          </CCardBody>
        </CCard>
      </CCol>

      <CCol _zx_="01251_" md="12">
        <CCard _zx_="01252_">
          <CCardHeader _zx_="01253_">
            Sizes
          </CCardHeader>
          <CCardBody _zx_="01254_" class="p-0">
            <CDataTable
              hover
              striped
              class="table-align-middle mb-0"
              :items="items"
              :fields="fields"
              no-sorting
            >
              <template _zx_="01255_" #example="{item}">
                <td _zx_="01256_">
                  <CSwitch
                    :variant="item.example.variant"
                    :color="item.example.color"
                    :size="item.example.size"
                    :checked="item.example.checked"
                  />
                </td>
              </template>
              <template _zx_="01257_" #size_prop="{item}">
                <td _zx_="01258_">
                  <span _zx_="01259_" v-html="item.size_prop"></span>
                </td>
              </template>
            </CDataTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div></template>

<script>
export default {
  name: 'Switches',
  data () {
    return {
      colors: [
        'primary','secondary','warning','success','info','danger','light','dark'
      ],
      fields: [
        { key: 'size' },
        { key: 'example' },
        { key: 'size_prop', label: 'Size prop' }
      ],
      items: [
        {
          size: 'Large', 
          example: {  variant: '3d', color: 'primary', size: 'lg', checked: true }, 
          size_prop: 'Add following prop <code>size="lg"</code>'
        },
        {
          size: 'Normal', 
          example: {  variant: '3d', color: 'primary', size: '', checked: true }, 
          size_prop: '-'
        },
        {
          size: 'Small', 
          example: { variant: '3d', color: 'primary', size: 'sm', checked: true}, 
          size_prop: 'Add following prop <code>size="sm"</code>'
        }
      ],
      checker: true,
      radio: 'warning',
      labelIcon: {
        labelOn: '\u2713',
        labelOff: '\u2715'
      },
      labelTxt: {
        labelOn: 'yes',
        labelOff: 'no'
      }
    }
  }
}
</script>
