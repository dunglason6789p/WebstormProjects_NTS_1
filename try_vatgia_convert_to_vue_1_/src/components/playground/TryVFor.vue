<template>
    <div>
        <div v-for="man in men" :key="man.theId">
            <div>{{ man.fullName }}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TryVFor",
        data(){
            return{
                men:[
                    {
                        theId:2,
                        age:5,
                        fullName:"Son Nguyen"
                    },
                    {
                        theId:4,
                        age:7,
                        fullName:"T Nguyen"
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>
