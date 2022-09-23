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
    meta: { requiresAuth: true },
    children: [
      {
        path: '/main',
        component: Main,
        meta: { requiresAuth: true }
      },
      {
        path: '/main2',
        component: Main2,
        meta: { requiresAuth: true }
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
  console.log(from)
  const isToken = localStorage.getItem('token')
  if (to.path === '/login') { // 如果是登录页，则跳过验证
    console.log(from.fullPath)
    
    isToken ? next({ path: from.fullPath }) : next() // 必不可少
    return // 以下的代码不执行
  }
  if (to.meta.requiresAuth && !isToken) { // 判断该页面是否需要登陆 // 判断登陆状态
    next({ path: '/login',query:{ key: to.path } }) // 如果未登录，则跳转到登录页
  } 
  else {
    next() // 如果已经登陆，那就可以跳转
  }
})
export default router
