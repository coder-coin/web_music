import React, { memo } from 'react'
import { imageSizeFormat } from '@/utils/data-format'
import { AlbumCoverWrapper } from './style'
const LAlbumCover = memo((props) => {
    //需要传入对应的数据，图片大小，图片包裹的宽以及覆盖层的位置
    const { info, size = 130, width = 150, bgp = '-845px' } = props
    return (
        <AlbumCoverWrapper size={size} width={width} bgp={bgp}>
            <div className="album-image">
                <img src={imageSizeFormat(info.picUrl, size)} alt="" />
                <a href="/#" className="mask image_cover">
                    {info.name}
                </a>
                <a href='/#' className='play-icon sprite_icon unhover'>播放</a>
            </div>
            <div className="album-info">
                <p className="name">
                    <a href='/#' className='text-nowrap'>{info.name}</a>
                </p>
                <p className="artist text-nowrap">
                    <a href='/#' className='text-nowrap'>{info.artist.name}</a>
                </p>
            </div>
        </AlbumCoverWrapper>
    )
})

export default LAlbumCover