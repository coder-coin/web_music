import React, { memo } from 'react'
import LRecommendThemeHeader from 'components/recommend-theme-header'
import {
    RankRecommendWrapper
} from './style'
const LRankRecommend = memo(() => {
    return (
        <RankRecommendWrapper>
            <LRecommendThemeHeader title='榜单' />
        </RankRecommendWrapper>
    )
})

export default LRankRecommend