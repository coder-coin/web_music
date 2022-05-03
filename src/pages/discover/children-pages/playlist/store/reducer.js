import { Map } from 'immutable'
import * as actionTypes from './constants'
const defaultState = Map({
    category: [],
    currentCategory: '全部',
    songList: {}
})

function reducer (state = defaultState, action) {
    switch (action.type) {
        case actionTypes.PLAYLIST_CHANGE_CATEGORY:
            return state.set('category', action.category)
        case actionTypes.PLAYLIST_CHANGE_CURRENT_CATEGORY:
            return state.set('currentCategory', action.currentCategory)
        case actionTypes.PLAYLIST_CHANGE_SONG_LIST:
            return state.set('songList', action.songList)
        default:
            return state
    }
}

export default reducer