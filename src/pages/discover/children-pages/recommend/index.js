import React, { memo } from 'react'
import LRecommendBanner from './c-components/banner'
import LHotRecommend from './c-components/hot-recommend'
import LNewAlbumRecommend from './c-components/new-album'
import LTopListRecommend from './c-components/top-list'
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
                    <LTopListRecommend />
                </RecommendContentLeft>
                <RecommendContentRight>

                </RecommendContentRight>
            </RecommendContent>
        </RecommendWrapped>
    )
})

export default LRecommend