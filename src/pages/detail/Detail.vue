<template>
  <div>
    <detail-header></detail-header>
    <detail-banner></detail-banner>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>

  </div>
</template>

<script>

  import DetailBanner from "@/components/deatil/Banner";
  import DetailHeader from "@/components/deatil/Header";
  import DetailList from "@/components/deatil/List";

  export default {
    name: "Detail",
    components: {DetailList, DetailHeader, DetailBanner},
    data() {
      return {
        list: [
          {
            title: '成人票',
            children:[
              {
                title:'成人三馆联票'
              },{
                title:'成人五馆联票'
              },
            ]
          }, {
            title: '学生票'
          },{
            title: '儿童票'
          },{
            title: '特惠票'
          },
        ]
      }
    }
  }
</script>

<style scoped lang="stylus">
  .content
    height 50rem

</style>
