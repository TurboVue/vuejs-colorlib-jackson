import Home from '@/components/Home'
import About from '@/components/About'
import Services from '@/components/Services'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import Experience from '@/components/Experience'

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
  },
  {
    path: '/skills',
    name: 'Skills',
    component: Skills
  },
  {
    path: '/education',
    name: 'Education',
    component: Education
  },
  {
    path: '/experience',
    name: 'Experience',
    component: Experience
  }
]
