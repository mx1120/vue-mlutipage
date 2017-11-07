/**
 * Created by Administrator on 2017/11/2.
 */
import Vue from 'vue'
import App from './App'
import router from './router'
import config from 'config/config.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: { App }
})