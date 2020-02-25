<template>
  <div _zx_="00002_" class="c-app">
    <TheSidebar _zx_="00003_"/>
    <div _zx_="00004_" class="c-wrapper">
      <TheHeader _zx_="00005_"/>
      <div _zx_="00006_" class="c-body">
        <main _zx_="00007_" class="c-main">
          <CContainer _zx_="00008_" fluid>
            <transition _zx_="00009_" name="fade">
              <router-view _zx_="00010_"></router-view>
            </transition>
          </CContainer>
        </main>
      </div>
      <TheFooter _zx_="00011_"/>
    </div>
  </div></template>

<script>
import TheSidebar from './TheSidebar'
import TheHeader from './TheHeader'
import TheFooter from './TheFooter'

export default {
  name: 'TheContainer',
  components: {
    TheSidebar,
    TheHeader,
    TheFooter
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
