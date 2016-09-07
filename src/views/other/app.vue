<template>
    <div class="other">
        <a class="btn" v-link="{name:'publish'}">官方微博</a>
        <a class="btn" v-link="{name:'publish'}">意见反馈</a>
        <a class="btn" v-link="{name:'about'}">关于</a>
        <a class="btn" v-link="{name:'publish'}">联系我们</a>
    </div>
</template>
<style lang="less">
    .other {
        margin-top: -300px;
        margin-right: 30px;
        float: right;
        background-color: darkgray;
        margin-left: 90%;
        .btn{
            display: block;
            color: white;
            margin: 40px 10px;
        }
    }
</style>
<script>
    export default{
        data(){
            return {
                msg: 'hello vue'
            }
        },
        components: {}
    }
</script>
