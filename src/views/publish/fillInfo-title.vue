<template>
    <div class="bottomInfo">

        <div class="title">
            <img src="../../assets/img/icon-title.png">
            <span>标题</span>
            <input type="text" placeholder='不超过30个字' v-model='data.title' id="title">
        </div>

        <div class="goodsDetailed">
            <img src="../../assets/img/icon-detail.png">
            <span>详情</span>
            <input type="text" v-model='data.detailed' id="detail">
        </div>

        <div class="address">
            <img src="../../assets/img/icon-address.png">
            <span>交易地点</span>
            <input type="text" v-model='data.detailed' placeholder='校内交易地点' class="saleAddress">
            <input type="text" v-model='data.detailed' placeholder='校外交易地点' class="saleAddress">
        </div>

        <div class="money">
            <img src="../../assets/img/icon-hopePrice.png">
            <span>期望价格</span>
            <input type="text" value="" class="moneyOrGoods1">
            <img src="../../assets/img/icon-hopeGoods.png">
            <span>期望置换物品</span>
            <input type="text" class="moneyOrGoods2">
        </div>

        <div class="telPhone">
            <p>
                <img src="../../assets/img/icon-tel.png">
                <span>联系方式</span>
            </p>
            <p class="tels">
                <span>QQ</span>
                <input type="text" class="tel">
                <span>手机</span>
                <input type="tel" class="tel">
            </p>
        </div>
        <button class="ui_btn btn" type="button" value="publish">发布</button>
    </div>

</template>
<style lang="less" scoped>
    .bottomInfo {
        width: 80%;
        font-size: 17px;
        margin: 20px 200px;
        img {
            margin: 0 10px;
            width: 20px;
            height: 20px;
        }
        .title {
            #title {
                width: 400px;
                height: 25px;
                margin-left: 100px;
            }
            margin-bottom: 20px;
        }

        .goodsDetailed {
            #detail {
                width: 300px;
                height: 200px;
                margin-left: 100px;
            }
            margin-bottom: 20px;
        }

        .address {
            .saleAddress {
                width: 200px;
                height: 25px;
                margin-left: 65px;
            }
            margin-bottom: 20px;
        }

        .money {
            .moneyOrGoods1 {
                width: 100px;
                height: 25px;
                margin: 10px 60px;
            }
            .moneyOrGoods2 {
                width: 180px;
                height: 25px;
                margin: 10px;
            }
            margin-bottom: 20px;
        }

        .telPhone {
            .tels {
                margin: 20px 50px;
                .tel {
                    margin: 0 30px;
                    width: 200px;
                    height: 25px;
                }
            }
            margin-bottom: 80px;
        }
        .ui_btn {
            margin-left: 360px;
            background-color: orange;
            color: white;
        }

    }
</style>
<script>
    export default{
        data(){
            return {
                data: {
                    title: '',
                    detailed: ''
                }
//                msg: '购买时间:' +'\n'+
//                '损耗程度:\n' +'\n'+
//                '购买价格:\n' +'\n'+
//                '包装,说明书,发票是否齐全:\n' +'\n'+
//                '用途:\n' +'\n'+
//                '其他:'

            }
        }
    }
</script>
