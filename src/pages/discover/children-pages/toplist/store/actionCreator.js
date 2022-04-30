import * as actionTypes from './constants'
import { getAllTopListCategory } from '@/service/toplist'
const changeTopListCategoryAction = res => ({
    type: actionTypes.TOPLIST_CHANGE_TOPLIST_CATEGORY,
    topListCategory: res.list
})

export const getAllTopListCategoryAction = () => {
    return dispatch => {
        getAllTopListCategory().then(res => {
            dispatch(changeTopListCategoryAction(res))
        })
    }
}