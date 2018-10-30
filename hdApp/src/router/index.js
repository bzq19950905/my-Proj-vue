import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const Login = () =>
  import('../components/login/login.vue')
const Home = () =>
  import('../components/home/index.vue')
const ListTpe = () =>
  import('../components/home/list-template.vue')
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login'
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect: '/home/teacherList',
      children: [
        {
          path: '/home/:id',
          name: 'template',
          component: ListTpe,
          props: true
        }
      ]
    }
  ]
})
