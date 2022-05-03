import request from './request'
//获取歌单分类
export function getCategory () {
    return request({
        url: '/playlist/catlist'
    })
}
//获取对应歌单的歌曲
export function getCategorySongList (cat = "全部", offset = 0, limit = 35) {
    return request({
        url: "/top/playlist",
        params: {
            cat,
            limit,
            offset
        }
    })
}