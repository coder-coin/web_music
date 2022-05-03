import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { imageSizeFormat } from '@/utils/data-format'
import { getRadioTopListAction } from '../../store/actionCreator'
import LRecommendThemeHeader from 'components/recommend-theme-header'
import { RadioTopListWrapper } from './style'

const LRadioTopList = memo(() => {
    const { radioTopList } = useSelector(state => ({
        radioTopList: state.getIn(['djradio', 'radioTopList'])
    }))
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getRadioTopListAction(10))
    }, [dispatch])

    function handleState (rank, lastRank) {
        if (lastRank === -1) {
            return ' sprite_icon3 new'
        } else if (rank > lastRank) {
            return ' sprite_icon3 up'
        } else if (rank < lastRank) {
            return ' sprite_icon3 down'
        } else {
            return ' sprite_icon3 no-change'
        }
    }
    function handleRankNumber (rank, lastRank) {
        if (lastRank === -1) return
        if (rank > lastRank) {
            return rank - lastRank
        } else if (rank < lastRank) {
            return lastRank - rank
        } else {
            return 0
        }
    }
    function handleFontColor (rank, lastRank) {
        if (rank === lastRank) {
            return 'rank-number rank-number-no-change'
        } else if (rank < lastRank) {
            return 'rank-number rank-number-down'
        } else {
            return 'rank-number rank-number-up'
        }
    }
    return (
        <RadioTopListWrapper>
            <LRecommendThemeHeader title='节目排行榜' left={false} right={false} />
            <ul className='list'>
                {
                    radioTopList.map((item, index) => {
                        return (
                            <li className={(index + 1) % 2 === 0 ? 'item bg' : 'item'}>
                                <div className='rank'>
                                    <span className='index'>{item.rank < 10 ? '0' + item.rank : item.rank}</span>
                                    <div className='state'>
                                        <i className={handleState(item.rank, item.lastRank)}></i>
                                        <p className={handleFontColor(item.rank, item.lastRank)}>{handleRankNumber(item.rank, item.lastRank)}</p>
                                    </div>
                                </div>
                                <a href='/#' className='img'>
                                    <img src={imageSizeFormat(item.program.coverUrl, 40)} alt={item.program.name} />
                                </a>
                                <div className='info'>
                                    <h3 className='text-nowrap'>
                                        <a href='/#' className='name'>{item.program.name}</a>
                                    </h3>
                                    <h3 className='text-nowrap'>
                                        <a href='/#' className='description '>{item.program.radio.name}</a>
                                    </h3>
                                </div>
                                <span>
                                    <a href='/#' className='category'> {item.program.radio.category}</a>
                                </span>
                            </li>
                        )
                    })
                }
            </ul>
        </RadioTopListWrapper>
    )
})

export default LRadioTopList