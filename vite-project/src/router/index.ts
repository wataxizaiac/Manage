import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: '/Main',
        component: () => import('../views/Main.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('../views/Login.vue')
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  // 不需要登录的页面
  const nextRoute = ['register']
  // 获取登陆状态
  const isToken = localStorage.getItem('token')
  if (to.path === '/login') { // 如果是登录页，则跳过验证
    next() // 必不可少
    return // 以下的代码不执行
  }
  if (!nextRoute.includes(to.path)) { // 判断该页面是否需要登陆
    if (!isToken) { // 判断登陆状态
      next({ path: '/login' }) // 如果未登录，则跳转到登录页
    }
    else {
      next() // 如果已经登陆，那就可以跳转
    }
  }
  else { // 其他的无需登陆的页面不做验证
    next()
  }
})
export default router
