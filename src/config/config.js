/**
 * Created by Administrator on 2017/11/7.
 */
import FastClick  from  'fastclick'
import Axios from 'axios'
import Vue from 'vue'

FastClick.attach(document.body)

Vue.prototype.$axios = Axios

Axios.interceptors.request.use(
	config => {
		console.info(config)
		console.info('this is base config request')
	},
	error => {
		console.info(error)
	}
)

Axios.interceptors.response.use(
	res => {
		console.info(res)
		console.info('this is base config response')
	},
	error => {
		console.info(error)
	}
)


