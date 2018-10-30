import {
  ADD,
  CUT,
  PageTitle
} from './mutatuin_type'

export default {
  [ADD]({ commit }, payload) {
    commit('add')
  },
  [CUT]({ commit }) {
    commit('cut')
  },
  [PageTitle]({ commit }, payload) {
    commit('PAGETITLE', payload)
  }
}
