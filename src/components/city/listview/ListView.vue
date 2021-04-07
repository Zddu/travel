<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-top-bottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-top-bottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper"
               @click="handleCityClick(item.name)"
               :key="item.id" v-for="item in hotCities">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" :ref="key" :key="key" v-for="(item,key) in cities">
        <div class="title border-top-bottom">{{key}}</div>
        <ul class="item-list">
          <li class="item border-bottom"  @click="handleCityClick(innerItem.name)" :key="innerItem.id" v-for="innerItem in item">
            {{innerItem.name}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState,mapMutations} from 'vuex'
  import Bscroll from 'better-scroll'
  export default {
    name: "ListView",
    props:{
      cities:{
        type:Object
      },
      hotCities:{
        type: Array
      },
      letter:{
        type:String
      }
    },
    computed:{
      ...mapState({
        currentCity:'city'
      })
    },
    mounted() {
      this.scroll = new Bscroll(this.$refs.wrapper,{
        click:true
      })
    },
    methods:{
      handleCityClick(city){
        this.changeCity(city);
        this.$router.push('/');
      },
      ...mapMutations(['changeCity'])
    },
    watch:{
      letter(){
        if (this.letter){
          const element = this.$refs[this.letter][0];
          this.scroll.scrollToElement(element)
        }
      }
    }
  }
</script>
<style scoped lang="stylus">
  @import "~style/varibles.styl"
  .border-top-bottom
    &:before
      border-color #ccc

    &:after
      border-color #ccc

  .border-bottom
    &:before
      border-color #ccc

  .list
    overflow hidden
    position absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0

    .title
      padding-left .2rem
      background #eee
      color #666
      font-size .26rem
      line-height .54rem
    .button-list
      overflow hidden
      padding .1rem .6rem .1rem .1rem

      .button-wrapper
        float left
        width 33.33%

        .button
          text-align center
          padding .1rem 0
          margin .1rem
          border .02rem solid #ccc
          border-radius .06rem

    .item-list
      .item
        line-height .76rem
        padding-left .2rem


</style>
