<template>
  <CRow _zx_="02773_">
    <CCol _zx_="02774_" sm="6" lg="3">
      <CWidgetDropdown _zx_="02775_" color="primary" header="9.824" text="Members online">
        <template _zx_="02776_" #default>
          <CDropdown
            color="transparent p-0"
            placement="bottom-end"
          >
            <template _zx_="02777_" #toggler-content>
              <CIcon _zx_="02778_" name="cil-settings"/>
            </template>
            <CDropdownItem _zx_="02779_">Action</CDropdownItem>
            <CDropdownItem _zx_="02780_">Another action</CDropdownItem>
            <CDropdownItem _zx_="02781_">Something else here...</CDropdownItem>
            <CDropdownItem _zx_="02782_" disabled>Disabled action</CDropdownItem>
          </CDropdown>
        </template>
        <template _zx_="02783_" #footer>
          <CChartLineSimple
            pointed
            class="mt-3 mx-3"
            style="height:70px"
            :data-points="[65, 59, 84, 84, 51, 55, 40]"
            point-hover-background-color="primary"
            label="Members"
            labels="months"
          />
        </template>
      </CWidgetDropdown>
    </CCol>
    <CCol _zx_="02784_" sm="6" lg="3">
      <CWidgetDropdown _zx_="02785_" color="info" header="9.823" text="Members online">
        <template _zx_="02786_" #default>
          <CDropdown
            color="transparent p-0"
            placement="bottom-end"
            :caret="false"
          >
            <template _zx_="02787_" #toggler-content>
              <CIcon _zx_="02788_" name="cil-location-pin"/>
            </template>
            <CDropdownItem _zx_="02789_">Action</CDropdownItem>
            <CDropdownItem _zx_="02790_">Another action</CDropdownItem>
            <CDropdownItem _zx_="02791_">Something else here...</CDropdownItem>
            <CDropdownItem _zx_="02792_" disabled>Disabled action</CDropdownItem>
          </CDropdown>
        </template>
        <template _zx_="02793_" #footer>
          <CChartLineSimple
            pointed
            class="mt-3 mx-3"
            style="height:70px"
            :data-points="[1, 18, 9, 17, 34, 22, 11]"
            point-hover-background-color="info"
            :options="{ elements: { line: { tension: 0.00001 }}}"
            label="Members"
            labels="months"
          />
        </template>
      </CWidgetDropdown>
    </CCol>
    <CCol _zx_="02794_" sm="6" lg="3">
      <CWidgetDropdown
        color="warning"
        header="9.823"
        text="Members online"
      >
        <template _zx_="02795_" #default>
          <CDropdown
            color="transparent p-0"
            placement="bottom-end"
          >
            <template _zx_="02796_" #toggler-content>
              <CIcon _zx_="02797_" name="cil-settings"/>
            </template>
            <CDropdownItem _zx_="02798_">Action</CDropdownItem>
            <CDropdownItem _zx_="02799_">Another action</CDropdownItem>
            <CDropdownItem _zx_="02800_">Something else here...</CDropdownItem>
            <CDropdownItem _zx_="02801_" disabled>Disabled action</CDropdownItem>
          </CDropdown>
        </template>
        <template _zx_="02802_" #footer>
          <CChartLineSimple
            class="mt-3"
            style="height:70px"
            background-color="rgba(255,255,255,.2)"
            :data-points="[78, 81, 80, 45, 34, 12, 40]"
            :options="{ elements: { line: { borderWidth: 2.5 }}}"
            point-hover-background-color="warning"
            label="Members"
            labels="months"
          />
        </template>
      </CWidgetDropdown>
    </CCol>
    <CCol _zx_="02803_" sm="6" lg="3">
      <CWidgetDropdown
        color="danger"
        header="9.823"
        text="Members online"
      >
        <template _zx_="02804_" #default>
          <CDropdown
            color="transparent p-0"
            placement="bottom-end"
          >
            <template _zx_="02805_" #toggler-content>
             <CIcon _zx_="02806_" name="cil-settings"/>
            </template>
            <CDropdownItem _zx_="02807_">Action</CDropdownItem>
            <CDropdownItem _zx_="02808_">Another action</CDropdownItem>
            <CDropdownItem _zx_="02809_">Something else here...</CDropdownItem>
            <CDropdownItem _zx_="02810_" disabled>Disabled action</CDropdownItem>
          </CDropdown>
        </template>
        <template _zx_="02811_" #footer>
          <CChartBarSimple
            class="mt-3 mx-3"
            style="height:70px"
            background-color="rgb(250, 152, 152)"
            label="Members"
            labels="months"
          />
        </template>
      </CWidgetDropdown>
    </CCol>
  </CRow></template>

<script>
import { CChartLineSimple, CChartBarSimple } from '../charts/index.js'

export default {
  name: 'WidgetsDropdown',
  components: { CChartLineSimple, CChartBarSimple }
}
</script>
