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
      path: '/projects/ticket-rag',
      name: 'ticket-rag-detail',
      component: () => import('../views/TicketRagDetailView.vue'),
    },
    {
      path: '/projects/promptops',
      name: 'promptops-detail',
      component: () => import('../views/PromptOpsDetailView.vue'),
    },
    {
      path: '/projects/mcp-gateway',
      name: 'mcp-gateway-detail',
      component: () => import('../views/McpGatewayDetailView.vue'),
    },
    {
      path: '/projects/offerflow',
      name: 'offerflow-detail',
      component: () => import('../views/OfferFlowDetailView.vue'),
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
