<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
    <city-alphabet></city-alphabet>
  </div>
</template>

<script>
  import CityHeader from "@/components/city/header/Header";
  import CitySearch from "@/components/city/Search/Search";
  import CityList from "@/components/city/listview/ListView";
  import CityAlphabet from "@/components/city/alphabet/Alphabet";

  export default {
    name: "City",
    components: {CityAlphabet, CitySearch, CityHeader, CityList}
  }
</script>

<style scoped lang="stylus">
</style>
