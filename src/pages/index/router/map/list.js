/**
 * Created by Administrator on 2017/11/8.
 */
const list = resolve => {
	require(['components/beatBall/list'], resolve)
}

const router = [
	{
		path:'/list',
		component:list
	}
]

export default router