import React, { createRef, memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { Carousel } from 'antd'
import LRecommendThemeHeader from 'components/recommend-theme-header'
import LAlbumCover from 'components/album-cover'
import { getNewAlbumAction } from '../../store/actionCreator'
import {
    NewAlbumRecommendWrapper
} from './style'
const LNewAlbumRecommend = memo(() => {
    const carouselRef = createRef()

    //redux hook
    const { newAlbums } = useSelector((state) => ({
        newAlbums: state.getIn(['recommend', 'newAlbums'])
    }), shallowEqual)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getNewAlbumAction(10))
    }, [dispatch])

    return (
        <NewAlbumRecommendWrapper>
            <LRecommendThemeHeader title='新碟上架' />
            <div className='content'>
                <i
                    className='arrow arrow-left sprite_02'
                    onClick={e => carouselRef.current.prev()}
                ></i>
                <div className='album'>
                    <Carousel dots={false} ref={carouselRef} speed={1500}>
                        {
                            [0, 1].map((itemA) => {
                                return (
                                    <div className='page' key={itemA}>
                                        {
                                            newAlbums.slice(itemA * 5, (itemA + 1) * 5).map((itemB, index) => {
                                                return (
                                                    <LAlbumCover
                                                        key={itemB.id}
                                                        info={itemB}
                                                        size={100}
                                                        width={118}
                                                        bgp='-570px'
                                                    />
                                                )
                                            })
                                        }
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </div>
                <i
                    className='arrow arrow-right sprite_02'
                    onClick={e => carouselRef.current.next()}
                ></i>
            </div>
        </NewAlbumRecommendWrapper>
    )
})

export default LNewAlbumRecommend