/*!
 * @file util.js
 * @brief 全局公用方法的封装
 * @author hujun
 * @date 2018-8-8
 */

import wepy from 'wepy'
export const getStorage = async key => {
  return wepy
    .getStorage({
      key: key
    })
    .then(res => res.data)
    .catch(() => null)
}

export const setStorageSync = (key, value) => {
  wepy.setStorageSync(key, value)
}
