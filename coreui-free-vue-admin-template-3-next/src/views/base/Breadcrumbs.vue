<template>
  <CRow _zx_="00074_">
    <CCol _zx_="00075_" col>
      <CCard _zx_="00076_">
        <CCardHeader _zx_="00077_">
          <CIcon _zx_="00078_" name="cil-justify-center"/><strong> Bootstrap Breadcrumb</strong>
          <div _zx_="00079_" class="card-header-actions">
            <a 
              href="https://coreui.io/vue/docs/components/breadcrumb" 
              class="card-header-action" 
              rel="noreferrer noopener" 
              target="_blank"
            >
              <small _zx_="00080_" class="text-muted">docs</small>
            </a>
          </div>
        </CCardHeader>
        <CCardBody _zx_="00081_">
          <CBreadcrumb _zx_="00082_" :items="items"/>
          <CBreadcrumb _zx_="00083_" :items="items2"/>
          <CBreadcrumb _zx_="00084_" :items="items3"/>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow></template>

<script>
export default {
  name: 'Breadcrumbs',
  data () {
    return {
      items: [
        {
          text: 'Admin',
          href: '#'
        }, 
        {
          text: 'Manage',
          href: '#'
        }, 
        {
          text: 'Library'
        }
      ],


      items2: [
        {
          text: 'Go to dashboard',
          to: '/dashboard'
        }, 
        {
          text: 'Go to widgets',
          to: '/Widgets'
        }, 
        {
          text: 'Go to Google',
          href: 'http://google.com'
        },
        {
          text: 'Current page'
        }
      ],


      items3: [
        {
          text: 'Added',
          to: '#2',
          addClasses: 'font-xl'
        }, 
        {
          text: 'Custom',
          to: '#3',
          addClasses: 'font-xl'
        },
        {
          text: 'Classes',
          to: '#4',
          addClasses: 'font-xl text-danger'
        }
      ]
    }
  }
}
</script>

<style>
  .breadcrumb-item + .font-xl.breadcrumb-item::before {
    color: rgb(140, 195, 38);
    content: '>>';
    padding: 0px 10px;

  }
</style>
