<template>
  <div class="container" @click="handleGallaryClic">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide :key="index" v-for="(item,index) in imgs">
          <img class="gallary-img"
               :src="item">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CommonGallary",
    props:{
      imgs:{
        type:Array,
        default:[]
      }
    },
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          paginationType:'fraction',
          observeParents:true,
          observer:true
        },
      }
    },
    methods:{
      handleGallaryClic(){
        this.$emit('close')
      }
    }
  }
</script>

<style scoped lang="stylus">
  .container >>> .swiper-container
    overflow inherit
  .container
    display flex
    flex-direction column
    justify-content center
    z-index 99
    position: fixed;
    left 0
    right 0
    top 0
    bottom 0
    background #000

    .wrapper
      width 100%
      height 0
      padding-bottom 100%
      .gallary-img
        width 100%
      .swiper-pagination
        color #ffffff
        bottom -1rem

</style>
