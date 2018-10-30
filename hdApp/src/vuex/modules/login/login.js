import { Login } from "@/api/index.js";
export default {
  namespaced: 'login',
  state: {
    title: '登陆页',
    loginText:''
  },
  actions: {
   async getUser({commit},payload){
     const data = await Login('/api/login',payload)
     commit('LOGIN_TEXT',data)
     console.log(data)
     localStorage.setItem('token',data.uid)
     if (String(data.Code) === '1') {
       return 1
     }
    //  Login("/api/login", payload).then(res => {
    //   console.log(res);
    //   if(res.errCode){
    //     commit('LOGIN_TEXT',res.msg)
    //   }else{
    //     localStorage.setItem('uid',res.uid)
    //     payload.$router.push('/home')
    //   }
    // });
   }
  },
  getters: {
  },
  mutations: {
    LOGIN_TEXT(state,payload){
      state.loginText = payload
    }
  }
}
