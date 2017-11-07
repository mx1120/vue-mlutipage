/**
 * Created by Administrator on 2017/11/2.
 */
import Vue from 'vue'
import Router from 'vue-router'
const test = resolve => {
	require(['@/components/test'], resolve)
}

Vue.use(Router)

export default new Router({
	mode:"history",
	routes: [
		{
			path:'/test',
			component:test
		}
	]
})
