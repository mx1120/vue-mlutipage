/**
 * Created by Administrator on 2017/11/7.
 */

import * as types from './mutation-types'

const mutations = {
	[types.USER_INFO](state, info) {
		state.user_info = {...state.user_info, info}
	}
}

export default mutations

