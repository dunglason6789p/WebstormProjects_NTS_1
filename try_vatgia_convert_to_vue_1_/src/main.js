import Vue from 'vue';
import VGLayout from "./components/VGLayout";
// import App from './App.vue'

// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Install BootstrapVue
// Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
// Vue.use(IconsPlugin)
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

// import Header01_ from './components/Header01_/Header01_'
// import Search01_ from './components/Search01_';

new Vue({
  render: h => h(VGLayout),
  // render: h => h(Search01_),
  // render: h => h(Header01_),
}).$mount('#app')
