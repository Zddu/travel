<template>
  <div class="wrapper">
    <swiper :options="swiperOption" ref="MySwiper">
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
    data() {
      return {
        swiperOption: {
          pagination:'.swiper-pagination',
          loop:true,
        },
        swiperList:[
          {
            id:'0001',
            imgUrl:'http://zdde.kepu.wiki/upload/2021/04/1-a76de3171897438fb74e0210572b1dfa.png'
          },{
            id:'0002',
            imgUrl:'http://zdde.kepu.wiki/upload/2021/04/2-08ef045f443845b9a050bfaa580a8c28.png'
          }
        ]
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
