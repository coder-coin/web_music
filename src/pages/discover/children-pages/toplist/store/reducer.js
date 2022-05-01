import { Map } from 'immutable'
import * as actionTypes from './constants'
const defaultState = Map({
    topListCategory: [],
    activeIndex: 0,
    topListDetail: []
})

function reducer (state = defaultState, action) {
    switch (action.type) {
        case actionTypes.TOPLIST_CHANGE_TOPLIST_CATEGORY:
            return state.set('topListCategory', action.topListCategory)
        case actionTypes.TOPLIST_CHANGE_ACTIVE_INDEX:
            return state.set('activeIndex', action.activeIndex)
        case actionTypes.TOPLIST_CHANGE_TOPLIST_DETAIL:
            return state.set('topListDetail', action.topListDetail)
        default:
            return state
    }
}

export default reducer
