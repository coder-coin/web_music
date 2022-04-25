import { Map } from 'immutable'

import { 
    RECOMMEND_CHANGE_TOP_BANNER,
    RECOMMEND_CHANGE_HOT_RECOMMEND
} from './constants'

const defaultState = Map({
    topBanner: [],
    hotRecommend: []
})

function reducer (state = defaultState, action) {
    switch (action.type) {
        case RECOMMEND_CHANGE_TOP_BANNER:
            return state.set('topBanner', action.banner)
        case RECOMMEND_CHANGE_HOT_RECOMMEND:
            return state.set('hotRecommend',action.hotRecommend)
        default:
            return state
    }
}

export default reducer