<template>
  <ul class="list">
    <li class="item"
        @click="handleLetterClick"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        :ref="item"
        :key="index" v-for="(item,index) in letters">{{item}}</li>
  </ul>
</template>

<script>
  export default {
    name: "CityAlphabet",
    props:{
      cities:{
        type:Object
      }
    },
    computed:{
      letters(){
        const letters = []
        for (let i in this.cities) {
          letters.push(i)
        }
        return letters;
      }
    },
    data(){
      return{
        touchStatus:false,
        startY:0,
        timer:null
      }
    },
    updated(){
      this.startY = this.$refs['A'][0].offsetTop
    },
    methods:{
      handleLetterClick(e){
        this.$emit('change',e.target.innerText)
      },
      handleTouchStart(){
        this.touchStatus = true
      },
      handleTouchMove(e){
        if (this.touchStatus) {
          if (this.timer) {
            clearTimeout(this.timer)
          }
          //函数节流
          this.timer = setTimeout(()=>{
            const touchY = e.touches[0].clientY - 79;
            const index = Math.floor((touchY - this.startY) / 20);
            if (index >= 0 && index < this.letters.length) {
              this.$emit('change',this.letters[index])
            }
          },16)
        }
      },
      handleTouchEnd(){
        this.touchStatus = false
      },
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
