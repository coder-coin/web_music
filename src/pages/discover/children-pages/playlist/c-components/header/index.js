import React, { useState, memo } from 'react'
import { useSelector, shallowEqual } from 'react-redux'

import LPlaylistCategory from '../category'
import {
    HeaderWrapper,
    HeaderLeft,
    HeaderRight
} from "./style"

const LPlaylistHeader = memo(() => {
    // hooks
    const [showCategory, setShowCategory] = useState(false)

    // redux
    const { currentCategory } = useSelector(state => ({
        currentCategory: state.getIn(["playlist", "currentCategory"])
    }), shallowEqual)

    return (
        <HeaderWrapper>
            <HeaderLeft>
                <span className="title">{currentCategory}</span>
                <button className="select" onClick={e => setShowCategory(!showCategory)}>
                    <span>选择分类</span>
                    <i className="sprite_icon3"></i>
                </button>
                {showCategory ? <LPlaylistCategory /> : null}
            </HeaderLeft>
            <HeaderRight>
                <button className="hot">热门</button>
            </HeaderRight>
        </HeaderWrapper>
    )
})
export default LPlaylistHeader