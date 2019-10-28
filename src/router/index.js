import Vue from 'vue'
import Router from 'vue-router'
import routes from "./routes";

import PouchDB from 'pouchdb'
var db = new PouchDB('my_database')

Vue.use(Router);

let router = new Router({
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  }
});

router.beforeEach((to, from, next) => handleRoute(to, from, next));

let handleRoute = (to, from, next) => {
  let user

  db.get('user').then((value) => user = value).catch((e) => {
    user = null;
  }).finally(() => {
    if (to.meta !== undefined) {
      if (user === null && to.meta.secure && !to.meta.admin) {
        // User not loggedin
        next({path: '/', replace: true});
      } else {
        next();
      }
    } else {
      next();
    }
  })
};

export default router
