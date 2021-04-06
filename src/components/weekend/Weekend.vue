<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" :key="item.id" v-for="item in recommendList">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Weekend",
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
  .title
    line-height .8rem
    background #eee
    margin-top .2rem
    text-indent .2rem
  .item-img-wrapper
    overflow hidden
    height 0
    padding-bottom 33.9%
    .item-img
      width 100%
  .item-info
    padding .1rem
    .item-title
      line-height .54rem
      font-size .32rem
      ellipsis()
    .item-desc
      line-height .4rem;
      color #ccc
      ellipsis()
</style>
