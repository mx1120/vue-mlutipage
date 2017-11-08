import Vue from 'vue'
import Router from 'vue-router'
import list from './map/list'

Vue.use(Router)

let routes = []

routes = routes.concat(list)

export default new Router({
  mode:"history",
  routes,
})
