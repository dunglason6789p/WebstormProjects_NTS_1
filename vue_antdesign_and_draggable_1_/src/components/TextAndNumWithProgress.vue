<template>
    <div>
        <div>
            <span>{{percentToShow}}</span>
        </div>
        <div>
            <MyBootstrapProgress2 :paramPercent="84" @[percentChangeEventName]="updatePercentShow"/>
        </div>
    </div>
</template>

<script>
    import MyBootstrapProgress2 from "@/components/MyBootstrapProgress2";
    export default {
        name: "TextAndNumWithProgress",
        components: {MyBootstrapProgress2},
        data(){
            return{
                percentToShow: 69,
                percentChangeEventName:MyBootstrapProgress2.customEventNames.percentChangeEventName
            }
        },
        methods:{
            updatePercentShow(newPercentValue){
                this.percentToShow = newPercentValue;
                // console.log(newPercentValue);
                // console.log(MyBootstrapProgress2);
                console.log("MyBootstrapProgress2.customEventNames.percentChangeEventName="
                    +MyBootstrapProgress2.customEventNames.percentChangeEventName);
            }
        }
    }
</script>

<style scoped>

</style>
