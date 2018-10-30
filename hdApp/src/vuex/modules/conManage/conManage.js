import { getHome,getConList } from '@/api/index'
export default {
  namespaced: 'conManage',
  state: {
    title: '内容管理',
    listData: [],
    listPage: { pageSize: 5, pageNum: 1, type: 2 },
    listLength: 0,
    isLogin: false,
    LoginText: '暂无数据',
    isUid: true
  },
  actions: {
    async conBtain({ commit, rootState }, payload) {
      if(rootState.conManage.isUid){
        let page = rootState.conManage.listPage
        getConList('/api/list', page).then(res=>{
          if (res.errCode) {
          commit('CON_LOGIN')
          commit('CON_LOGIN_TEXT', res.errMsg)
          } else {
          let Data = res.data
          setTimeout(function () {
          commit('CONOBTAIN', Data)
          commit('CON_LOGIN')
          }, 1500)
          commit('CON_LENGTH', Data.lengthAll)
          }
        }).catch(err=>{
          console.log(err)
        })
      }
    },
    conBtainPage({ commit }, payload) {
      commit('CONBTAIN_PAGE', payload)
      commit('CON_LOGIN')
    },
    conType({ commit }, payload) {
      commit('CON_TYPE')
      commit('CON_LOGIN')
    }
  },
  getters: {
    conGlistData(state) {
      return state.listData
    }
  },
  mutations: {
    CONOBTAIN(state, payload) {
      state.listData = payload
    },
    CONBTAIN_PAGE(state, payload) {
      state.listPage = payload
    },
    CON_LENGTH(state, payload) {
      state.listLength = payload
    },
    CON_LOGIN(state, payload) {
      state.isLogin = !state.isLogin
    },
    CON_LOGIN_TEXT(state, payload) {
      state.LoginText = payload
    },
    CON_TYPE(state, payload) {
      if (Number(state.listPage.type) === 1) {
        state.listPage.type = 2
      } else {
        state.listPage.type = 1
      }
    }
  }
}
