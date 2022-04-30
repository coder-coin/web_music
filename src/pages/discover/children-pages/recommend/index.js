import React, { memo } from 'react'
import LRecommendBanner from './c-components/banner'
import LHotRecommend from './c-components/hot-recommend'
import LNewAlbumRecommend from './c-components/new-album'
import LTopListRecommend from './c-components/top-list'
import LUserProfile from './c-components/user-profile'
import LHotArtists from './c-components/hot-artists'
import LHotAnchor from './c-components/hot-anchor'
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
                    <LUserProfile />
                    <LHotArtists />
                    <LHotAnchor />
                </RecommendContentRight>
            </RecommendContent>
        </RecommendWrapped>
    )
})

export default LRecommend