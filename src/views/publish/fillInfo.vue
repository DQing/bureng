<template>
    <div class="fillInfo">
        <div class="infoSort">
            <img src="../../assets/img/icon-infoSort.png">
            <span class="info">信息类别</span>
            <div class="infoBox">
                <ui-select-box :data="infoList" class='info'></ui-select-box>
            </div>
            <span class="isInfo">允许议价?
                <button class="ui_btn" type="button" value="yes">是</button>
                <button class="ui_btn" type="button" value="no">否</button>
            </span>
        </div>

        <div class="infoSort">
            <img src="../../assets/img/icon-goodsSort.png">
            <span class="info">物品分类</span>
            <div class="infoBox">
                <ui-select-box :data="goodsList" class='info'></ui-select-box>
            </div>
            <span class="isInfo">允许议价?
                <button class="ui_btn" type="button" value="yes">是</button>
                <button class="ui_btn" type="button" value="no">否</button>
            </span>
        </div>
        <div class="infoSort">
            <span class="blank"> </span>
            <div class="infoBox">
                <ui-select-box :data="gradeList" class='info'></ui-select-box>
            </div>
            <span class="isInfo">允许以物换物?
                <button class="ui_btn btn" type="button" value="yes">是</button>
                <button class="ui_btn btn" type="button" value="no">否</button>
            </span>
        </div>
        <hr>
    </div>
</template>
<style lang="less">
    .fillInfo {
        margin: 20px 200px;
        height: auto;
        font-size: 17px;

        .infoSort {
            /*overflow: hidden;*/
            margin-top: 30px;
            .isInfo {
                float: right;
            }
        }
        img {
            margin: 0 10px;
            width: 20px;
            height: 20px;
        }
        .infoBox {
            width: 230px;
            margin-left: 60px;
            display: inline-block;
            background-color: white;
        }

        .ui_btn {
            display: inline-block;
            margin-left: 50px;
        }
        .blank{
           margin-left: 117px;
        }
    }

</style>
<script>
    import uiSelectBox from '../../components/selectbox.vue';
    export default{
        data(){
            return {
                infoList: [{
                    value: 0,
                    title: '二手求购'
                }, {
                    value: 1,
                    title: '新品出售'
                }, {
                    value: 2,
                    title: '超低价转让'
                }],
                goodsList: [{
                    value: 0,
                    title: '上衣'
                }, {
                    value: 1,
                    title: '连衣裙'
                }, {
                    value: 2,
                    title: '短袖'
                }],
                gradeList: [{
                    value: 0,
                    title: '一级分类'
                }, {
                    value: 1,
                    title: '二级分类'
                }, {
                    value: 2,
                    title: '三级分类'
                }]
            }
        },
        components: {
            uiSelectBox
        }
    }
</script>
