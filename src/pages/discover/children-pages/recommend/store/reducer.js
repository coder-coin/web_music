import { Map } from 'immutable'

import * as actionTypes from './constants'

const defaultState = Map({
    topBanner: [],
    hotRecommend: [],
    newAlbums: [],
    upTopList: [],
    newTopList: [],
    originalTopList: [],
    hotArtists: []
})

function reducer (state = defaultState, action) {
    switch (action.type) {
        case actionTypes.RECOMMEND_CHANGE_TOP_BANNER:
            return state.set('topBanner', action.banner)
        case actionTypes.RECOMMEND_CHANGE_HOT_RECOMMEND:
            return state.set('hotRecommend', action.hotRecommend)
        case actionTypes.RECOMMEND_CHANGE_NEW_ALBUM:
            return state.set('newAlbums', action.newAlbums)
        case actionTypes.RECOMMEND_CHANGE_UP_TOP_LIST:
            return state.set('upTopList', action.upTopList)
        case actionTypes.RECOMMEND_CHANGE_NEW_TOP_LIST:
            return state.set('newTopList', action.newTopList)
        case actionTypes.RECOMMEND_CHANGE_ORIGINAL_TOP_LIST:
            return state.set('originalTopList', action.originalTopList)
        case actionTypes.RECOMMEND_CHANGE_HOT_ARTISTS:
            return state.set('hotArtists', action.hotArtists)
        default:
            return state
    }
}

export default reducer