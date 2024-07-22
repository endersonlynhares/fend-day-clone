import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CheckinView from '../views/CheckinView.vue'
import OrdersView from '../views/OrdersView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/participantes/:typeCheckin',
      name: 'checkin',
      component: CheckinView,
      props: true
    },
    {
      path: '/orders',
      name: 'qr_code',
      component: OrdersView,
      props: {
        typeCheckin: 'qr_code'
      }
    }
  ]
})

export default router
