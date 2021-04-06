<template>
  <ul class="list">
    <li class="item" :key="key" v-for="(item,key) in cities">{{key}}</li>
  </ul>
</template>

<script>
  export default {
    name: "CityAlphabet",
    props:{
      cities:{
        type:Object
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import "~style/varibles.styl"
  .list
    display flex
    flex-direction column
    justify-content center
    position absolute
    right: 0
    top: 1.58rem
    bottom 0
    width .4rem
    .item
      line-height .4rem
      text-align center
      color $bgColor


</style>
