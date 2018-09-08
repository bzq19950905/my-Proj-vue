import * as api from '../api/api'
import { API_HOST } from '../common/config'

function API(url) {
  let path = API_HOST + url
  return path
}

/***
 * 获取用户信息
 */
export const getUserInfo = async function(uid) {
  // 异步获取远程数据
  let url = API(`/api/user/info/uid/${uid}`)
  let result = await api.getUserInfo(url)
  if (result && !result.errcode) {
    return result.data
  }
}

/***
 * 编辑资料
 */
export const editMaterial = async function(data) {
  // 异步获取远程数据
  let result = await api.editMaterial(data)
  return result
}

/***
 * 上传文件
 */
export const upLoadFileAction = async function(obj, callback) {
  await api.upLoadFile(obj, callback)
}

/***
 * 用户注册
 */
export const userRegister = async function(obj) {
  let result = await api.userRegister(obj)
  if (result && result.errcode === 0) {
    return result.data
  }
}
