import * as actionTypes from './constants'
import {
    getRecommendBanner,
    getHotRecommend,
    getNewAlbum,
    getTopList,
    getHotArtists
} from '@/service/recommend'
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
            // console.log(res.result)
            dispatch(changeHotRecommendAction(res))
        }).catch(err => {
            console.log(err)
        })
    }
}
//修改新碟上架
export const changeNewAlbumAction = (res) => ({
    type: actionTypes.RECOMMEND_CHANGE_NEW_ALBUM,
    newAlbums: res.albums
})
//获取新碟上架
export const getNewAlbumAction = (limit) => {
    return dispatch => {
        getNewAlbum(limit).then(res => {
            // console.log(res.albums)
            dispatch(changeNewAlbumAction(res))
        }).catch(err => {
            console.log(err)
        })
    }
}
//修改飙升榜单
const changeUpTopListAction = (res) => ({
    type: actionTypes.RECOMMEND_CHANGE_UP_TOP_LIST,
    upTopList: res.playlist
})
//修改新歌榜单
const changeNewTopListAction = (res) => ({
    type: actionTypes.RECOMMEND_CHANGE_NEW_TOP_LIST,
    newTopList: res.playlist
})
//修改原创榜单
const changeOriginalTopListAction = (res) => ({
    type: actionTypes.RECOMMEND_CHANGE_ORIGINAL_TOP_LIST,
    originalTopList: res.playlist
})
//修改热门歌手
const changeHotArtistsAction = (res) => ({
    type: actionTypes.RECOMMEND_CHANGE_HOT_ARTISTS,
    hotArtists: res.artists
})
//获取榜单数据
export const getTopListAction = (idx) => {
    return dispatch => {
        getTopList(idx).then(res => {
            // console.log(res)
            switch (idx) {
                case 0:
                    dispatch(changeNewTopListAction(res))
                    break
                case 2:
                    dispatch(changeOriginalTopListAction(res))
                    break
                case 3:
                    dispatch(changeUpTopListAction(res))
                    break
                default:
                    break
            }
        }).catch(err => {
            console.log(err)
        })
    }
}
//获取热门歌手
export const getHotArtistsAction = (limit) => {
    return dispatch => {
        getHotArtists(limit).then(res => {
            dispatch(changeHotArtistsAction(res))
        })
    }
}