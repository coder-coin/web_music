import React, { memo, useState, useMemo } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { chanegSelectedSongIdAction, getSelectedSongDetailAction, getSelectedSongLyricAction } from '../../store/actionCreator'
import { imageSizeFormat } from '@/utils/data-format'

import LSongOperationBar from 'components/song-operation-bar'
import {
    InfoWrapper,
    InfoLeft,
    InfoRight
} from './style'

const LPlayerInfo = memo((props) => {
    const { id } = props
    // props and hooks
    const [isSpread, setIsSpread] = useState(false)
    // redux hooks
    const { selectedSong, selectedSongLyric } = useSelector(state => ({
        selectedSong: state.getIn(["player", "selectedSong"]),
        selectedSongLyric: state.getIn(["player", "selectedSongLyric"])
    }), shallowEqual)

    const dispatch = useDispatch()
    useMemo(() => {
        dispatch(chanegSelectedSongIdAction(id))
        dispatch(getSelectedSongDetailAction())
        dispatch(getSelectedSongLyricAction())
    }, [dispatch, id])
    // handle code
    const totalLyricCount = isSpread ? selectedSongLyric.length : 13

    return (
        <InfoWrapper>
            <InfoLeft>
                <div className="image">
                    <img src={imageSizeFormat(selectedSong.al && selectedSong.al.picUrl, 130)} alt="" />
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
                    <h3 className="title">{selectedSong.name}</h3>
                </div>
                <div className="singer">
                    <span className="label">歌手：</span>
                    <a href="/#" className="name">{selectedSong.ar && selectedSong.ar[0].name}</a>
                </div>
                <div className="album">
                    <span className="label">所属专辑：</span>
                    <a href="/#" className="name">{selectedSong.al && selectedSong.al.name}</a>
                </div>

                <LSongOperationBar favorTitle="收藏"
                    shareTitle="分享"
                    downloadTitle="下载"
                    commentTitle="(167366)" />

                <div className="lyric">
                    <div className="lyric-info">
                        {
                            selectedSongLyric && selectedSongLyric.slice(0, totalLyricCount).map((item, index) => {
                                return <p key={index} className="text">{item.content}</p>
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