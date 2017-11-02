/**
 * Created by Administrator on 2017/11/2.
 */
import Vue from 'vue'
import Router from 'vue-router'
import hello from '@/components/hello'

Vue.use(Router)

export default new Router({
	mode:"history",
	routes: [
		{
			path:'/hello',
			component:hello
		}
	]
})
