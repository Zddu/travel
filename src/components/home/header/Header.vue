<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont back-icon">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: "Header",
    computed:{
      ...mapState(['city'])
    }
  }
</script>

<style scoped lang="stylus">
  @import "~style/varibles.styl"
  .header
    display flex
    line-height .86rem
    height .86rem
    background-color $bgColor

    .header-left
      width .64rem
      float left

      .back-icon
        text-align center
        font-size .4rem

    .header-input
      flex 1
      margin-top .12rem
      height .64rem
      line-height .64rem
      margin-left .2rem
      background #ffffff
      border-radius .1rem
      color #ccc

    .header-right
      min-width 1.04rem
      padding .1rem
      float right
      text-align center
      color #ffffff

      .arrow-icon
        margin-left -.04rem
        font-size .24rem

</style>
