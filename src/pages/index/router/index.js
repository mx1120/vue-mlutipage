import Vue from 'vue'
import Router from 'vue-router'
import list from './map/list'

const dir = resolve => {
	require(['common/dir/dir.vue'], resolve)
}

const slot = resolve => {
	require(['@/components/slot/divSlot'], resolve)
}

Vue.use(Router)

let routes = [
	{
		name: 'dir',
		path: '/dir',
		component: dir,
		meta: {
			Individual: 'true'
		}
	},
	{
		name: 'slot',
		path: '/slot',
		component: slot
	}
]

routes = routes.concat(list)

export default new Router({
    mode:"history",
	scrollBehavior () {
		return { x: 0, y: 0 }
	},
    routes,
})
