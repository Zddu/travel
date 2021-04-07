<template>
  <div>
    <div class="banner" @click="handleGallaryClick">
      <img src="http://img1.qunarzz.com/sight/p0/1912/bc/bc153841b29f1b79a3.img.jpg_600x330_c3806a35.jpg" class="banner-img" alt="">
      <div class="banner-info">
        <p class="banner-title">
          大连圣亚海洋世界(AAAA景区)
        </p>
        <p class="banner-number">
          <span class="iconfont banner-icon">&#xe692;</span>39
        </p>
      </div>
    </div>
    <common-gallary @close="handleGallaryClose" :imgs="imgs" v-show="showGallary"></common-gallary>
  </div>
</template>

<script>

    import CommonGallary from "@/common/gallary/Gallary";
    export default {
        name: "DetailBanner",
      components: {CommonGallary},
      data(){
          return{
            showGallary:false,
            imgs:[ "http://img1.qunarzz.com/sight/p0/1908/ad/ad838f89cb491e70a3.img.jpg_600x330_06e66996.jpg",
              "http://img1.qunarzz.com/sight/p0/1912/bc/bc153841b29f1b79a3.img.jpg_600x330_c3806a35.jpg"]
          }
      },
      methods:{
        handleGallaryClick(){
          this.showGallary = true;
        },
        handleGallaryClose(){
          this.showGallary = false;
        }
      }
    }
</script>
<style scoped lang="stylus">
  .banner
    overflow: hidden
    height 0
    padding-bottom 55%
    position relative
    .banner-img
      width 100%
    .banner-info
      display flex
      position absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color #ffffff
      background-image linear-gradient(top ,rgba(0,0,0,0),rgba(0,0,0,.8))
      .banner-title
        flex 1
        font-size .32rem
        padding 0 .2rem
      .banner-number
        height .32rem
        padding 0 .4rem
        margin-top .14rem
        line-height .32rem
        border-radius .2rem
        font-size .24rem
        background rgb(0,0,0,.08)
        .banner-icon
          font-size .24rem
          margin-right .1rem

</style>
