import React from 'react'
import {
    HeaderWrapper
} from "./style"
import { memo } from 'react'

const LSongThemeHeader = memo((props) => {
    const { number, playCount } = props
    return (
        <HeaderWrapper>
            <div className="left">
                <h3 className="title">歌曲列表</h3>
                <div className="count">{number}首歌</div>
            </div>
            <div className="right">
                <span>播放：</span>
                <span className="count">{playCount}</span>
                <span>次</span>
            </div>
        </HeaderWrapper>
    )
})
export default LSongThemeHeader