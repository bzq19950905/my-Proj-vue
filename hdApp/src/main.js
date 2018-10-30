// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import serivce from './utils/login/serivce'
import 'element-ui/lib/theme-chalk/index.css'
import particles from '../static/js/particles.min.js'
import eventBus from './utils/Bus.js'
import store from './vuex/index.js'
import input from './base/input/index.vue'
Vue.config.productionTip = false
Vue.use(particles)
Vue.use(serivce)
// 为了解决setitem 让其立即刷新的方法
serivce.dispatchEventStroage()
Vue.use(ElementUI)
Vue.use(eventBus)
Vue.component('au-input', input)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
