<template>
    <div class="header">
      <div class="header-left">
        <span class="iconfont back-icon" >&#xe624;</span>
      </div>
      <div class="header-input">
        <span class="iconfont">&#xe632;</span>
        输入城市/景点/主题
      </div>
      <div class="header-right">城市
        <span class="iconfont arrow-icon" >&#xe64a;</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Header"
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
      width 1.04rem
      float right
      text-align center
      color #ffffff
      .arrow-icon
        margin-left -.04rem
        font-size .24rem

</style>
