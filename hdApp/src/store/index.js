import Vue from 'vue'
import VueX from 'vuex'
import Login from './mutations/login/index'
Vue.use(VueX)

const store = new VueX.Store({
  modules: {
    Login: Login
  }
})
export default store
