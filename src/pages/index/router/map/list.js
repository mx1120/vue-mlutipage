/**
 * Created by Administrator on 2017/11/8.
 */
const list = resolve => {
	require(['components/commonList/list'], resolve)
}
const one = resolve => {
	require(['common/test/one'], resolve)
}

const two = resolve => {
	require(['common/test/two'], resolve)
}

const router = [
	{
		name:"list",
		path:'/list',
		component:list,
		meta:{
			keepAlive:true
		}
	},
	{
		name:"one",
		path:'/one',
		component:one
	},
	{
		name:'two',
		path:'/two',
		component:two
	}
]

export default router