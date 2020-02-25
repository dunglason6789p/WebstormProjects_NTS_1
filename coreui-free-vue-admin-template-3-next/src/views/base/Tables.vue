<template>
  <div _zx_="01268_">
    <CRow _zx_="01269_">
      <CCol _zx_="01270_" lg="6">
        <CTableWrapper _zx_="01271_" :items="getShuffledUsersData()">
          <template _zx_="01272_" #header>
            <CIcon _zx_="01273_" name="cil-grid"/> Simple Table
            <div _zx_="01274_" class="card-header-actions">
              <a 
                href="https://coreui.io/vue/docs/components/nav" 
                class="card-header-action" 
                rel="noreferrer noopener" 
                target="_blank"
              >
                <small _zx_="01275_" class="text-muted">docs</small>
              </a>
            </div>
          </template>
        </CTableWrapper>
      </CCol>

      <CCol _zx_="01276_" lg="6">
        <CTableWrapper
          :items="getShuffledUsersData()"
          striped
          caption="Striped Table"
        />
      </CCol>
    </CRow>

    <CRow _zx_="01277_">
      <CCol _zx_="01278_" lg="6">
        <CTableWrapper
          :items="getShuffledUsersData()"
          small
          caption="Condensed Table"
        />
      </CCol>

      <CCol _zx_="01279_" lg="6">
        <CTableWrapper
          :items="getShuffledUsersData()"
          fixed
          bordered
          caption="Bordered Table"
        />
      </CCol>
    </CRow>

    <CRow _zx_="01280_">
      <CCol _zx_="01281_" sm="12">
        <CTableWrapper
          :items="getShuffledUsersData()"
          hover
          striped
          bordered
          small
          fixed
          caption="Combined All Table"
        />
      </CCol>
    </CRow>

    <CRow _zx_="01282_">
      <CCol _zx_="01283_" sm="12">
        <CTableWrapper
          :items="getShuffledUsersData()"
          hover
          striped
          bordered
          small
          fixed
          dark
          caption="Combined All dark Table"
        />
      </CCol>
    </CRow>
  </div></template>

<script>
import CTableWrapper from './Table.vue'
import usersData from '../users/UsersData'

export default {
  name: 'Tables',
  components: { CTableWrapper },
  methods: {
    shuffleArray (array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
      }
      return array
    },

    getShuffledUsersData () {
      return this.shuffleArray(usersData.slice(0))
    }
  }
}
</script>
