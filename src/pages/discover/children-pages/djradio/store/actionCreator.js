import * as actionTypes from './constants'
import { getDjRadioCategory, getRecommendRadios, getRadiosTopList } from '@/service/djradio'
const changeDjRadioCategoryAction = res => ({
    type: actionTypes.DJ_RADIO_CHANGE_CATEGORY,
    djRadioCategory: res.categories
})
const changeRadioRecommendAction = res => ({
    type: actionTypes.DJ_RADIO_CHANGE_RECOMMEND,
    radioRecommend: res.djRadios
})
const changeRadioTopListAction = res => ({
    type: actionTypes.DJ_RADIO_CHANGE_TOP_LIST,
    radioTopList: res.toplist
})
export const changeCurrentIdAction = id => ({
    type: actionTypes.DJ_RADIO_CHANGE_CURRENT_ID,
    currentId: id
})
//获取电台分类
export const getDjRadioCategoryAction = () => {
    return dispatch => {
        getDjRadioCategory().then(res => {
            dispatch(changeDjRadioCategoryAction(res))
        })
    }
}
//获取推荐电台
export const getRadioRecommendAction = () => {
    return dispatch => {
        getRecommendRadios().then(res => {
            dispatch(changeRadioRecommendAction(res))
        })
    }
}
//获取电台排行
export const getRadioTopListAction = (limit) => {
    return dispatch => {
        getRadiosTopList(limit).then(res => {
            dispatch(changeRadioTopListAction(res))
        })
    }
}