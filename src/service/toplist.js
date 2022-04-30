import request from './request'
//获取所有排行榜
export function getAllTopListCategory () {
    return request({
        url: '/toplist'
    })
}