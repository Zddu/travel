<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="item border-bottom" :key="item.id" v-for="item in recommendList">
        <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Recommend",
    data(){
      return{
        recommendList:[
          {
            id:'0001',
            imgUrl:'http://img1.qunarzz.com/sight/p0/1805/78/789e31213399290fa3.water.jpg_256x160_c7b5500c.jpg',
            title:'白石山世界地质公园',
            desc:'壮观悬空玻璃道，抗日少年英雄山,抗日少年英雄山'
          },
          {
            id:'0002',
            imgUrl:'http://img1.qunarzz.com/sight/p0/1805/78/789e31213399290fa3.water.jpg_256x160_c7b5500c.jpg',
            title:'白石山世界地质公园',
            desc:'壮观悬空玻璃道，抗日少年英雄山,抗日少年英雄山'
          },
          {
            id:'0003',
            imgUrl:'http://img1.qunarzz.com/sight/p0/1805/78/789e31213399290fa3.water.jpg_256x160_c7b5500c.jpg',
            title:'白石山世界地质公园',
            desc:'壮观悬空玻璃道，抗日少年英雄山,抗日少年英雄山'
          },{
            id:'0004',
            imgUrl:'http://img1.qunarzz.com/sight/p0/1805/35/35d8ce88ca9b2488a3.water.jpg_256x160_1218274a.jpg',
            title:'山海关老龙头景区',
            desc:'人类历史上的千古奇观'
          },{
            id:'0005',
            imgUrl:'http://img1.qunarzz.com/sight/p0/2005/f7/f79dd4ead02ab9f5a3.water.jpg_256x160_10a2bfea.jpg',
            title:'秦皇岛野生动物园',
            desc:'近距离感受自然与动物的和谐美'
          },
        ],
      }
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
        line-height:.44rem

</style>
