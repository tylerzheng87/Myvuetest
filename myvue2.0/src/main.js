import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router';
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'
import { RecycleScroller } from 'vue-virtual-scroller'


import mock from './mock/index.js'

Vue.use(ElementUI);
Vue.component('RecycleScroller', RecycleScroller)
Vue.config.productionTip = false

new Vue({
  mock,
  router,
  render: h => h(App),
}).$mount('#app')
