// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import * as VueGoogleMaps from 'vue2-google-maps'
import { Vue2Dragula } from 'vue2-dragula'
import VueQuillEditor from 'vue-quill-editor'
import wysiwyg from 'vue-wysiwyg'
import VueBreadcrumbs from 'vue2-breadcrumbs'
import VueResource from 'vue-resource'
import VmBackTop from 'vue-multiple-back-top'
import VueNotifications from 'vue-notifications'
import miniToastr from 'mini-toastr'
import AmCharts from 'amcharts3'
import AmSerial from 'amcharts3/amcharts/serial'
import AmAngularGauge from 'amcharts3/amcharts/gauge'
import Lang from 'vuejs-localization'
import App from './App'
import router from './router'

// jvector map
import 'jvectormap'
import 'jvectormap/tests/assets/jquery-jvectormap-world-mill-en'
import 'jvectormap/jquery-jvectormap.css'

// include all css files
import './lib/VuelyCss'

function toast({ title, message, type, timeout, cb }) {
  return miniToastr[type](message, title, timeout, cb)
}

const options = {
  success: toast,
  error: toast,
  info: toast,
  warn: toast
}

const toastTypes = {
  success: 'success',
  error: 'error',
  info: 'info',
  warn: 'warn'
}

miniToastr.init({ types: toastTypes })

Vue.use(Vuetify)
Vue.use(AmCharts)
Vue.use(AmSerial)
Vue.use(AmAngularGauge)
Vue.use(Vue2Dragula)
Vue.use(VueQuillEditor)
Vue.use(VueResource)
Vue.use(wysiwyg, {})
Vue.use(VueBreadcrumbs)
Vue.use(VueNotifications, options)
Vue.component(VmBackTop.name, VmBackTop)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBtdO5k6CRntAMJCF-H5uZjTCoSGX95cdk'
  }
})
Lang.requireAll(require.context('./lang', true, /\.js$/))
Vue.use(Lang)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
