import { Map } from 'immutable'
import * as actionTypes from './constants'
const defaultState = Map({
    currentSong: {},
    playList: [],
    currentSongIndex: 0,
    playerMode: 0, //播放模式：0为列表循环播放，1为列表随机播放，2为单曲循环播放
    lyricList: [],
    currentLyricIndex: 0,
    selectedSongId: 0,
    selectedSong: [],
    selectedSongLyric: [],
    simiPlaylist: [],
    simiSongs: [],
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
        case actionTypes.PLYAER_CHANGE_CURRENT_LYRIC_INDEX:
            return state.set('currentLyricIndex', action.currentLyricIndex)
        case actionTypes.PLAYER_CHANGE_SELECTED_SONG_ID:
            return state.set('selectedSongId', action.selectedSongId)
        case actionTypes.PLAYER_CHANGE_SELECTED_SONG:
            return state.set('selectedSong', action.selectedSong)
        case actionTypes.PLAYER_CHANGE_SELECTED_SONG_LYRIC:
            return state.set('selectedSongLyric', action.selectedSongLyric)
        case actionTypes.PLAYER_CHANGE_SIMI_PLAYLIST:
            return state.set("simiPlaylist", action.simiPlaylist)
        case actionTypes.PLAYER_CHANGE_SIMI_SONGS:
            return state.set("simiSongs", action.simiSongs)
        default:
            return state
    }
}

export default reducer