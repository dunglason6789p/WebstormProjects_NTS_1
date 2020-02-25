<template>
  <CRow _zx_="02640_">
    <CCol _zx_="02641_" col="12" xl="8">
      <transition _zx_="02642_" name="slide">
        <CCard _zx_="02643_">
          <CCardHeader _zx_="02644_">
            Users
          </CCardHeader>
          <CCardBody _zx_="02645_">
            <CDataTable
              hover
              striped
              :items="items"
              :fields="fields"
              :items-per-page="perPage"
              @row-clicked="rowClicked"
              :pagination="$options.paginationProps"
              index-column
              clickable-rows
            >
              <template _zx_="02646_" #username="data">
                <td _zx_="02647_">
                  <strong _zx_="02648_">{{data.item.username}}</strong>
                </td>
              </template>
            
              <template _zx_="02649_" #status="data">
                <td _zx_="02650_">
                  <CBadge _zx_="02651_" :color="getBadge(data.item.status)">
                    {{data.item.status}}
                  </CBadge>
                </td>
              </template>
            </CDataTable>
          </CCardBody>
        </CCard>
      </transition>
    </CCol>
  </CRow></template>

<script>
import usersData from './UsersData'
export default {
  name: 'Users',
  data: () => {
    return {
      items: usersData,
      fields: [
        { key: 'username', label: 'Name' },
        { key: 'registered' },
        { key: 'role' },
        { key: 'status' }
      ],
      perPage: 5,
    }
  },
  paginationProps: {
    align: 'center',
    doubleArrows: false,
    previousButtonHtml: 'prev',
    nextButtonHtml: 'next'
  },
  methods: {
    getBadge (status) {
      return status === 'Active' ? 'success'
        : status === 'Inactive' ? 'secondary'
          : status === 'Pending' ? 'warning'
            : status === 'Banned' ? 'danger' : 'primary'
    },
    userLink (id) {
      return `users/${id.toString()}`
    },
    rowClicked (item, index) {
      const userLink = this.userLink(index + 1)
      this.$router.push({path: userLink})
    }
  }
}
</script>
