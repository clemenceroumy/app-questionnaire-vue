import Home from '../views/Login.vue'
import Survey from '../views/Survey'
import Login from '../views/Login'
import Result from '../views/Result'
import LoginAdmin from '../views/LoginAdmin'
import Dashboard from '../views/Dashboard'

export default [
  {
    path: '/',
    name: 'login',
    component: Login,
  },
  {
    path: '/loginAdmin',
    name: 'loginAdmin',
    component: LoginAdmin,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: {
      admin: true,
      secure: true,
    },
  },
  {
    path: '/survey',
    name: 'survey',
    component: Survey,
    meta: {
      secure: true,
    },
  },
  {
    path: '/result',
    name: 'result',
    component: Result,
    meta: {
      secure: true,
    },
  }
]

