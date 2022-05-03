import React, { memo } from 'react'

import {
    imageSizeFormat,
    countFormat
} from "@/utils/data-format"

import {
    ThemeCoverWrapper
} from "./style"

const LPlaylistThemeCover = memo((props) => {
    const { info, right } = props

    return (
        <ThemeCoverWrapper right={right}>
            <div className="cover-top">
                <img src={imageSizeFormat(info.picUrl || info.coverImgUrl, 140)} alt="" />
                <div className="cover sprite_covor">
                    <div className="info sprite_covor">
                        <span>
                            <i className="sprite_icon erji"></i>
                            {countFormat(info.playCount)}
                        </span>
                        <i className="sprite_icon play"></i>
                    </div>
                </div>
            </div>
            <div className="cover-bottom text-nowrap">
                {info.name}
            </div>
            <div className="cover-source">
                by {info.copywriter || info.creator.nickname}
            </div>
        </ThemeCoverWrapper>
    )
})
export default LPlaylistThemeCover