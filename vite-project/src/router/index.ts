import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const Home = () => import('../views/Home/Home.vue')
const Main = () => import('../views/Home/content/Main.vue')
const Main2 = () => import('../views/Home/content/Main2.vue')
const Login = () => import('../views/Login.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Home,
    redirect:'/main',
    children: [
      {
        path: '/main',
        component: Main,
        meta: { 
          requiresAuth: true,
          isShow: true,
          title: '角色列表',
          icon:'More'
        }
      },
      {
        path: '/main2',
        component: Main2,
        meta: { 
          requiresAuth: true,
          isShow: true,
          title: '个人中心',
          icon:'Avatar'
        }
      }
    ]
  },
  {
    path: '/login',
    component: Login
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  // 获取登陆状态
  const isToken = localStorage.getItem('token')
  if (to.path === '/login') { // 如果是登录页，则跳过验证
    isToken ? next({ path: from.fullPath }) : next()
    return 
  }
  if (to.meta.requiresAuth && !isToken) { // 判断该页面是否需要登陆 // 判断登陆状态
    next({ path: '/login',query:{ key: to.path } }) // 如果未登录，则跳转到登录页
  } 
  else {
    next() // 如果已经登陆，那就可以跳转
  }
})
export default router
