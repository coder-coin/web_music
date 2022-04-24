import React, { memo, useEffect, useRef } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'


import { getRecommendBannerAction } from '../../store/actionCreator'
import {
    BannerWrapper,
    BannerLeft,
    BannerRight,
    BannerControl
} from './style'
import { Carousel } from 'antd'
const LRecommendBanner = memo(() => {
    const { topBanner } = useSelector(state => ({
        // topBanner: state.get('recommend').get('topBanner')
        topBanner: state.getIn(['recommend', 'topBanner'])
    }), shallowEqual)
    const dispatch = useDispatch()
    //发送网络请求
    useEffect(() => {
        dispatch(getRecommendBannerAction())
    }, [dispatch])

    //获取轮播图组件
    const bannerRef = useRef()
    //jsx
    return (
        <BannerWrapper>
            <div className='banner wrap-v2'>
                <BannerLeft>
                    <Carousel effect="fade" autoplay ref={bannerRef}>
                        {
                            topBanner.map((item, index) => {
                                return (
                                    <div className='banner-item' key={item.imageUrl}>
                                        <img className='image' src={item.imageUrl} alt={item.typeTitle} />
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </BannerLeft>
                <BannerRight>
                    <a className='download-btn' href='/#'>下载客户端</a>
                    <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
                </BannerRight>
                <BannerControl>
                    <button className='btn left' onClick={e => bannerRef.current.prev()}></button>
                    <button className='btn right' onClick={e => bannerRef.current.next()}></button>
                </BannerControl>
            </div>
        </BannerWrapper>
    )
})

export default LRecommendBanner