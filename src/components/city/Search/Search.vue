<template>
  <div class="search">
    <input type="text" class="search-input" placeholder="输入城市名或拼音">
  </div>
</template>

<script>
    export default {
        name: "CitySearch"
    }
</script>


<style scoped lang="stylus">
  @import "~style/varibles.styl"
  .search
    height .72rem
    padding 0 .1rem
    background $bgColor
    .search-input
      padding 0.1rem
      box-sizing border-box
      height .62rem
      width 100%
      line-height .62rem
      text-align center
      border-radius 0.06rem

</style>
