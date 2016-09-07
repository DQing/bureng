<template>
    <header class="header">
        <div class="hd flex-wrap">
            <div id="logo">
                <a href="">
                    <img :src="logo" alt="">
                </a>
            </div>
            <div class="hd_inner flex-wrap flex-con">
                <a class="ui_btn" v-link="{name:'publish'}">我要发布</a>
                <div class="school_box">
                    <ui-select-box :data="schoolList"></ui-select-box>
                </div>
                <div class="search_box">
                    <input type="text" placeholder="iphone5s ipadmini" v-model="keyword">
                    <a class="btn_search"></a>
                </div>
            </div>
            <div class="auth_box flex-wrap">
                <a class="ui_btn" v-link="{ name: 'login' }">登录</a>
                <a class="ui_btn ui_btn_default" v-link="{ name: 'register' }">注册</a>
            </div>
        </div>
    </header>
</template>

<script>
    import uiSelectBox from './selectbox'
    import logo from '../assets/img/logo.png'

    export default {
        data() {
            return {
                logo: logo,
                schoolList: [{
                    value: 0,
                    title: '西安邮电大学'
                }, {
                    value: 1,
                    title: '西北政法大学'
                }, {
                    value: 2,
                    title: '西安工业大学'
                }, {
                    value: 3,
                    title: '陕西师范大学'
                }, {
                    value: 4,
                    title: '西安电子科技大学'
                }]
            }
        },
        components: {
            uiSelectBox
        }
    }

</script>

<style lang="less">
    @baseHeight: 30px;

    .header {
        background-color: #fff;

        .hd {
            width: 1000px;
            margin: 0 auto;

            #logo {
                width: 90px;
                height: 42px;
                margin: 30px 40px 30px 0;
                img {
                    width: 100%;
                }
            }

            &_inner {
                -webkit-justify-content: space-between;
                -webkit-align-items: center;
                justify-content: space-between;
                align-items: center;
                margin-right: 30px;

                .school_box {
                    width: 140px;
                }

                .search_box {
                    position: relative;
                    border: 1px solid #c8c8c8;
                    padding-right: 30px;
                    input {
                        width: 350px;
                        height: @baseHeight;
                        padding: 0 10px;
                        border: 0;
                        -webkit-box-sizing: border-box;
                        box-sizing: border-box;
                    }

                    .btn_search {
                        position: absolute;
                        top: 0;
                        right: 0;
                        width: @baseHeight;
                        height: @baseHeight;
                        background: url(../assets/img/btn-search.png) no-repeat center center;
                        background-size: 50%;
                        cursor: pointer;
                    }

                }
            }

            .auth_box {
                width: 197px;
                -webkit-justify-content: space-between;
                -webkit-align-items: center;
                justify-content: space-between;
                align-items: center;
            }
        }
    }
</style>