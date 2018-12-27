import Home from '@/components/Home'
import About from '@/components/About'
import Services from '@/components/Services'

export const routes = [
  {
    path: '/',
    alias: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/services',
    name: 'Services',
    component: Services
  }
]
