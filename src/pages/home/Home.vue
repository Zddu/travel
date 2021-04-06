<template>
    <div>
      <home-header></home-header>
      <home-swiper></home-swiper>
      <home-icons></home-icons>
      <home-recommend></home-recommend>
      <home-weekend></home-weekend>
    </div>
</template>

<script>
    import HomeHeader from "@/components/header/Header";
    import HomeSwiper from '@/components/swiper/MySwiper'
    import HomeIcons from "@/components/Icons/Icons";
    import HomeRecommend from "@/components/recommend/Recommend";
    import HomeWeekend from "@/components/weekend/Weekend";

    export default {
      name: "Home",
      components: {HomeWeekend, HomeRecommend, HomeIcons, HomeHeader,HomeSwiper}
    }
</script>

<style scoped>

</style>
