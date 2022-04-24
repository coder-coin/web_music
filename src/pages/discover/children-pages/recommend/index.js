import React, { memo } from 'react'
import LRecommendBanner from './c-components/banner'
import { RecommendWrapped } from './style'
const LRecommend = memo(() => {
    return (
        <RecommendWrapped>
            <LRecommendBanner />
        </RecommendWrapped>
    )
})

export default LRecommend