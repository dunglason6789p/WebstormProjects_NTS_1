//require('dotenv').config();

import Vue from 'vue';
Vue.config.productionTip = false;

import VGLayout from "./components/vatgia/VGLayout";
// import TestModal from "./components/cke/modal/TestModal";
// import MyCkEditorReadOnly from "./components/cke/nonedit/MyCkEditorReadOnly";

new Vue({
  render: h => h(VGLayout),
  // render: h => h(TestModal),
  // render: h => h(MyCkEditorReadOnly),
}).$mount('#app');
