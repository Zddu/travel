<template>
    <div>
      <home-header></home-header>
      <home-swiper></home-swiper>
      <home-icons></home-icons>
    </div>
</template>

<script>
    import HomeHeader from "@/components/header/Header";
    import HomeSwiper from '@/components/swiper/MySwiper'
    import HomeIcons from "@/components/Icons/Icons";
    export default {
      name: "Home",
      components: {HomeIcons, HomeHeader,HomeSwiper}
    }
</script>

<style scoped>

</style>
