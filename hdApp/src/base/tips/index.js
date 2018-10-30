import Vue from 'vue'
import Main from './tips.vue'
let current = 1
let instance
let instances = []
const message = (opt) => {
  if (typeof opt === 'string') {
    opt = {
      message: opt
    }
  }
  const id = `hd_id${current++}`
  const MessageInstance = Vue.extend(Main)
  instance = new MessageInstance({
    data: opt
  })
  instance.id = id
  instance.vm = instance.$mount()
  let userOnClose = opt.onClose
  opt.onClose = () => {
    message.close(id, userOnClose)
  }
  document.body.appendChild(instance.vm.$el)
  instances.push(instance)
  return instance.vm
}
message.close = (id, userClose) => {
  for (let i = 0, len = instances.length; i < len; i++) {
    if (id === instances[i].id) {
      if (typeof userClose === 'function') {
        userClose(instances[i])
      }
      instances.splice(i, 1)
      break
    }
  }
}
export default message
