<template>
    <div class="info">
        <img src="http://tp2.sinaimg.cn/2060888377/180/5741105390/1">
        <p><br><br>
            <span>卖家</span>
            <span class="border">{{msg.address}}</span>
            <span>QQ</span><span class="border">{{msg.QQ}}</span>
        </p>
        <p>
            <span class="border">已认证</span>
            <span class="border">等级</span>
            <span>发布日期:</span>
            <span class="border">{{msg.releaseDate}}</span>
        </p>

        <p class="right"><span>{{msg.price}}</span></p>
        <p class="right"><span>可置换
            <!--<ui-select-box :data="goodsList" class='info'></ui-select-box>-->
            <select>
                <option>小吃</option>
            </select>
            </span>
        </p>
        <p class="right"><span>可议价</span></p>
        <p class="right"><span>地点
            <select>
                <option>某地某地.............</option>
            </select>
            </span>
        </p>

        <div class="sale">
            <p>购买时间:{{data.buyTime}}</p>
            <p>损耗程度:{{data.wearLevel}}</p>
            <p>包装,说明书,发票是否齐全:{{data.doc}}</p>
            <p>用途:{{data.use}}</p>
            <p>其他:{{data.other}}</p>
        </div>
    </div>
</template>
<style lang="less">
    .info {
        width: 80%;
        height: 150px;
        background-color: white;
        margin: 260px 150px;
        font-size: 16px;
        img {
            width: 100px;
            height: 100px;
            margin: 20px 10px;
            border: 5px solid gainsboro;
            float: left;
        }
        span {
            margin-left: 20px;
        }
        p {
            margin-top: 40px;
            margin-right: 30px;
        }
        .right {
            float: right;
            width: 85px;
            height: 85px;
            background-color: #dddddd;
            margin-top: -70px;
            span {
                float: right;
                padding: 20px;
                select {
                    margin: -20px -20px;
                    width: 100px;
                    height: 100px;
                    opacity: 0;
                }
            }
        }
        .sale {
            padding: 20px;
            margin-top: 80px;
            background-color: white;

        }
        .border {
            border: 1px solid silver;
            padding: 5px 10px;
        }
    }
</style>
<script>
    import uiSelectBox from '../../components/selectbox.vue';
    export default{
        data(){
            return {
                msg: {
                    'address': '西邮天桥',
                    'QQ': '12344677',
                    'SpecificAddress': '西安邮电大学天桥下',//具体地址
                    'releaseDate': '2016.3.5', //发布日期
                    'price': '9999'
                    //....
                },
                data: {
                    'buyTime': '2014.4.3',//购买时间
                    'wearLevel': '完整',//损耗程度
                    'doc': '',//包装,说明书,发票是否齐全
                    'use': '',//用途
                    'other': ''//其他
                }
            }
        },
        components: {
            uiSelectBox
        }
    }
</script>
