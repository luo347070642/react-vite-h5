import Home from '@/container/Home'
import User from '@/container/User'
import Data from '@/container/Data'
import Login from '@/container/Login'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/user',
    component: User
  },
  {
    path: '/data',
    component: Data
  },
  {
    path: '/login',
    component: Login
  }
]

export default routes
