import { Map } from 'immutable'
import * as actionTypes from './constants'
const defaultState = Map({
    topListCategory: []
})

function reducer (state = defaultState, action) {
    switch (action.type) {
        case actionTypes.TOPLIST_CHANGE_TOPLIST_CATEGORY:
            return state.set('topListCategory', action.topListCategory)
        default:
            return state
    }
}

export default reducer
