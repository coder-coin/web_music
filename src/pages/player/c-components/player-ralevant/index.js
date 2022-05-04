import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getSimiSongAction } from '../../store/actionCreator'

import LPlayerThemeHeader from 'components/player-theme-header'
import { RelevantWrapper } from './style'

const LRelevant = memo(() => {
    const { simiSongs } = useSelector(state => ({
        simiSongs: state.getIn(["player", "simiSongs"])
    }), shallowEqual)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getSimiSongAction())
    }, [dispatch])

    return (
        <RelevantWrapper>
            <LPlayerThemeHeader title="相似歌曲" />
            <div className="songs">
                {
                    simiSongs.map((item, index) => {
                        return (
                            <div className="song-item" key={item.id}>
                                <div className="info">
                                    <div className="title">
                                        <a href="#/">{item.name}</a>
                                    </div>
                                    <div className="artist">
                                        <a href="#/">{item.artists[0].name}</a>
                                    </div>
                                </div>
                                <div className="operate">
                                    <button className="item sprite_icon2 play"></button>
                                    <button className="item sprite_icon2 add"></button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </RelevantWrapper>
    )
})
export default LRelevant