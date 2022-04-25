import request from './request'

export function getRecommendBanner () {
    return request({
        url: '/banner'
    })
}
export function getHotRecommend (limit) {
    return request({
        url: '/personalized',
        params: {
            limit
        }
    })
}