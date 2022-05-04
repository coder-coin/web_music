import React, { memo } from 'react'
import LArtistCategory from './c-components/category'
import LArtistList from './c-components/artists-list'
import {
    ArtistWrapper,
    ArtistContentWrapper,
    ArtistContentLeftWrapper,
    ArtistContentRightWrapper
} from './style'
const LAritist = memo(() => {
    return (
        <ArtistWrapper>
            <ArtistContentWrapper className='wrap-v2 wrap_bg3'>
                <ArtistContentLeftWrapper>
                    <LArtistCategory />
                </ArtistContentLeftWrapper>
                <ArtistContentRightWrapper>
                    <LArtistList />
                </ArtistContentRightWrapper>
            </ArtistContentWrapper>
        </ArtistWrapper>
    )
})

export default LAritist