import React, { memo } from 'react'
import { countFormat, imageSizeFormat } from '@/utils/data-format'
import {
    SongCoverWrapper
} from './style'
const LSongCover = memo((props) => {
    const { info } = props

    //top icon组件，播放量大于2000万显示
    const TopIcon = (props) => {
        const { playCount } = props
        if (Math.floor(playCount / 10000) >= 2000) {
            return <i className='top-icon-active sprite_icon2'></i>
        }
    }
    return (
        <SongCoverWrapper>
            <div className='song-cover-top'>
                <img src={imageSizeFormat(info.picUrl, 140)} alt={info.name}></img>
                <TopIcon playCount={info.playCount} />
                <a href='/#' className='song-cover-mask sprite_cover'>封面</a>
                <div className='song-cover-bottom sprite_cover'>
                    <span>
                        <i className='headset-icon sprite_icon'></i>
                        <span>{countFormat(info.playCount)}</span>
                    </span>
                    <a href='/#' className='play-icon sprite_icon' title='播放'>播放</a>
                </div>
            </div>
            <div className='song-cover-description'>
                {info.name}
            </div>
            <div className='song-cover-source'></div>
        </SongCoverWrapper >
    )
})

export default LSongCover