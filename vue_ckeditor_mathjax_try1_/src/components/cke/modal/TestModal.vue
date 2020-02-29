<template>
    <div>
        <button id="show-modal" @click="showModal = true">Show Modal</button>
        <!-- use the modal component, pass in the prop -->
        <MyModalCkEditorB v-show="showModal" @close="showModal = false">
            <!--
          you can use custom content here to OVERRIDE
          default content
        -->
            <h3 slot="header">Trình soạn thảo</h3>
        </MyModalCkEditorB>
    </div>
</template>

<script>
    import MyModalCkEditorB from "./MyModalCkEditorB";
    export default {
        name: "TestModal",
        components:{
            MyModalCkEditorB
        },
        data(){
            return{
                showModal: false
            }
        }
    }
</script>

<style scoped>

</style>
