import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getHotArtistsAction } from '../../store/actionCreator'
import { imageSizeFormat } from '@/utils/data-format'
import { HotArtistsWrapper } from './style'
const LHotArtists = memo(() => {
    const { hotArtists } = useSelector(state => ({
        hotArtists: state.getIn(['recommend', 'hotArtists'])
    }), shallowEqual)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getHotArtistsAction(5))
    }, [dispatch])
    return (
        <HotArtistsWrapper>
            <h3 className='hot-artists-header'>
                <span className='header-title'>热门歌手</span>
                <a href='/#'>查看全部{`>`}</a>
            </h3>
            <div className='hot-artists-list'>
                {
                    hotArtists.map((item, index) => {
                        return (
                            <a href='/#' className='list-item' key={item.id}>
                                <img src={imageSizeFormat(item.picUrl, 62)} alt={item.name} />
                                <div className='artist-info'>
                                    <p className='artist-name'>{item.name}</p>
                                    <p className='artist-alias text-nowrap'>{item.alias[0] ? item.alias[0] : item.name}</p>
                                </div>
                            </a>
                        )
                    })
                }
            </div>
            <div className='apply'>
                <a href='/#' className='apply-btn sprite_button'>
                    <i className='sprite_button'>申请成为网易音乐人</i>
                </a>
            </div>
        </HotArtistsWrapper>
    )
})

export default LHotArtists