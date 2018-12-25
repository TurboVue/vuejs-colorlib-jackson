import Home from '@/components/Home'
import About from '@/components/About'

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
  }
]
