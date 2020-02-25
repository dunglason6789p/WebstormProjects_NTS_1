<template>
  <CCard _zx_="01260_">
    <CCardHeader _zx_="01261_">
      <slot _zx_="01262_" name="header">
        <CIcon _zx_="01263_" name="cil-grid"/> {{caption}}
      </slot>
    </CCardHeader>
    <CCardBody _zx_="01264_">
      <CDataTable
        :hover="hover"
        :striped="striped"
        :bordered="bordered"
        :small="small"
        :fixed="fixed"
        :items="items"
        :fields="fields"
        :items-per-page="small ? 10 : 5"
        :dark="dark"
        pagination
      >
        <template _zx_="01265_" #status="{item}">
          <td _zx_="01266_">
            <CBadge _zx_="01267_" :color="getBadge(item.status)">{{item.status}}</CBadge>
          </td>
        </template>
      </CDataTable>
    </CCardBody>
  </CCard></template>

<script>
export default {
  name: 'Table',
  props: {
    items: Array,
    fields: {
      type: Array,
      default () {
        return ['username', 'registered', 'role', 'status']
      }
    },
    caption: {
      type: String,
      default: 'Table'
    },
    hover: Boolean,
    striped: Boolean,
    bordered: Boolean,
    small: Boolean,
    fixed: Boolean,
    dark: Boolean
  },
  methods: {
    getBadge (status) {
      return status === 'Active' ? 'success'
        : status === 'Inactive' ? 'secondary'
          : status === 'Pending' ? 'warning'
            : status === 'Banned' ? 'danger' : 'primary'
    }
  }
}
</script>
