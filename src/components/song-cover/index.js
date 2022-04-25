import React, { memo } from 'react'
import { countFormat, imageSizeFormat } from '@/utils/data-format'
import {
    SongCoverWrapper
} from './style'
const LSongCover = memo((props) => {
    const { info } = props
    //判断是否是top级别的播放量
    const judgePlayCount = (playCount) => {
        if (Math.floor(info.playCount / 10000) >= 2000) {
            return true
        } else {
            return false
        }
    }
    return (
        <SongCoverWrapper>
            <div className='song-cover-top'>
                <img src={imageSizeFormat(info.picUrl, 140)} alt={info.name}></img>
                <i className={judgePlayCount(info.playCount) ? `top-icon-active` : `top-icon-unactive`}></i>
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