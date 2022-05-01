import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {getAllTopListCategoryAction} from './store/actionCreator'
import LListCategory from './c-components/list-category'
import LListContent from './c-components/list-content'
import {
    TopListWrapper,
    TopListWrapperContent,
    TopListWrapperContentLeft,
    TopListWrapperContentRight
} from './style'
const LToplist = memo(() => {
    const dispatch = useDispatch()
    useEffect(() => {
        //获取排行榜分类
        dispatch(getAllTopListCategoryAction())
    }, [dispatch])
    return (
        <TopListWrapper>
            <TopListWrapperContent className='wrap-v2 wrap_bg2'>
                <TopListWrapperContentLeft>
                    <LListCategory />
                </TopListWrapperContentLeft>
                <TopListWrapperContentRight>
                    <LListContent />
                </TopListWrapperContentRight>
            </TopListWrapperContent>
        </TopListWrapper>
    )
})

export default LToplist