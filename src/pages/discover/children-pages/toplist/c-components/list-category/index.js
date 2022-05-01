import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { changeActiveIndexAction, getTopListDetailAction } from '../../store/actionCreator'
import { imageSizeFormat } from '@/utils/data-format'
import { ListCategoryWrapper } from './style'

const LListCategory = memo(() => {
    //redux
    const { topListCategory, activeIndex } = useSelector(state => ({
        topListCategory: state.getIn(['toplist', 'topListCategory']),
        activeIndex: state.getIn(['toplist', 'activeIndex'])
    }), shallowEqual)
    const dispatch = useDispatch()
    useEffect(() => {
        const id = topListCategory[activeIndex] && topListCategory[activeIndex].id
        if (!id) return 
        //获取排行榜详情
        dispatch(getTopListDetailAction(id))

    }, [dispatch, topListCategory, activeIndex])

    //控制选择的排行榜
    function handleSelect (index) {
        dispatch(changeActiveIndexAction(index))
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
                                <div
                                    className={index === activeIndex ? 'item active' : 'item'}
                                    onClick={e => handleSelect(index)}
                                >
                                    <div className='left'>
                                        <img src={imageSizeFormat(item.coverImgUrl, 40)} alt={item.name}></img>
                                    </div>
                                    <div className='item-info'>
                                        <p className='top-name'>{item.name}</p>
                                        <p className='updateFrequency'>{item.updateFrequency}</p>
                                    </div>
                                </div>
                            </div>

                        )
                    })
                }
            </div>
        </ListCategoryWrapper>
    )
})

export default LListCategory