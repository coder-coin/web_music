import React, { memo } from 'react'
import LHotAlbum from './c-components/hot-album'
import LTopAlbum from './c-components/top-album'
import { AblumWrapper } from './style'
const LAlbum = memo(() => {
    return (
        <AblumWrapper className='wrap-v2'>
            <LHotAlbum />
            <LTopAlbum />
        </AblumWrapper>
    )
})

export default LAlbum