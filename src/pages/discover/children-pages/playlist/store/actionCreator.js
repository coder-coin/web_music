import * as actionTypes from './constants'
import { PER_PAGE_NUMBER } from './constants'
import { getCategory, getCategorySongList } from '@/service/playlist'
import { handlePlayListCategory } from '@/utils/handle-data'
const changePlayListCategoryAction = res => ({
    type: actionTypes.PLAYLIST_CHANGE_CATEGORY,
    category: res
})
const changeSongListAction = res => ({
    type: actionTypes.PLAYLIST_CHANGE_SONG_LIST,
    songList: res
})
export const changeCurrentCategoryAction = (name) => ({
    type: actionTypes.PLAYLIST_CHANGE_CURRENT_CATEGORY,
    currentCategory: name
})
//获取歌单分类
export const getPlayListCategoryAction = () => {
    return dispatch => {
        getCategory().then(res => {
            const newRes = handlePlayListCategory(res)
            dispatch(changePlayListCategoryAction(newRes))
        })
    }
}
//获取对应歌单的歌曲
export const getSongListAction = (page) => {
    return (dispatch, getState) => {
        const name = getState().getIn(['playlist', 'currentCategory'])
        getCategorySongList(name, page * PER_PAGE_NUMBER,).then(res => {
            dispatch(changeSongListAction(res))
        })
    }
}