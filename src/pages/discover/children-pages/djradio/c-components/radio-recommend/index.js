import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { imageSizeFormat } from '@/utils/data-format'
import { getRadioRecommendAction } from '../../store/actionCreator'
import LRecommendThemeHeader from 'components/recommend-theme-header'
import { RadioRecommendWrapper } from './style'

const LDjRadioRecommend = memo(() => {
  const { radioRecommend } = useSelector(state => ({
    radioRecommend: state.getIn(['djradio', 'radioRecommend'])
  }))
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getRadioRecommendAction())
  }, [dispatch])
  return (
    <RadioRecommendWrapper>
      <LRecommendThemeHeader title='推荐节目' left={false} right={false} />
      <ul className='list'>
        {
          radioRecommend.map((item, index) => {
            return (
              <li className={(index + 1) % 2 === 0 ? 'item bg' : 'item'}>
                <a href='/#' className='img'>
                  <img src={imageSizeFormat(item.picUrl, 40)} alt={item.name} />
                </a>
                <div className='info'>
                  <h3 className='text-nowrap'>
                    <a href='/#' className='name'>{item.name}</a>
                  </h3>
                  <h3 className='text-nowrap'>
                    <a href='/#' className='description '>{item.copywriter}</a>
                  </h3>
                </div>
                <span>
                  <a href='/#' className='category'> {item.category}</a>
                </span>
              </li>
            )
          })
        }
      </ul>
    </RadioRecommendWrapper>
  )
})

export default LDjRadioRecommend