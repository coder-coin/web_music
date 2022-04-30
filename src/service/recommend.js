import request from './request'
//获取推荐页的轮播图
export function getRecommendBanner () {
    return request({
        url: '/banner'
    })
}
//获取热门推荐
export function getHotRecommend (limit) {
    return request({
        url: '/personalized',
        params: {
            limit
        }
    })
}
//获取新碟上架
export function getNewAlbum (limit) {
    return request({
        url: '/top/album',
        params: {
            limit
        }
    })
}
//获取榜单，idx: 0 为新歌榜，1为热歌榜，2为原创榜,3为飙升榜
export function getTopList (idx) {
    return request({
        url: '/top/list',
        params: {
            idx
        }
    })
}
//获取人们歌手
export function getHotArtists (limit) {
    return request({
        url: 'top/artists',
        params: {
            limit
        }
    })
}