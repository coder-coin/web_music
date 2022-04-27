import * as actionTypes from './constants'
import { getSongDetail } from '@/service/player'
//修改当前歌曲
const changeCurrentSongAction = (res) => ({
    type: actionTypes.PLAYER_CHANGE_CURRENT_SONG,
    currentSong: res
})
//获取歌曲详情
export const getSongDetailAction = (ids) => {
    return dispatch => {
        getSongDetail(ids).then(res => {
            console.log(res.songs[0])
            dispatch(changeCurrentSongAction(res.songs[0]))
        })
    }
}