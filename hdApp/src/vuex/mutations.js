export default {
  add(state) {
    state.count++
  },
  cut(state) {
    state.count--
  },
  PAGETITLE(state, payload) {
    console.log(payload)
    state.conManage.title = payload
  }
}
