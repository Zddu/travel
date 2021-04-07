import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import fastClick from 'fastclick'
import './assets/style/reset.css'
import './assets/style/border.css'
import './assets/style/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'style/swiper.min.css'
Vue.use(VueAwesomeSwiper);
Vue.config.productionTip = false
fastClick.attach(document.body);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
