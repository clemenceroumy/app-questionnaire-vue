import Home from '../views/Login.vue'
import Survey from '../views/Survey'
import Login from '../views/Login'
import Result from '../views/Result'
import LoginAdmin from '../views/LoginAdmin'

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

