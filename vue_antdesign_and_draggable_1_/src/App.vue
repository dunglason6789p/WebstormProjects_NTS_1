<template>
  <CompA/>
<!--  <MyParent/>-->
</template>

<script>
import CompA from "./components/CompA";
import MyParent from "@/components/child-parent-test/MyParent";

export default {
  name: 'app',
  components: {
    MyParent,
    CompA
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
