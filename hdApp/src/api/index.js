import http from '../utils/login/login.js'
// let API_HOST = 'http://localhost:8088'
let API_URL = 'http://47.95.13.141:8088'
// if (process.env.NODE_ENV === 'development') {
//   API_HOST = 'http://localhost:8088'
// } else {
//   API_HOST = 'http://47.95.13.141:8088'
// }
// 内容管理列表数据
const getConList = (url, params) => {
  return http.post(`${API_URL}${url}`, params).then(res => res).catch(err => err)
}
// 登陆
const Login = (url, params) => {
  return http.post(`${API_URL}${url}`, params).then(res => res).catch(err => err)
}
export {
  getConList,
  Login
}
