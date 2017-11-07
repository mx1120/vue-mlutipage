/**
 * Created by Administrator on 2017/11/7.
 */
import FastClick  from  'fastclick'
import Axios from 'axios'
import Vue from 'vue'
import storage from 'good-storage'
import betterScroll from 'vue2-better-scroll'
import searchToMap from 'assets/js/searchMap.js'
// require('./flexible.js')

Vue.use(betterScroll)

//解决手机点击有有延迟
FastClick.attach(document.body)

//url传参截取(已query的形式获取参数)
const search = searchToMap()

//使用axios异步请求
Vue.prototype.$axios = Axios
//storage方法
Vue.prototype.$storage = storage

Promise.prototype.finally = function (cb) {
	let Pro = this.constructor
	return this.then(
		val => Pro.resolve(cb()).then(() => val),
		error => Pro.resolve(cb()).then(() => {throw error})
	)
}

//对所有异步请求进行拦截操作，添加或者删除相应参数

//请求拦截
Axios.interceptors.request.use(
	config => {
		console.info('this is base config request')
	},
	error => {
		console.info(error)
	}
)

//返回拦截
Axios.interceptors.response.use(
	res => {
		console.info('this is base config response')
	},
	error => {
		console.info(error)
	}
)



