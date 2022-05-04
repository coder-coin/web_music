import React, { memo, useEffect, useState } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'

import { getSelectedSongLyricAction, getSelectedSongDetailAction } from '../../store/actionCreator'
import { imageSizeFormat } from '@/utils/data-format'

import HYSongOperationBar from 'components/song-operation-bar'
import {
    InfoWrapper,
    InfoLeft,
    InfoRight
} from './style'

const LPlayerInfo = memo(() => {
    // props and hooks
    const [isSpread, setIsSpread] = useState(false)
    // redux hooks
    const { selectedSong, selectedSongLyric, selectedSongId } = useSelector(state => ({
        selectedSong: state.getIn(["player", "selectedSong"]),
        selectedSongLyric: state.getIn(["player", "selectedSongLyric"]),
        selectedSongId: state.getIn(['player', 'selectedSongId'])
    }), shallowEqual)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getSelectedSongDetailAction(selectedSongId))
        dispatch(getSelectedSongLyricAction(selectedSongId))
    }, [dispatch, selectedSongId])

    //判断是否为空，数据在组件渲染完成后加载，此时可能数据还未请求到
    let song = null
    let lyric = null
    if (selectedSong) {
        song = selectedSong
    }
    if (selectedSongLyric) {
        lyric = selectedSongLyric
    }
    // handle code
    const totalLyricCount = isSpread ? selectedSongLyric.length : 13

    return (
        <InfoWrapper>
            <InfoLeft>
                <div className="image">
                    <img src={imageSizeFormat(song.al.picUrl, 130)} alt="" />
                    <span className="cover image_cover"></span>
                </div>
                <div className="link">
                    <i className="sprite_icon2"></i>
                    <a href="#/">生成外联播放器</a>
                </div>
            </InfoLeft>
            <InfoRight isSpread={isSpread}>
                <div className="header">
                    <i className="sprite_icon3"></i>
                    <h3 className="title">{song.name}</h3>
                </div>
                <div className="singer">
                    <span className="label">歌手：</span>
                    <a href="/#" className="name">{song.ar[0].name}</a>
                </div>
                <div className="album">
                    <span className="label">所属专辑：</span>
                    <a href="/#" className="name">{song.al.name}</a>
                </div>

                <HYSongOperationBar favorTitle="收藏"
                    shareTitle="分享"
                    downloadTitle="下载"
                    commentTitle="(167366)" />

                <div className="lyric">
                    <div className="lyric-info">
                        {
                            lyric.slice(0, totalLyricCount).map((item, index) => {
                                return <p key={item.content} className="text">{item.content}</p>
                            })
                        }
                    </div>
                    <button className="lyric-control"
                        onClick={e => setIsSpread(!isSpread)}>
                        {isSpread ? "收起" : "展开"}
                        <i className="sprite_icon2"></i>
                    </button>
                </div>
            </InfoRight>
        </InfoWrapper>
    )
})
export default LPlayerInfo