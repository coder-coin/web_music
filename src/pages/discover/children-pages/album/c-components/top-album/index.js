import React, { memo, useEffect, useState } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getTopAlbumsAction } from '../../store/actionCreator'

import LRecommendThemeHeader from 'components/recommend-theme-header'
import LAlbumCover from 'components/album-cover'
import LPagination from 'components/pagination'
import {
  TopAlbumWrapper
} from './style'

const LTopAlbum = memo(() => {
  const [currentPage, setCurrentPage] = useState(1)

  const { topAlbums, total } = useSelector(state => ({
    topAlbums: state.getIn(["album", "topAlbums"]),
    total: state.getIn(["album", "topTotal"])
  }), shallowEqual)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTopAlbumsAction(1))
  }, [dispatch])


  const onPageChange = (page, pageSize) => {
    setCurrentPage(page)
    dispatch(getTopAlbumsAction(page))
  }

  return (
    <TopAlbumWrapper>
      <LRecommendThemeHeader title="全部新碟"
        keyword={['全部', '华语', '欧美', '韩国', '日本']}
        left={false}
        right={false} />
      <div className="album-list">
        {
          topAlbums.map((item, index) => {
            return (<div className='item' key={item.id}>
              <LAlbumCover size={130}
                width={153}
                bgp={"-845px"}
                info={item}
              />
            </div>)

          })
        }
      </div>
      <LPagination currentPage={currentPage}
        total={total}
        pageSize={30}
        onPageChange={onPageChange} />
    </TopAlbumWrapper>
  )
})
export default LTopAlbum