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

const three = resolve => {
	require(['common/test/three'], resolve)
}

const test = resolve => {
	require(['common/test/test'], resolve)
}

const template = resolve => {
	require(['common/test/template'], resolve)
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
		name:'test',
		path:'/test',
		component:test
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
	},
	{
		name:'three',
		path:'/three',
		component:three
	},
	{
		name:'template',
		path:"/sc",
		component:template
	}
]

export default router