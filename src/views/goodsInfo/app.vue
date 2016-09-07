<template>
    <div>
        <ui-header></ui-header>
        <p class="title">物品详情</p>
        <div class="bd_main">
            <aside-menu>
                <goods-slider></goods-slider>
            </aside-menu>
        </div>
        <good-info></good-info>
        <message></message>
        <ui-footer></ui-footer>
    </div>
</template>
<style>
    .title {
        font-size: 17px;
        margin-left: 660px;
        margin-top: 30px;
    }
</style>
<script>
    import goodsSlider from './goodsSlider.vue';
    import uiHeader from '../../components/header.vue'
    import asideMenu from '../../components/asideMenu.vue';
    import goodInfo from './goodInfo.vue';
    import message from './message.vue';
    import uiFooter from '../../components/footer.vue';
    export default{
        data(){
            return {}
        },
        components: {
            uiHeader,
            asideMenu,
            goodsSlider,
            goodInfo,
            message,
            uiFooter
        }
    }
</script>
