import { Map } from 'immutable'
import * as actionTypes from './constants'
const defaultState = Map({
    djRadioCategory: [],
    currentId: 0,
    radioRecommend: [],
    radioTopList: []
})

function reducer (state = defaultState, action) {
    switch (action.type) {
        case actionTypes.DJ_RADIO_CHANGE_CATEGORY:
            return state.set('djRadioCategory', action.djRadioCategory)
        case actionTypes.DJ_RADIO_CHANGE_CURRENT_ID:
            return state.set('currentId', action.currentId)
        case actionTypes.DJ_RADIO_CHANGE_RECOMMEND:
            return state.set('radioRecommend', action.radioRecommend)
        case actionTypes.DJ_RADIO_CHANGE_TOP_LIST:
            return state.set('radioTopList', action.radioTopList)
        default:
            return state
    }
}

export default reducer