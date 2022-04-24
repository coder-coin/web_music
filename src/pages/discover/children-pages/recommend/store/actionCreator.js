import * as actionTypes from './constants'
import { getRecommendBanner } from '@/service/recommend'
//修改推荐页的轮播图
export const changeRecommendBanner = (res) => ({
    type: actionTypes.RECOMMEND_CHANGE_TOP_BANNER,
    banner: res.banners
})
//获取推荐页的轮播图
export const getRecommendBannerAction = () => {
    return dispatch => {
        getRecommendBanner().then(res => {
            dispatch(changeRecommendBanner(res))
        }).catch(err => {
            console.log(err)
        })
    }
}