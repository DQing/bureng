<template xmlns:v-on="http://www.w3.org/1999/xhtml">
    <div id="addImage">
        <h3>发布信息</h3>
        <input type="file" id="input" v-on:change="upload"/>
        <div class="user_avatar">
            <span id="images"></span>
            <a v-on:click="doClick()"><img id="add" src="../../assets/img/addPicture.png"></a>
        </div>
        <br>
        <hr>

    </div>
</template>
<style lang="less">
    #addImage {
        h3 {
            text-align: center;
            margin: 20px;
        }
        #images {
            margin-top: 40px;
            margin-left: 200px;
        }
        #images img {
            border: 5px solid lavender;
            margin-right: 20px;
            width: 100px;
            height: 100px;
        }
        input {
            display: none;
        }
        hr {
            margin: 0 200px;
        }
    }
</style>
<script>
    export default{
        data(){
            return {}
        },
        methods: {
            doClick() {
                var el = document.getElementById('input');
                if (el) {
                    el.click();
                }
            },
            upload(e){
                var files = e.target.files;
                for (var i = 0; i < files.length; i++) {
                    var file = files[i];
                    var imageType = /^image\//;

                    if (!imageType.test(file.type)) {
                        continue;
                    }

                    var img = document.createElement("img");
                    img.classList.add("obj");
                    img.file = file;
                    document.getElementById('images').appendChild(img);

                    var reader = new FileReader();
                    reader.onload = (function (aImg) {
                        return function (e) {
                            aImg.src = e.target.result;
                        };
                    })(img);
                    reader.readAsDataURL(file);
                }
            }
        }
    }
</script>
