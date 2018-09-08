import wepy from 'wepy'
import { API_HOST } from '../common/config'
import * as http from '../utils/httpClient'

// 获取用户信息
export const getUserInfo = (url) => {
  return http.get(url).then(res => res)
}

// 编辑资料
export const editMaterial = data => {
  return wepy
    .request({
      url: `${API_HOST}/api/user/edit`,
      method: 'POST',
      data: data
    })
    .then(res => {
      return res.data
    })
}

// 上传文件
export const upLoadFile = (obj, callback) => {
  return wx
    .uploadFile({
      url: `${API_HOST}/api/upload/avatar`,
      method: 'POST',
      filePath: obj.filePath,
      name: obj.name,
      success: callback
    })
}

// 用户注册
export const userRegister = (obj) => {
  return http.post(`${API_HOST}/api/login/register`, obj).then(res => res)
}
