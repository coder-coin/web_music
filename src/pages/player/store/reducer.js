import { Map } from 'immutable'
import * as actionTypes from './constants'
const defaultState = Map({
    currentSong: {},
    playList: [],
    currentSongIndex: 0,
    playerMode: 0, //播放模式：0为列表循环播放，1为列表随机播放，2为单曲循环播放
    lyricList: []
})
function reducer (state = defaultState, action) {
    switch (action.type) {
        case actionTypes.PLAYER_CHANGE_CURRENT_SONG:
            return state.set('currentSong', action.currentSong)
        case actionTypes.PLAYER_CHANGE_LIST:
            return state.set('playList', action.playList)
        case actionTypes.PLAYER_CHANGE_CURRENT_SONG_INDEX:
            return state.set('currentSongIndex', action.currentSongIndex)
        case actionTypes.PLAYER_CHANGE_MODE:
            return state.set('playerMode', action.playerMode)
        case actionTypes.PLAYER_CHANGE_LYRIC_LIST:
            return state.set('lyricList', action.lyricList)
        default:
            return state
    }
}

export default reducer