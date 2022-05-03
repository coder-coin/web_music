import React, { useState, memo } from 'react'
import { useSelector, useDispatch, shallowEqual } from "react-redux"

import { PER_PAGE_NUMBER } from '../../store/constants'
import { getSongListAction } from "../../store/actionCreator"

import LPlaylistThemeCover from 'components/playlist-theme-cover'
import LPagination from 'components/pagination'
import {
    SongListWrapper
} from "./style"

const LSongList = memo(() => {
    // hooks
    const [currentPage, setCurrentPage] = useState(1)

    // redux
    const { categorySongList } = useSelector(state => ({
        categorySongList: state.getIn(["playlist", "songList"])
    }), shallowEqual)
    const songList = categorySongList.playlists || []
    const total = categorySongList.total || 0
    const dispatch = useDispatch()

    function onPageChange (page, pageSize) {
        setCurrentPage(page)
        dispatch(getSongListAction(page))
    }

    return (
        <SongListWrapper>
            <div className="songs-list">
                {
                    songList.map((item, index) => {
                        return (
                            <LPlaylistThemeCover info={item} key={item.id} right="30px" />
                        )
                    })
                }
            </div>
            <LPagination currentPage={currentPage}
                total={total}
                pageSize={PER_PAGE_NUMBER}
                onPageChange={onPageChange} />
        </SongListWrapper>
    )
})
export default LSongList