<template>
    <div id="message">
        <p v-for='item in msg' class="item">
            <img src={{item.image}}>
            <span id="name">{{item.userName}}</span>
            <span>{{item.type}}</span>
            <span class="msgbox">{{item.word}}</span>
        </p>
        <button class="ui_btn">提交</button>
    </div>
    <div class="other">
        <img src='http://tp2.sinaimg.cn/2060888377/180/5741105390/1'>
        <img src='http://tp2.sinaimg.cn/2060888377/180/5741105390/1'>
    </div>
</template>
<style lang="less">
    #message {
        width: 80%;
        background-color: white;
        margin-top: 400px;
        margin-left: 150px;
        margin-right: 150px;
        padding-bottom: 60px;

        img {
            padding-left: 20px;
            padding-top: 20px;
            width: 80px;
            height: 80px;
        }

        p {
            margin-top: 30px;
            #name {
            }
        }
        .msgbox {
            margin-top: 18px;
            margin-right: 200px;
            border: 1px solid gainsboro;
            float: right;
            width: 500px;
            height: 100px;
        }
        .ui_btn{
            margin-top: 50px;
            margin-left: 80%;
            background-color: orange;
            color: white;
        }

    }
    .other{
        width: 80%;
        background-color: white;
        margin: 20px 150px;
        img{
            margin: 20px 150px;
        }
    }
</style>
<script>
    export default{
        data(){
            return {
                msg: [{
                    'userName': 'user1',
                    'image': 'http://tp2.sinaimg.cn/2060888377/180/5741105390/1',
                    'type': 'sale',
                    'word': 'hello'
                }, {
                    'userName': 'user2',
                    'image': 'http://tp2.sinaimg.cn/2060888377/180/5741105390/1',
                    'type': 'buy',
                    'word': '你好'
                }, {
                    'userName': 'user3',
                    'image': 'http://tp2.sinaimg.cn/2060888377/180/5741105390/1',
                    'type': 'sale',
                    'word': '哈哈'
                }]
            }
        }
    }
</script>
