<template>
  <div>
    <div class="banner" @click="handleGallaryClick">
      <img :src="bannerImg"
           class="banner-img" alt="">
      <div class="banner-info">
        <p class="banner-title">
          {{this.sightName}}
        </p>
        <p class="banner-number">
          <span class="iconfont banner-icon">&#xe692;</span>
          {{this.bannerImgs.length}}
        </p>
      </div>
    </div>
    <fade-animation>
      <common-gallary @close="handleGallaryClose" :imgs="bannerImgs" v-show="showGallary"></common-gallary>
    </fade-animation>
  </div>
</template>

<script>

  import CommonGallary from "@/common/gallary/Gallary";
  import FadeAnimation from "@/common/fade/Fade";

  export default {
    name: "DetailBanner",
    components: {CommonGallary,FadeAnimation},
    props:{
      sightName:String,
      bannerImg:String,
      bannerImgs:Array
    },
    data() {
      return {
        showGallary: false,
      }
    },
    methods: {
      handleGallaryClick() {
        this.showGallary = true;
      },
      handleGallaryClose() {
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
      background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))

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
        background rgb(0, 0, 0, .08)

        .banner-icon
          font-size .24rem
          margin-right .1rem

</style>
