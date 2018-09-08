/*!
 * @file ota.js
 * @brief 数组 对象等数据的二次过滤
 * @author hujun
 * @date 2018-8-8
 */

export const DeleteObjectKeys = (source = {}, target) => {
  let edit = {}
  Object.keys(source).forEach(val => {
    if (target[val]) {
      edit[val] = source[val]
    }
  })
  return edit
}

export const toArray = len => {
  return Array.from({ length: len }, (val, key) => {
    return key + 1 + '年'
  })
}
