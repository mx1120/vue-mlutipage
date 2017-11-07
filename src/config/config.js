/**
 * Created by Administrator on 2017/11/7.
 */
import FastClick  from  'fastclick'
import Axios from 'axios'
import Vue from 'vue'
// require('./flexible.js')

//解决手机点击有有延迟
FastClick.attach(document.body)

//使用axios
Vue.prototype.$axios = Axios

//对所有异步请求进行拦截操作，添加或者删除相应参数

//请求拦截
Axios.interceptors.request.use(
	config => {
		console.info(config)
		console.info('this is base config request')
	},
	error => {
		console.info(error)
	}
)

//返回拦截
Axios.interceptors.response.use(
	res => {
		console.info(res)
		console.info('this is base config response')
	},
	error => {
		console.info(error)
	}
)



