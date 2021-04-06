<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
  </div>
</template>

<script>
    import CityHeader from "@/components/city/header/Header";
    import CitySearch from "@/components/city/Search/Search";
    export default {
        name: "City",
      components: {CitySearch, CityHeader}
    }
</script>

<style scoped lang="stylus">
</style>
