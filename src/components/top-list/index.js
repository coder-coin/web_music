import React, { memo } from 'react'
import { useDispatch } from 'react-redux'
import { getSongDetailAction } from '@/pages/player/store/actionCreator'
import { imageSizeFormat } from '@/utils/data-format'
import { TopListWrapper } from './style'
import { NavLink } from 'react-router-dom'

const LTopList = memo((props) => {
    const { info } = props
    const { tracks = [] } = info

    const dispatch = useDispatch()
    //播放对应歌曲
    function playMusic (item) {
        // console.log(item.id)
        dispatch(getSongDetailAction(item.id))
    }


    return (
        <TopListWrapper>
            <div className='header'>
                <div className='image'>
                    <img src={imageSizeFormat(info.coverImgUrl)} alt='' />
                    <a href='/#' className='image_cover'>toplist</a>
                </div>
                <div className='info'>
                    <NavLink to='/discover/toplist'>{info.name}</NavLink>
                    <div className='operation'>
                        <button className='btn play sprite_02'></button>
                        <button className='btn favor sprite_02'></button>
                    </div>
                </div>
            </div>
            <div className='list'>
                {
                    tracks.slice(0, 10).map((item, index) => {
                        return (
                            <div className='list-item' key={item.id}>
                                <div className='rank'>{index + 1}</div>
                                <div className='info'>
                                    <div className='name text-nowrap'>
                                        <NavLink to={{
                                            pathname: '/discover/song',
                                            search: `id=${item.id}`
                                        }} alt=''>{item.name}</NavLink>
                                    </div>
                                    <div className='operate'>
                                        <button className='btn play sprite_02' onClick={e => playMusic(item)}></button>
                                        <button className='btn addto sprite_icon3'></button>
                                        <button className='btn favor sprite_02'></button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='footer'>
                <a href='/#'>查看全部{`>`}</a>
            </div>
        </TopListWrapper>
    )
})

export default LTopList