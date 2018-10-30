import Login from './login'
import message from '@/base/tips'
export default {
  dispatchEventStroage () {
    const signSetItem = localStorage.setItem
    localStorage.setItem = function (key, newValue) {
      let setEvent = new Event('setItemEvent')
      setEvent.key = key
      setEvent.newValue = newValue
      window.dispatchEvent(setEvent)
      signSetItem.apply(this,arguments)
    }
  },
  install(Vue) {
    Object.defineProperty(Vue.prototype, '$http', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: Login
    })
    Object.defineProperty(Vue.prototype, '$msg', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: message
    })
  }
}
