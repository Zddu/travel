<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :letter="letter" :cities="cities" :hotCities="hotCities"></city-list>
    <city-alphabet @change="handleLetterChange" :cities="cities"></city-alphabet>
  </div>
</template>

<script>
  import CityHeader from "@/components/city/header/Header";
  import CitySearch from "@/components/city/Search/Search";
  import CityList from "@/components/city/listview/ListView";
  import CityAlphabet from "@/components/city/alphabet/Alphabet";
  import axios from 'axios'
  export default {
    name: "City",
    components: {CityAlphabet, CitySearch, CityHeader, CityList},
    data(){
      return{
        cities:{},
        hotCities:[],
        letter:null
      }
    },
    methods:{
      getCityInfo(){
        axios.get('/api/city.json').then(this.handleCityInfo)
      },
      handleCityInfo(res){
        res = res.data;
        if (res.ret && res.data) {
          const data = res.data;
          this.cities = data.cities;
          this.hotCities = data.hotCities
        }
      },
      handleLetterChange(data){
        this.letter = data
      }
    },
    mounted() {
      this.getCityInfo()
    }
  }
</script>

<style scoped lang="stylus">
</style>
