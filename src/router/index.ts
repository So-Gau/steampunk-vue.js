import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NavbarMobile from '@/components/NavbarMobile.vue'
import SelenaViewVue from '@/views/SelenaView.vue'
import FantasyViewVue from '@/views/FantasyView.vue'
import HerokaViewVue from '@/views/HerokaView.vue'
import ClarkViewVue from '@/views/ClarkView.vue'
import StellarViewVue from '@/views/StellarView.vue'
import ContactViewVue from '@/views/ContactView.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Heroka',
      name: 'heroka',
      component: HerokaViewVue
    },
    {
      path: '/Selena',
      name: 'selena',
      component: SelenaViewVue
    },
    {
      path: '/Fanstasy',
      name: 'fantasy',
      component: FantasyViewVue
    },
    {
      path: '/Clark',
      name: 'clark',
      component: ClarkViewVue
    },
    {
      path: '/Stellar',
      name: 'stellar',
      component: StellarViewVue
    },
    {
      path: '/Contact',
      name: 'contact',
      component: ContactViewVue
    },
    
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
