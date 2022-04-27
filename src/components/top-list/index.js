import React, { memo } from 'react'
import { imageSizeFormat } from '@/utils/data-format'
import { TopListWrapper } from './style'
const LTopList = memo((props) => {
    const { info } = props
    const { tracks = [] } = info
    return (
        <TopListWrapper>
            <div className='header'>
                <div className='image'>
                    <img src={imageSizeFormat(info.coverImgUrl)} alt='' />
                    <a href='/#' className='image_cover'>toplist</a>
                </div>
                <div className='info'>
                    <a href='/#'>{info.name}</a>
                    <div className='operation'>
                        <button className='btn play sprite_02'></button>
                        <button className='btn favor sprite_02'></button>
                    </div>
                </div>
            </div>
            <div className='list'>
                {
                    tracks.slice(0, 10).map((item, index) => {
                        return (
                            <div className='list-item' key={item.id}>
                                <div className='rank'>{index + 1}</div>
                                <div className='info'>
                                    <div className='name text-nowrap'>
                                        <a href='/#' alt=''>{item.name}</a>
                                    </div>
                                    <div className='operate'>
                                        <button className='btn play sprite_02'></button>
                                        <button className='btn addto sprite_icon3'></button>
                                        <button className='btn favor sprite_02'></button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='footer'>
                <a href='/#'>查看全部{`>`}</a>
            </div>
        </TopListWrapper>
    )
})

export default LTopList