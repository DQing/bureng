<style lang="less">
    @borderColor: #eee;
    @itemWidth: 350px;
    @titleHeight: 50px;
    @avatarSize: 60px;
    .border-right {
        border-right: 1px solid @borderColor;
    }

    .goods_box {
        width: 800px;
        margin: 0 auto;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-justify-content: space-between;
        justify-content: space-between;

        .item {
            width: @itemWidth;
            margin-bottom: 20px;
            background-color: #fff;
            border: 1px solid @borderColor;

            &_img {
                padding: 30px @titleHeight 0;
                img {
                    border: 1px solid #eee;
                    padding: 3px;
                    border-radius: 3px;
                }
            }

            img {
                width: 100%;
                vertical-align: middle;
            }

            &_title {
                height: @titleHeight;
                line-height: @titleHeight;
                text-align: center;
                overflow: hidden;
            }

            .info {
                color: #333;
                border-top: 1px solid @borderColor;

                &_avatar {
                    width: @avatarSize;
                    padding: 10px;
                    -webkit-box-sizing: border-box;
                    box-sizing: border-box;
                    .border-right;
                }

                &_name {
                    width: 80px;
                    line-height: 60px;
                    font-size: 12px;
                    padding: 0 5px;
                    overflow: hidden;
                    box-sizing: border-box;
                    .border-right;
                }

                &_pos {
                    width: 100px;
                    line-height: @avatarSize / 2;
                    text-align: center;
                    .border-right;
                }

                &_price {
                    line-height: @avatarSize / 2;
                    text-align: center;
                }
            }
        }
    }
</style>

<template>
    <section class="goods_box flex-wrap">
        <div class="item" v-for="its in list">
            <div class="item_img">
                <a v-link="{ name: 'goodsInfo' }"><img
                        src="https://img.alicdn.com/bao/uploaded/i4/TB11cZRGVXXXXbLXVXXXXXXXXXX_!!0-item_pic.jpg_q50.jpg"
                        alt=""></a>
            </div>
            <h3 class="item_title">标题</h3>
            <div class="info flex-wrap">
                <div class="info_avatar">

                    <img src="http://tp2.sinaimg.cn/2060888377/180/5741105390/1">
                </div>
                <div class="info_name">
                    <p>Raito_MH</p>
                </div>
                <div class="info_pos">
                    <p>东区图书馆</p>
                    <p>可校外交易</p>
                </div>
                <div class="info_price flex-con">
                    <p>￥9999</p>
                    <p>可议价</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                list: new Array(10)
            }
        }
    }
</script>
