/*!
 * @file base.js
 * @brief 公用的数据逻辑  包块微信登录 接口登录等
 * @author hujun
 * @date 2018-8-8
 */

import wepy from 'wepy'

import { getUserInfo, userRegister, editMaterial } from '../action/action'
import { getStorage } from '../utils/utils'

export default class BaseMixin extends wepy.mixin {
  data = {}
  async getRouterUserInfo(uid) {
    let userInfo = await getStorage('userInfo')
    if (userInfo) {
      return userInfo
    } else {
      const data = await getUserInfo(uid)
      return data
    }
  }
  // 获取微信用户信息
  async getWXUserInfo() {
    let WXUserInfo = await getStorage('WXUserInfo')
    return WXUserInfo
  }
  // 用户注册
  async userRegister(obj) {
    let wxUserInfo = await this.getWXUserInfo()
    let user = await userRegister({
      name: wxUserInfo.nickName,
      ...obj
    })
    return wepy
      .setStorage({
        key: 'uid',
        data: user.uid
      })
      .then(() => true)
  }
  // 编辑资料
  async editUser(obj) {
    let { data } = await wepy.getStorage({
      key: 'uid'
    })
    let result = await editMaterial({
      uid: data,
      ...obj
    })
    if (result.errcode === 0) {
      wepy.removeStorageSync('userInfo')
    }
    return result
  }
}
