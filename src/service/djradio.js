import request from './request'
//获取电台分类
export function getDjRadioCategory () {
    return request({
        url: 'dj/catelist'
    })
}
//获取推荐节目
export function getRecommendRadios () {
    return request({
        url: '/dj/recommend'
    })
}
//获取电台排行榜
export function getRadiosTopList (limit) {
    return request({
        url: '/dj/program/toplist',
        params: {
            limit
        }
    })
}