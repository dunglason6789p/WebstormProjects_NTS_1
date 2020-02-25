<template>
  <div style="margin: 24px">
    <p style="margin-bottom: 24px">
      Current ant-design-vue version: {{ version }} <br />
      You can change ant-design-vue version on the left panel (Dependencies
      section).
    </p>
    <div>
<!--          <a-date-picker :defaultValue="moment()" />-->
<!--          <ADatePicker :defaultValue="moment()" />-->
      <DatePicker :defaultValue="moment()" />
    </div>
    <div style="height: 100px">
      <MyProgress1/>
    </div>
    <div>
      <HelloWorld/>
    </div>
  </div></template>

<script>
import moment from "moment";
import { version } from "ant-design-vue/es";
import {DatePicker} from 'ant-design-vue';/*import from root for type info.*/
// import {DatePicker} from 'ant-design-vue/es';

import HelloWorld from './components/HelloWorld';
import MyProgress1 from './components/MyProgress1.vue';

export default {
  name: "App",
  components: {
    HelloWorld,
    DatePicker,
    MyProgress1
  },
  data() {
    return {
      moment,
      version
    };
  }
};
</script>

<style></style>
