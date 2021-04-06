<template>
  <div>
    <home-header :city="city"></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-weekend :weekendList="weekendList"></home-weekend>
  </div>
</template>

<script>
  import HomeHeader from "@/components/home/header/Header";
  import HomeSwiper from '@/components/home/swiper/MySwiper'
  import HomeIcons from "@/components/home/Icons/Icons";
  import HomeRecommend from "@/components/home/recommend/Recommend";
  import HomeWeekend from "@/components/home/weekend/Weekend";
  import axios from 'axios'

  export default {
    name: "Home",
    components: {HomeWeekend, HomeRecommend, HomeIcons, HomeHeader, HomeSwiper},
    data() {
      return {
        city: '北京',
        swiperList: [],
        iconList:[],
        recommendList:[],
        weekendList:[],
      }
    },
    mounted() {
      this.getHomeInfo()
    },
    methods: {
      getHomeInfo() {
        axios.get('/api/index.json').then(res => {
          res = res.data;
          if (res.ret && res.data) {
            const data = res.data;
            this.swiperList = data.swiperList;
            this.iconList = data.iconList;
            this.recommendList = data.recommendList;
            this.weekendList = data.weekendList;
          }

        })
      }
    }
  }
</script>

<style scoped>

</style>
