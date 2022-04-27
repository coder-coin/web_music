import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getTopListAction } from '../../store/actionCreator'

import LRecommendThemeHeader from 'components/recommend-theme-header'
import LTopList from 'components/top-list'
import { TOP_LIST_NEW, TOP_LIST_ORIGINAL, TOP_LIST_UP } from '@/common/constants'
import {
    TopListRecommendWrapper
} from './style'

const LTopListRecommend = memo(() => {

    //redux hooks
    const { upTopList, newTopList, originalTopList } = useSelector(state => ({
        upTopList: state.getIn(['recommend', 'upTopList']),
        newTopList: state.getIn(['recommend', 'newTopList']),
        originalTopList: state.getIn(['recommend', 'originalTopList']),
    }), shallowEqual)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getTopListAction(TOP_LIST_NEW))
        dispatch(getTopListAction(TOP_LIST_ORIGINAL))
        dispatch(getTopListAction(TOP_LIST_UP))
    }, [dispatch])
    return (
        <TopListRecommendWrapper>
            <LRecommendThemeHeader title='榜单' />
            <div className='tops'>
                <LTopList info={upTopList} />
                <LTopList info={newTopList} />
                <LTopList info={originalTopList} />
            </div>
        </TopListRecommendWrapper>
    )
})

export default LTopListRecommend