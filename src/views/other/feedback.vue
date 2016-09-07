<template>
    <ui-header></ui-header>
    <div>
        <div>this is template body</div>
    </div>
</template>
<style>
</style>
<script>
    import uiHeader from '../../components/header.vue';
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
            uiHeader
        }
    }
</script>
