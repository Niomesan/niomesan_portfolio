import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/artworks',
      name: 'artworks',
      component: () => import('../views/Artworks.vue'),
    },
    {
      path: '/websites',
      name: 'websites',
      component: () => import('../views/Websites.vue'),
    },
    {
      path: '/past_commissions',
      name: 'commissions',
      component: () => import('../views/Commissions.vue'),
    },
  ],
})

export default router
