import React, { memo } from 'react'
import { useSelector, shallowEqual } from 'react-redux'


import LRecommendThemeHeader from '@/components/recommend-theme-header'
import LSelectList from './c-components/select-list'
import LArtistItemV1 from './c-components/item'
import {
    ArtistListWrapper
} from './style'

const LArtistList = memo(() => {
    // redux hooks
    const { currentType, artistList } = useSelector(state => ({
        currentType: state.getIn(["artist", "currentType"]),
        artistList: state.getIn(["artist", "artistList"])
    }), shallowEqual)

    return (
        <ArtistListWrapper>
            <LRecommendThemeHeader title={currentType.name} left={false} right={false}/>
            <LSelectList />
            <div className="artist-list">
                {
                    artistList.map((item, index) => {
                        return <LArtistItemV1 key={item.id} index={index} info={item} />
                    })
                }
            </div>
        </ArtistListWrapper>
    )
})
export default LArtistList