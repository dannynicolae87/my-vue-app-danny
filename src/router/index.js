import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import User from '../views/User.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/user/:id', component: User },
  { path: '/:pathMatch(.*)*', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // routes: [
  //   { path: '/', name: 'Home', component: Home },
  //   { path: '/about', name: 'About', component: About },
  //   { path: '/contact', name: 'Contact', component: Contact },
  // { path: '/user/:id', component: User },
  // { path: '/:pathMatch(.*)*', component: NotFound },
  // ], //! rutele pot fi folosite direct aici sau pot fi extrase intr-o constanta separata!
  routes,
})

export default router
