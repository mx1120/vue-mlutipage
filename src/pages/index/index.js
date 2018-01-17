// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import config from 'config/config.js'
import store from '@/stores'
import errorEruda from 'error_eruda'

Vue.config.productionTip = false

errorEruda.config({
	jsUrl: '//cdn.jsdelivr.net/eruda/1.2.2/eruda.min.js',//eruda地址
	repUrl: "http://127.0.0.1:8080/",//错误上报地址
	repMsg: 'test',//错误上报msg前缀，一般用于标识业务类型
	entry: "#app"
})


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


Vue.directive('focus', {
	inserted(el) {
		el.focus()
	}
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
