import React, { memo } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

import { discoverTopMenuLinkList } from '@/common/local-data.js'
import { DiscoverWrapper, TopMenu, DiscoverContentWrapper } from './style'

const LDiscover = memo(() => {
  return (
    <DiscoverWrapper>
      <div className='top'>
        <TopMenu className='wrap-v1'>
          <ul className='top-menu-list'>
            {
              discoverTopMenuLinkList.map((item, index) => {
                return (
                  <li key={item.title}>
                    <NavLink
                      to={item.link}
                    >
                      <em>{item.title}</em>
                    </NavLink>
                  </li>
                )
              })
            }
          </ul>
        </TopMenu>

      </div>
      <DiscoverContentWrapper>
        <Outlet />
      </DiscoverContentWrapper>

    </DiscoverWrapper>
  )
})

export default LDiscover