<template>
    <div>
        <BProgress :value="thePercent"
                   show-progress animated/>
        <div>
            <BButton class="mt-3" @click="changeBy(1)">+</BButton>
            <BButton class="mt-3" @click="changeBy(-1)">-</BButton>
        </div>
    </div>
</template>

<script>
    const customEventNames = {
        percentChangeEventName:"percentChangeEventxx"
    };
    export default {
        name: "MyBootstrapProgress2",
        customEventNames,
        props:{
            paramPercent:Number,
        },
        data() {
            return {
                thePercent: this.paramPercent,
            }
        },
        methods: {
            /**
             * @param x {number}
             */
            changeBy(x){
                this.thePercent += x;
                this.$emit(customEventNames.percentChangeEventName,this.thePercent);
                console.log(customEventNames.percentChangeEventName);
            }
        }
    }
</script>
