import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('@/pages/home/Home.vue');
const City = () => import('@/pages/city/City.vue');
const Detail = () => import('@/pages/detail/Detail.vue');
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'Home',
      component:Home
    },{
      path:'/city',
      name:'City',
      component:City
    },{
      path:'/detail/:id',
      name:'Detail',
      component:Detail
    }
  ]
})
