/**
 * Created by Administrator on 2017/11/7.
 */

import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './action'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
	actions,
	getters,
	state,
	mutations
})