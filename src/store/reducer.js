import { combineReducers } from 'redux-immutable'
import { reducer as recommendReducer } from '@/pages/discover/children-pages/recommend/store'
const combineReducer = combineReducers({
    recommend: recommendReducer
})

export default combineReducer