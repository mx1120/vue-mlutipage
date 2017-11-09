/**
 * Created by Administrator on 2017/11/7.
 */

import * as types from './mutation-types'

const mutations = {
	[types.TYPE](state, type) {
		state.type = type
	},
	[types.PROFILE](state, info) {
		state.profile = {...state.profile, ...info}
	},
	[types.BOOK](state, book){
		state.book = {...state.book, ...book}
	},
	[types.GETCATALOG](state, catalog){
		if(catalog.length == 0){
			state.catalogResource = false
		}else {
			state.catalogResource = true
			state.catalog = state.catalog.concat(catalog)
		}

	}
}

export default mutations

