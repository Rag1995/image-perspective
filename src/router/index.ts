import { createRouter, createWebHashHistory } from 'vue-router'
import routes from '~pages'

const history = createWebHashHistory(import.meta.env.BASE_URL)

const router = createRouter({
  history,
  routes,
  scrollBehavior(to) {
    return {
      ...(to.hash ? { el: to.hash } : { left: 0, top: 0 }),
      behavior: 'smooth',
    }
  },
})

export default router
