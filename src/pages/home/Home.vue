<template>
    <div>
      <home-header></home-header>
      <home-swiper></home-swiper>
      111
    </div>
</template>

<script>
    import HomeHeader from "@/components/header/Header";
    import HomeSwiper from '@/components/swiper/MySwiper'
    export default {
      name: "Home",
      components: {HomeHeader,HomeSwiper}
    }
</script>

<style scoped>

</style>
