import Home from '../views/Login.vue'
import Survey from '../views/Survey'
import Login from '../views/Login'

export default [
  {
    path: '/',
    name: 'login',
    component: Login,
  },
  {
    path: '/survey',
    name: 'survey',
    component: Survey,
    meta: {
      secure: true,
    },
  }
]

