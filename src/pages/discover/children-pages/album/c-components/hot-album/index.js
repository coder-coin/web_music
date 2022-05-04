import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getHotAlbumsAction } from '../../store/actionCreator'

import LAlbumCover from 'components/album-cover'
import LRecommendThemeHeader from 'components/recommend-theme-header'
import {
    HotAlbumWrapper
} from './style'

const LHotAlbum = memo(() => {

    const { hotAlbums } = useSelector(state => ({
        hotAlbums: state.getIn(["album", "hotAlbums"])
    }), shallowEqual)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getHotAlbumsAction())
    }, [dispatch])

    return (
        <HotAlbumWrapper>
            <LRecommendThemeHeader title="热门新碟" left={false} right={false} />
            <div className="album-list">
                {
                    hotAlbums.slice(0, 10).map((item, index) => {
                        return (
                            <div className='item' key={item.id}>
                                <LAlbumCover size={130}
                                    width={153}
                                    bgp={"-845px"}
                                    info={item}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </HotAlbumWrapper>
    )
})
export default LHotAlbum