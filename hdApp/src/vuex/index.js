import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import * as modules from './modules'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations,
  actions,
  modules
})
