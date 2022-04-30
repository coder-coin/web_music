import React, { memo } from 'react'
import { imageSizeFormat } from '@/utils/data-format'
import { hotAnchor } from '@/service/local-data'
import { HotAnchorsWrapper } from './style'
const LHotAnchor = memo(() => {
  return (
    <HotAnchorsWrapper>
      <div className='hot-anchor-header'>
        <p className='header-title'>热门主播</p>
      </div>
      <div className='hot-anchor-list'>
        {
          hotAnchor.map((item, index) => {
            return (
              <div className='item' key={item.name}>
                <img src={imageSizeFormat(item.picUrl, 40)} alt={item.name}></img>
                <div className='anchor-info'>
                  <p className='anchor-name'>{item.name}</p>
                  <p className='anchor-position text-nowrap'>{item.position}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </HotAnchorsWrapper>
  )
})

export default LHotAnchor