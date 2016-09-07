<template>
    <ui-header></ui-header>
    <add-picture></add-picture>
    <fill-info></fill-info>
    <fill-info-title></fill-info-title>
    <ui-app></ui-app>
    <ui-foot></ui-foot>
</template>
<style>

</style>
<script>
    import uiHeader from '../../components/header.vue';
    import addPicture from './addPicture.vue';
    import fillInfo from './fillInfo.vue';
    import uiFoot from '../../components/footer.vue'
    import fillInfoTitle from './fillInfo-title.vue';
    import uiApp from '../other/app.vue';
    export default{
        components: {
            uiHeader,
            addPicture,
            fillInfo,
            fillInfoTitle,
            uiFoot,
            uiApp
        }
    }
</script>
