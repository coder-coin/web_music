import { Map } from 'immutable'

import { RECOMMEND_CHANGE_TOP_BANNER } from './constants'

const defaultState = Map({
    topBanner: []
})

function reducer (state = defaultState, action) {
    switch (action.type) {
        case RECOMMEND_CHANGE_TOP_BANNER:
            return state.set('topBanner', action.banner)
        default:
            return state
    }
}

export default reducer