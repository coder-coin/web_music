import { combineReducers } from 'redux-immutable'
import { reducer as recommendReducer } from '@/pages/discover/children-pages/recommend/store'
import { reducer as playerReducer } from '@/pages/player/store'
import { reducer as topListReducer } from '@/pages/discover/children-pages/toplist/store'
import { reducer as playListReducer } from '@/pages/discover/children-pages/playlist/store'
const combineReducer = combineReducers({
    recommend: recommendReducer,
    player: playerReducer,
    toplist: topListReducer,
    playlist: playListReducer
})

export default combineReducer