import * as actionTypes from './constants'
import { getRecommendBanner, getHotRecommend } from '@/service/recommend'
//修改推荐页的轮播图
export const changeRecommendBannerAction = (res) => ({
    type: actionTypes.RECOMMEND_CHANGE_TOP_BANNER,
    banner: res.banners
})
//获取推荐页的轮播图
export const getRecommendBannerAction = () => {
    return dispatch => {
        getRecommendBanner().then(res => {
            dispatch(changeRecommendBannerAction(res))
        }).catch(err => {
            console.log(err)
        })
    }
}
//改变热门推荐
export const changeHotRecommendAction = (res) => ({
    type: actionTypes.RECOMMEND_CHANGE_HOT_RECOMMEND,
    hotRecommend: res.result
})
//获取热门推荐
export const getHotRecommendAction = (limit) => {
    return dispatch => {
        getHotRecommend(limit).then(res => {
            console.log(res.result)
            dispatch(changeHotRecommendAction(res))
        }).catch(err => {
            console.log(err)
        })
    }
}