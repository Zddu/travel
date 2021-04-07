<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <router-link tag="li" class="item border-bottom" :to="'/detail/'+item.id" :key="item.id" v-for="item in recommendList">
        <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Recommend",
    props: {
      recommendList: {
        type: Array
      }
    },
    data() {
      return {}
    }
  }
</script>

<style scoped lang="stylus">
  @import "~style/mixins.styl"
  .recommend-title
    line-height .8rem
    background #eee
    margin-top .2rem
    text-indent .2rem

  .item
    display flex
    overflow hidden
    height 1.9rem

    .item-img
      width 2.6rem
      height 1.6rem
      padding .1rem

    .item-info
      flex 1
      padding .1rem
      min-width 0

      .item-title
        line-height .54rem
        font-size .32rem
        ellipsis()

      .item-desc
        line-height .4rem;
        color #ccc
        ellipsis()

      .item-button
        background #ff9300
        padding 0 .1rem
        border-radius .16rem
        margin-top .2rem
        color #ffffff
        line-height: .44rem

</style>
