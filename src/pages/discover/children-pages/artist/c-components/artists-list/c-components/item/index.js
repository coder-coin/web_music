import React, { memo } from 'react'

import { imageSizeFormat } from '@/utils/data-format'

import { ItemWrapper } from './style'

const LArtistItemV1 = memo((props) => {
    const { info, index } = props

    return (
        <ItemWrapper>
            {
                index < 10 && (
                    <div className="image">
                        <img src={imageSizeFormat(info.img1v1Url, 130)} alt="" />
                    </div>
                )
            }
            <div className="info">
                <span className="name">{info.name}</span>
                <i className="sprite_icon3 icon"></i>
            </div>
        </ItemWrapper>
    )
})
export default LArtistItemV1