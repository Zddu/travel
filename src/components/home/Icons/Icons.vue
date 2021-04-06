<template>
  <div class="icons">
    <swiper ref="swiper-icons" :options="swiperOption">
      <swiper-slide :key="index" v-for="(page,index) in pages">
        <div class="icon" :key="item.id" v-for="item in page">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" alt="">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: "Icons",
    props:{
      iconList:{
        type:Array
      }
    },
    data() {
      return {
        swiperOption: {
          loop:false,
        },
      }
    },
    computed:{
      pages(){
        const pages = [];
        this.iconList.forEach((item,index)=>{
          const page = Math.floor(index / 8);
          if (!pages[page]) {
            pages[page] = []
          }
          pages[page].push(item);
        })
        return pages;
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import "~style/varibles.styl"
  @import "~style/mixins.styl"
  .icons >>> .swiper-container
    height 0
    padding-bottom 50% //基于父元素宽度的一半
  .icons
    margin-top .2rem
    .icon
      position relative
      overflow hidden
      float left
      height 0
      width 25%
      padding-bottom 25%
      .icon-img
        position absolute
        top: 0
        left: 0
        right: 0
        bottom .44rem
        box-sizing border-box
        ellipsis()
        .icon-img-content
          height 100%
          display block
          margin 0 auto
      .icon-desc
        position: absolute;
        left 0
        right: 0
        bottom: 0
        height .44rem
        line-height .44rem
        text-align center
        color $darkTextColor
</style>
