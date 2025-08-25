import { createRouter, createMemoryHistory } from 'vue-router'
import Popup from '../popup/Popup.vue'

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Popup,
    }
  ],
})

export default router
