import React, { memo } from 'react'
import LRecommendThemeHeader from 'components/recommend-theme-header'
import {
    NewAlbumRecommendWrapper
} from './style'
const LNewAlbumRecommend = memo(() => {
    return (
        <NewAlbumRecommendWrapper>
            <LRecommendThemeHeader title='新碟上架' />
        </NewAlbumRecommendWrapper>
    )
})

export default LNewAlbumRecommend