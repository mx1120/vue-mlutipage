/**
 * Created by Administrator on 2017/11/7.
 */
import * as types from './mutation-types'
import Axios from 'axios'



//个人信息
export const getProfile = ({commit}) => {
	Axios.post(DOMAIN_API_COM_API_DJ_URLROOT + '/account/profile')
		.then(res => {
			if(res.data.response == 'ok'){
				commit(types.PROFILE, res.data.data)
			}else {
				console.info(res.data.message)
			}
		})
}

//请求教材ID
export const getBook = ({commit}, {sub_id, type}) => {
	Axios.post(DOMAIN_API_COM_API_DJ_URLROOT + '/account/book',{"subject_id":sub_id,'type':type})
		.then(res => {
			if(res.data.response == 'ok'){
				commit(types.BOOK, res.data.data)
			}else {
				commit(types.BOOK, {})
			}
		})
		.catch(error => {
			console.info(error)
		})
}

//请求章节列表
export const getCatalog = ({commit, state}) => {
	Axios.post(DOMAIN_API_YY_API_DJ_URLROOT + '/zy/get_word_catalogs', {'book_id':state.book.id,'type_id':1})
		.then(res => {
			if(res.data.response == 'ok'){
				commit(types.GETCATALOG, res.data.data.chapter)
			}
		})
}
