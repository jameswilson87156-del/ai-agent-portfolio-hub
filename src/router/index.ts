import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectsView.vue'),
    },
    {
      path: '/projects/devflow',
      name: 'devflow-detail',
      component: () => import('../views/DevFlowDetailView.vue'),
    },
    {
      path: '/projects/mcp-gateway',
      name: 'mcp-gateway-detail',
      component: () => import('../views/McpGatewayDetailView.vue'),
    },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash }
    }

    return { top: 0 }
  },
})

export default router
