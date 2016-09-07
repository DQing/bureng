<style lang="less">
@largeWidth: 374px;
@midWidth: 555px;
@midHeight: 210px;
@smallWidth: 210px;

.show-box{
  position: relative;
  height: @largeWidth + @smallWidth;
  width: @largeWidth + @midWidth + 2 * @smallWidth;
  z-index: -1;
  .section{
    border: solid 1px;
    position: absolute;
    box-sizing: border-box;
    .pic{
      width: 100%;
      height: 100%;
      img{
        width: 100%;
        height: 100%;
      }
    }
    &:nth-child(1){
      width: @largeWidth;
      height: @largeWidth;
    }
    &:nth-child(2){
      width: @smallWidth;
      height: @smallWidth;
      left: @largeWidth;
    }
    &:nth-child(3){
      width: @midWidth;
      height: @midHeight;
      left: @largeWidth + @smallWidth;
    }
    &:nth-child(4){
      width: @smallWidth;
      height: @smallWidth;
      right: 0;
    }
    &:nth-child(5){
      width: @largeWidth;
      height: @largeWidth;
      top: @smallWidth;
      right: 0;
    }
    &:nth-child(6){
      width: @smallWidth;
      height: @smallWidth;
      bottom: 0;
      right: @largeWidth;
    }
    &:nth-child(7){
      width: @midWidth;
      height: @midHeight;
      left: @smallWidth;
      bottom: 0;
    }
    &:nth-child(8){
      width: @smallWidth;
      height: @smallWidth;
      left: 0;
      bottom: 0;
    }
  }

}
</style>



<template>
  <section class="show-box">
    <div class="section" v-for="item in items">
      <div class="pic">
        <img v-bind:src="item.src">
      </div>
    </div>
  </section>
</template>


<script>
export default{
  data() {
    return {
      items: [{
        src: 'http://g02.t.alicdn.com/kf/UT8C2bRXE0XXXagOFbXy.jpg_220x10000.jpg'
       }, {
        src: 'http://g02.t.alicdn.com/kf/UT8C2bRXE0XXXagOFbXy.jpg_220x10000.jpg'
       }, {
        src: 'http://g01.t.alicdn.com/kf/UT8W8zPXztXXXagOFbXi.jpg_220x10000.jpg'
       }, {
        src: 'http://g02.t.alicdn.com/kf/UT8C2bRXE0XXXagOFbXy.jpg_220x10000.jpg'
       }, {
        src: 'http://g02.t.alicdn.com/kf/UT8C2bRXE0XXXagOFbXy.jpg_220x10000.jpg'
       }, {
        src: 'http://g02.t.alicdn.com/kf/UT8C2bRXE0XXXagOFbXy.jpg_220x10000.jpg'
       }, {
        src: 'http://g01.t.alicdn.com/kf/UT8W8zPXztXXXagOFbXi.jpg_220x10000.jpg'
       }, {
        src: 'http://g02.t.alicdn.com/kf/UT8C2bRXE0XXXagOFbXy.jpg_220x10000.jpg'
       }]
    }
  }
}


</script>
