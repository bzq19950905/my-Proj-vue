import * as actions from './action'
import * as getters from './getters'
import * as mutations from './mutations'
const state = {
  useName: 'login',
  count: 0
}
export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
