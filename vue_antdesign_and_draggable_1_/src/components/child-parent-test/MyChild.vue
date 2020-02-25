<template>
    <input type="text" v-bind:value="value" v-on:input="updateValue($event.target.value)"/>
</template>

<script>
    export default {
        name: "MyChild",
        props: ['value'],
        methods: {
            updateValue: function (value) {
                this.$emit('input', value);
            }
        },
        data() {
            return {
                parentValue: 'hello'
            }
        }
    }
</script>

<style scoped>

</style>
