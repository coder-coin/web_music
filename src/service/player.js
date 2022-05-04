import request from './request'

//获取歌曲详情
export function getSongDetail (ids) {
    return request({
        url: '/song/detail',
        params: {
            ids
        }
    })
}
//获取歌曲的歌词
export function getLyric (id) {
    return request({
        url: '/lyric',
        params: {
            id
        }
    })
}
//获取相似歌单
export function getSimiPlaylist (id) {
    return request({
        url: "/simi/playlist",
        params: {
            id
        }
    })
}
//获取相似歌曲  
export function getSimiSong (id) {
    return request({
        url: "/simi/song",
        params: {
            id
        }
    })
}