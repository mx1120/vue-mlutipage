import Vue from 'vue'
import Router from 'vue-router'
const index = resolve => {
	require(['@/components/index'], resolve)
}

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/index',
      component: index
    }
  ]
})
