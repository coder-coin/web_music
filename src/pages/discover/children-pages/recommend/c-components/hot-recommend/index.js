import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { getHotRecommendAction } from '../../store/actionCreator'
import { HOT_RECOMMEND_LIMIT } from '@/common/constants'
import LRecommendThemeHeader from 'components/recommend-theme-header'
import LSongCover from 'components/song-cover'
import {
    HotRecommendWrapper
} from './style'
const LHotRecommend = memo(() => {
    //redux hooks
    const dispatch = useDispatch()
    //获取保存在redux中的热门推荐的数据
    const { hotRecommend } = useSelector(state => ({
        // hotRecommend: state.get('recommend').get('hotRecommend')
        hotRecommend: state.getIn(['recommend', 'hotRecommend'])
    }), shallowEqual)
    //请求热门推荐的数据
    useEffect(() => {
        dispatch(getHotRecommendAction(HOT_RECOMMEND_LIMIT))
    }, [dispatch])


    return (
        <HotRecommendWrapper>
            <LRecommendThemeHeader title='热门推荐' keyword={['华语 ', ' 流行 ', ' 摇滚 ', '民谣', '电子']} />
            <div className='hot-recommend-list'>
                {
                    hotRecommend.map((item, index) => {
                        return <LSongCover info={item} key={item.id} />
                    })
                }
            </div>
        </HotRecommendWrapper>
    )
})

export default LHotRecommend