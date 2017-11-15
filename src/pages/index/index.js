// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import config from 'config/config.js'
import store from '@/stores'

Vue.config.productionTip = false
const history = window.sessionStorage
history.clear()
let historyCount = history.getItem('count') * 1 || 0
history.setItem('/', 0)

router.beforeEach((to, from, next) => {
    const toIndex = history.getItem(to.path)
	const fromIndex = history.getItem(from.path)
	if(toIndex){
		if(!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')){
			store.commit('UPDATE_DIRECTION', {direction: 'forward'})
		}else {
			store.commit('UPDATE_DIRECTION', {direction: 'reverse'})
		}
	}else {
		++historyCount
		history.setItem('count', historyCount)
		to.path !== '/' && history.setItem(to.path, historyCount)
		store.commit('UPDATE_DIRECTION', {direction: 'forward'})
	}
	next()
})



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  // template: '<App/>',
  // components: { App }
  render:h => h(App),
}).$mount('#app')
