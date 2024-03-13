import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ModalsView from '../views/ModalsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/posts',
      name: 'posts',
      component: () => import('../views/PostsView.vue')
    },
    {
      path: '/modals',
      name: 'modals',
      component: ModalsView
    },
    {
      path: '/postDetail/:id',
      name: 'postDetail',
      component: () => import('../views/PostDetailView.vue') // Lazy load
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
