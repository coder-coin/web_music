import React, { memo, useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { changeActiveIndexAction, getAllTopListCategoryAction } from '../../store/actionCreator'
import { imageSizeFormat } from '@/utils/data-format'
import { ListCategoryWrapper } from './style'

const LListCategory = memo(() => {
    const [currentIndex, setcurrentIndex] = useState(0)
    const { topListCategory } = useSelector(state => ({
        topListCategory: state.getIn(['toplist', 'topListCategory'])
    }), shallowEqual)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllTopListCategoryAction())
        dispatch(changeActiveIndexAction(currentIndex))
    }, [dispatch, currentIndex])

    //控制选择的排行榜
    function handleSelect (index) {
        setcurrentIndex(index)
    }
    const listCategory = topListCategory || []
    return (
        <ListCategoryWrapper>
            <div className='category-list'>
                {
                    listCategory.map((item, index) => {
                        let header = null
                        if (index === 0 || index === 4) {
                            header = <div className={index === 0 ? 'list-header' : 'list-header header-2'}>{index === 0 ? '云音乐特色榜' : '全球媒体榜'}</div>
                        }
                        return (
                            <div key={item.name} >
                                {header}
                                <Link
                                    to={{
                                        pathname: '',
                                        search: `id=${item.id}`
                                    }}
                                    className={index === currentIndex ? 'item active' : 'item'}
                                    onClick={e => handleSelect(index)}
                                >
                                    <div className='left'>
                                        <img src={imageSizeFormat(item.coverImgUrl, 40)} alt={item.name}></img>
                                    </div>
                                    <div className='item-info'>
                                        <p className='top-name'>{item.name}</p>
                                        <p className='updateFrequency'>{item.updateFrequency}</p>
                                    </div>
                                </Link>
                            </div>

                        )
                    })
                }
            </div>
        </ListCategoryWrapper>
    )
})

export default LListCategory