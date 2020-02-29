<template>
    <div _zx_="00001_" id="app">
        <img _zx_="00002_" alt="Vue logo" src="./assets/logo.png">
        <HelloWorld _zx_="00003_" msg="Welcome to Your Vue.js App <3 !"/>
        <Header01_ _zx_="00004_"/>
    </div></template>

<script>
    import HelloWorld from './components/HelloWorld.vue'
    import Header01_ from "@/components/Header01_";

    export default {
        name: 'app',
        components: {
            Header01_,
            HelloWorld
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
