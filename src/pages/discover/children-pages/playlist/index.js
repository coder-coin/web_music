import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
    getPlayListCategoryAction,
    getSongListAction,
} from './store/actionCreator'
import LPlaylistHeader from './c-components/header'
import LSongList from './c-components/list'
import { PlayListWrapper, PlayListContentWrapper } from './style'
const LPlaylist = memo(() => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPlayListCategoryAction())
        dispatch(getSongListAction(0))
    }, [dispatch])
    return (
        <PlayListWrapper>
            <PlayListContentWrapper className='wrap-v2'>
                <LPlaylistHeader />
                <LSongList />
            </PlayListContentWrapper>
        </PlayListWrapper>
    )
})

export default LPlaylist