/**
 * Created by Administrator on 2017/11/7.
 */
import * as types from './mutation-types'

export const getUser_Info = ({commit, state}, {userInfo}) => {
	commit(types.USER_INFO, userInfo)
}