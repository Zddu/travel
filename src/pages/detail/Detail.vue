<template>
  <div>
    <detail-header></detail-header>
    <detail-banner></detail-banner>
    <div class="content"></div>
  </div>
</template>

<script>

  import DetailBanner from "@/components/deatil/Banner";
  import DetailHeader from "@/components/deatil/Header";

  export default {
    name: "Detail",
    components: {DetailHeader, DetailBanner}
  }
</script>

<style scoped lang="stylus">
  .content
    height 50rem

</style>
