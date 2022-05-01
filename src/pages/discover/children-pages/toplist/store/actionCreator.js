import * as actionTypes from './constants'
import { getAllTopListCategory, getTopListDetail } from '@/service/toplist'
const changeTopListCategoryAction = res => ({
    type: actionTypes.TOPLIST_CHANGE_TOPLIST_CATEGORY,
    topListCategory: res.list
})
const changeTopListDetailAction = res => ({
    type: actionTypes.TOPLIST_CHANGE_TOPLIST_DETAIL,
    topListDetail: res.playlist
})
export const changeActiveIndexAction = index => ({
    type: actionTypes.TOPLIST_CHANGE_ACTIVE_INDEX,
    activeIndex: index
})
//获取排行榜分类
export const getAllTopListCategoryAction = () => {
    return dispatch => {
        getAllTopListCategory().then(res => {
            dispatch(changeTopListCategoryAction(res))
        }).catch(err => {
            console.log(err)
        })
    }
}
//获取排行榜详情
export const getTopListDetailAction = id => {
    return dispatch => {
        getTopListDetail(id).then(res => {
            dispatch(changeTopListDetailAction(res))
        }).catch(err => {
            console.log(err)
        })
    }
}