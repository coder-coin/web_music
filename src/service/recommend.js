import request from './request'

export function getRecommendBanner () {
    return request({
        url: '/banner'
    })
}