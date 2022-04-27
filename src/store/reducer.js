import { combineReducers } from 'redux-immutable'
import { reducer as recommendReducer } from '@/pages/discover/children-pages/recommend/store'
import { reducer as playerReducer } from '@/pages/player/store'
const combineReducer = combineReducers({
    recommend: recommendReducer,
    player: playerReducer
})

export default combineReducer