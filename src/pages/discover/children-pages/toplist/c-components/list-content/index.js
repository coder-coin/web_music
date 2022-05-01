import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { getTopListDetailAction } from '../../store/actionCreator'
import { imageSizeFormat, dateFormat } from '@/utils/data-format'

import LSongOperationBar from '@/components/song-operation-bar'
import LSongThemeHeader from '@/components/song-theme-header'
import { ListContentWrapper, ListContentHeaderWrapper, ListContentBodyWrapper } from './style'
const LListContent = memo(() => {

    const { topListCategory, activeIndex, topListDetail } = useSelector(state => ({
        topListCategory: state.getIn(['toplist', 'topListCategory']),
        activeIndex: state.getIn(['toplist', 'activeIndex']),
        topListDetail: state.getIn(['toplist', 'topListDetail'])
    }), shallowEqual)
    const [searchParams] = useSearchParams()
    const id = searchParams.get('id')
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getTopListDetailAction(id))
    }, [dispatch, id])

    //
    const updateFrequency = topListCategory[activeIndex] && topListCategory[activeIndex].updateFrequency
    const listDetailTracks = topListDetail.tracks || []
    return (
        <ListContentWrapper>
            <ListContentHeaderWrapper>
                <div className='list-img'>
                    <img src={imageSizeFormat(topListDetail.coverImgUrl, 150)} alt={topListDetail.name} />
                    <span className='mask image_cover'></span>
                </div>
                <div className='info'>
                    <p className='name'>{topListDetail.name}</p>
                    <div className='update-info'>
                        <i className='time-icon sprite_icon3'></i>
                        <p className='update-time'>最近更新：{dateFormat(topListDetail.trackUpdateTime, 'mm-dd')}</p>
                        <p className='update-number'>({updateFrequency})</p>
                    </div>
                    <LSongOperationBar favorTitle={`(${topListDetail.subscribedCount})`}
                        shareTitle={`(${topListDetail.shareCount})`}
                        downloadTitle="下载"
                        commentTitle={`(${topListDetail.commentCount})`} />
                </div>
            </ListContentHeaderWrapper>
            <ListContentBodyWrapper>
                <LSongThemeHeader number={listDetailTracks.length} playCount={topListDetail.playCount} />
                <div className="play-list">
                    <table>
                        <thead>
                            <tr className="header">
                                <th className="ranking"></th>
                                <th className="title">标题</th>
                                <th className="duration">时长</th>
                                <th className="singer">歌手</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                listDetailTracks.map((item, index) => {
                                    return (
                                        <tr className="" key={item.id}>
                                            <td>
                                                <div className="rank-num">
                                                    <span className="num">{index + 1}</span>
                                                    <span className="new sprite_icon3"></span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="song-name">
                                                    {
                                                        index < 3 ?
                                                            (<img src={imageSizeFormat(item.al.picUrl, 50)} alt="" />) : null
                                                    }
                                                    <a href='/#' className="play sprite_table">播放</a>
                                                    <a href='/#' className="name">{item.name}</a>
                                                    <span className='alia'>{item.alia.length > 0 ? `-(${item.alia}) ` : null}</span>
                                                </div>
                                            </td>
                                            <td>{dateFormat(item.dt, 'mm:ss')}</td>
                                            <td>{item.ar[0].name}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </ListContentBodyWrapper>
        </ListContentWrapper>
    )
})

export default LListContent