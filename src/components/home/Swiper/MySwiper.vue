<template>
  <div class="wrapper">
    <swiper v-if="showSwiper" :options="swiperOption" ref="MySwiper">
      <swiper-slide :key="item.id" v-for="item in swiperList">
        <img class="swiper-img"
             :src="item.imgUrl" >
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: "MySwiper",
    props:{
      swiperList:{
        type:Array
      }
    },
    computed:{
      showSwiper(){
        return this.swiperList.length
      }
    },
    data() {
      return {
        swiperOption: {
          pagination:'.swiper-pagination',
          loop:true,
        },
      }
    }
  }
</script>

<style scoped lang="stylus">
  /*
  >>> 样式穿透 scoped的限制
  */
  .wrapper >>> .swiper-pagination-bullet-active
    background-color #ffffff
  .wrapper
    overflow hidden
    /*
    图片未加载出来时，让div占据图片高度，避免下面的元素上移
    方式二 height 31.25vw， vw可能兼容性不太好
    */
    width 100%
    height 0
    padding-bottom 31.25%
    background-color #eee
    .swiper-img
      width 100%
</style>
