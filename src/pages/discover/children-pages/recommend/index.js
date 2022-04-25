import React, { memo } from 'react'
import LRecommendBanner from './c-components/banner'
import LHotRecommend from './c-components/hot-recommend'
import LNewAlbumRecommend from './c-components/new-album'
import LRankRecommend from './c-components/rank-recommend'
import {
    RecommendWrapped,
    RecommendContent,
    RecommendContentLeft,
    RecommendContentRight
} from './style'
const LRecommend = memo(() => {
    return (
        <RecommendWrapped>
            <LRecommendBanner />
            <RecommendContent className='wrap-v2'>
                <RecommendContentLeft>
                    <LHotRecommend />
                    <LNewAlbumRecommend />
                    <LRankRecommend />
                </RecommendContentLeft>
                <RecommendContentRight>

                </RecommendContentRight>
            </RecommendContent>
        </RecommendWrapped>
    )
})

export default LRecommend