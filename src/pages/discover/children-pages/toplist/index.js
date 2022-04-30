import React, { memo } from 'react'
import { Outlet } from 'react-router-dom'
import LListCategory from './c-components/list-category'
import {
    TopListWrapper,
    TopListWrapperContent,
    TopListWrapperContentLeft,
    TopListWrapperContentRight
} from './style'
const LToplist = memo(() => {
    return (
        <TopListWrapper>
            <TopListWrapperContent className='wrap-v2 wrap_bg2'>
                <TopListWrapperContentLeft>
                    <LListCategory />
                </TopListWrapperContentLeft>
                <TopListWrapperContentRight>
                    <Outlet />
                </TopListWrapperContentRight>
            </TopListWrapperContent>
        </TopListWrapper>
    )
})

export default LToplist