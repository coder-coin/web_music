import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getAllTopListCategoryAction } from '../../store/actionCreator'
import { imageSizeFormat } from '@/utils/data-format'
import { ListCategoryWrapper } from './style'

const LListCategory = memo(() => {
    const { topListCategory } = useSelector(state => ({
        topListCategory: state.getIn(['toplist', 'topListCategory'])
    }), shallowEqual)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllTopListCategoryAction())
    }, [dispatch])
    return (
        <ListCategoryWrapper>
            <div className='list-header'>云音乐特色榜</div>
            <div className='category-list'>
                {
                    topListCategory.splice(0, 4).map((item, index) => {
                        return (
                            <NavLink
                                to={{
                                    pathname: '',
                                    search: `id=${item.id}`
                                }}
                                className='item'
                                key={item.name} >
                                <div className='left'>
                                    <img src={imageSizeFormat(item.coverImgUrl, 40)} alt={item.name}></img>
                                </div>
                                <div className='item-info'>
                                    <p className='top-name'>{item.name}</p>
                                    <p className='updateFrequency'>{item.updateFrequency}</p>
                                </div>
                            </NavLink>
                        )
                    })
                }
            </div>
            <div className='list-header header-2'>全球媒体榜</div>
            <div className='category-list'>
                {
                    topListCategory.splice(4).map((item, index) => {
                        return (
                            <NavLink to={{
                                pathname: '',
                                search: `id=${item.id}`
                            }} className='item' key={item.id}>
                                <div className='left'>
                                    <img src={imageSizeFormat(item.coverImgUrl, 40)} alt={item.name}></img>
                                </div>
                                <div className='item-info'>
                                    <p className='top-name'>{item.name}</p>
                                    <p className='updateFrequency'>{item.updateFrequency}</p>
                                </div>
                            </NavLink>
                        )
                    })
                }
            </div>
        </ListCategoryWrapper>
    )
})

export default LListCategory