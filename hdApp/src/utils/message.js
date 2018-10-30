import Vue from 'vue'
// 组件
const Main = Vue.component('Tips', {
  data () {
    return {
      message: '',
      duration: 3000,
      timer: null,
      onClose: null
    }
  },
  mounted () {
    // 开始定时器
    this.stratTimer()
  },
  methods: {
    stratTimer () {
      // 判断定时器
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          this.close()
        }, this.duration);
      }
    },
    close () {
      // 清除data属性数据
      this.$destroy(true)
      // 删除页面的节点
      document.body.removeChild(this.$el)
    }
  },
  template: '<div>{{message}}</div>'
})

/*******************************************/

// 初始化
let instance;
let instances = [];
let i = 1;
// 继承Vue实例
const MessageInstance = Vue.extend(Main)

const Message = (opts) => {
  if (typeof opts === 'string') {
    // 改变内容
    opts = {
      message: opts
    }
  }
  // 实例
  instance = new MessageInstance({
    data: opts
  })
  // 用户事件
  let userClose = opts.onClose;
  let id = `hd_id${i++}`;
  // 记录实例的历史
  instance.vm = instance.$mount();
  

instance.id = id;
  instances.push(instance.vm);
  // 用户点击关闭
  opts.onClose = () => {
    Message.close(id, userClose)
  }
  Message.close = (id, userClose) => {
    for (let i = 0; i < instances.length; i++) {
      if (id === instances[i].id) {
        instances.splice(i, 1);
      }
      break;
    }
  }
  Message.close()
  // 页面添加
  document.body.appendChild(instance.vm.$el)
}
export default Message;