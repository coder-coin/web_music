import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { headerBarLinkList } from '@/common/local-data.js'

import { HeaderWrapper, HeaderWrapperLeft, HeaderWrapperRight } from './style'
const LAppHeader = memo(() => {
    //根据index返回不同的元素
    const getBarListItem = (item, index) => {
        if (index <= 2) {
            return (
                <NavLink to={item.link}>
                    <em> {item.title}</em>
                    <sub className='sprite_01 icon'></sub>
                </NavLink>
            )
        } else {
            return <a href={item.link}>{item.title}</a>
        }
    }
    //返回jsx
    return (
        <HeaderWrapper>
            <div className='content wrap-v1'>
                <HeaderWrapperLeft>
                    <h1 className='logo sprite_01'>
                        <a href='/'>网易云音乐</a>
                    </h1>
                    <ul className='bar-item-list'>
                        {
                            headerBarLinkList.map((item, index) => {
                                return <li key={item.title} className='select-item'>{getBarListItem(item, index)}</li>
                            })
                        }
                    </ul>
                </HeaderWrapperLeft>
                <HeaderWrapperRight>
                    <Input
                        className='search'
                        placeholder='音乐/视频/电台/用户'
                        prefix={<SearchOutlined />} />

                    <NavLink to='/creatorCenter' className='creator-center'>创作者中心</NavLink>
                    <NavLink className='login-btn' to='/'>登录</NavLink>
                </HeaderWrapperRight>
            </div>
            <div className='bar-bottom'></div>
        </HeaderWrapper>
    )
})

export default LAppHeader