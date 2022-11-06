import { createRouter, createWebHistory } from 'vue-router'

// Import Layouts
import FrontendLayout from '@/layouts/Frontend.vue'
import BackendLayout from '@/layouts/Backend.vue'


// Import Views
// Frontend
import Home from '@/views/frontend/Home.vue'
import Login from '@/views/frontend/Login.vue'
import NotFound404 from '@/views/frontend/NotFound404.vue'
import Lab1 from '@/views/frontend/Lab1.vue'

// Backend
import HomeBackend from '@/views/backend/Home.vue'
import CreateFuelPrice from '@/views/backend/CreateFuelPrice.vue'

const routes = [
  // FrontEnd
  {
    path: '/',
    name: 'Home',
    component: FrontendLayout,
    children: [
      {
        path: '',
        component: Home
      }
    ],
    meta: {
      title: 'หน้าหลัก',
      description: 'หน้าหลักระบบคงคลังสินค้า'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: FrontendLayout,
    children: [
      {
        path: '',
        component: Login
      }
    ],
    meta: {
      title: 'เข้าสู่ระบบ',
      description: 'รายละเอียดหน้าเข้าสู่ระบบ'
    }
  },
  {
    path: '/lab1',
    name: 'lab1',
    component: FrontendLayout,
    children: [
      {
        path: '',
        component: Lab1
      }
    ],
    meta: {
      title: 'เข้าสู่ระบบ',
      description: 'รายละเอียดหน้าเข้าสู่ระบบ'
    }
  },
  // Error 404 
  {
    path: "/:catchAll(.*)",
    component: NotFound404,
    meta: {
      title: '404 ไม่พบหน้านี้',
      description: 'รายละเอียดหน้า 404'
    }
  },
  // Backend
  {
    path: '/backend/home',
    name: 'HomeBackend',
    component: BackendLayout,
    children: [
      {
        path: '',
        component: HomeBackend
      }
    ],
    meta: {
      title: 'หน้าหลัก',
      description: 'หน้าหลัก'
    }
  },
  {
    path: '/backend/create',
    name: 'CreateFuelPrice',
    component: BackendLayout,
    children: [
      {
        path: '',
        component: CreateFuelPrice
      }
    ],
    meta: {
      title: 'หน้าหลัก',
      description: 'หน้าหลัก'
    }
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
