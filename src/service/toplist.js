import request from './request'
//获取所有排行榜种类
export function getAllTopListCategory () {
    return request({
        url: '/toplist'
    })
}
//获取排行榜详情
export function getTopListDetail (id) {
    return request({
        url: '/playlist/detail',
        params: {
            id
        }
    })
}