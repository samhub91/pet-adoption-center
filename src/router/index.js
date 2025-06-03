import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PetView from '../views/PetView.vue'
import AdoptView from '../views/AdoptView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/pets/:id', name: 'PetView', component: PetView, props: true },
  { path: '/adopt/:id', name: 'AdoptView', component: AdoptView, props: true },
  { path: '/adopt', name: 'AdoptFallback', component: AdoptView } // fallback
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
