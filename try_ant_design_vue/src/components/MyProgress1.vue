<template>
    <div>
        <Progress :percent="percent" />
        <AButtonGroup>
            <Button @click="decline" icon="minus" />
            <Button @click="increase" icon="plus" />
        </AButtonGroup>
    </div></template>

<script>
    import {Progress,Button} from 'ant-design-vue';
    export default {
        components:{
            Progress,Button
        },
        name: "MyProgress1",
        data() {
            return {
                percent: 0,
            };
        },
        methods: {
            increase() {
                let percent = this.percent + 10;
                if (percent > 100) {
                    percent = 100;
                }
                this.percent = percent;
            },
            decline() {
                let percent = this.percent - 10;
                if (percent < 0) {
                    percent = 0;
                }
                this.percent = percent;
            },
        },
    };
</script>

<style scoped>

</style>
