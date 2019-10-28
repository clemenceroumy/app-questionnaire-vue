import Home from '../views/Home.vue'
import Survey from '../views/Survey'

export default [
  {
    path: '/',
    name: 'home',
    component: Home,
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

