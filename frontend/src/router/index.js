import { createRouter, createWebHistory } from 'vue-router'
import EmployeeCrud from '../components/EmployeeCrud.vue'

const routes = [
  {
    path: '/',
    name: 'EmployeeCrud',
    component: EmployeeCrud
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
