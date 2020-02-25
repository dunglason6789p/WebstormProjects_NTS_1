<template>
    <div>
        <p>Parent value: {{parentValue}}</p>
        <MyChild v-model="parentValue"/>
    </div>
</template>

<script>
    import MyChild from "@/components/child-parent-test/MyChild";
    export default {
        name: "MyParent",
        components: {MyChild},
        data() {
            return {
                parentValue: 'hello'
            }
        }
    }
</script>

<style scoped>

</style>
