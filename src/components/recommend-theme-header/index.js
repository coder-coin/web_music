import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { HeaderWrapper } from './style'
const LRecommendThemeHeader = memo((props) => {
    const { title, keyword, left, right } = props
    return (
        <HeaderWrapper className={right ? 'sprite_02' : null} left={left}>
            <div className='left'>
                <h3 className='title'>{title}</h3>
                <div className='keyword'>
                    {
                        keyword.map((item, index) => {
                            return (
                                <div className='item' key={item}>
                                    <a href='/#'>{item}</a>
                                    <span className='divider'>|</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='right'>

                <a href='/#'>{right ? '更多' : '更多>'}</a>
                <i className={right ? `icon sprite_02` : `no-icon`}></i>
            </div>
        </HeaderWrapper>
    )
})
LRecommendThemeHeader.propTypes = {
    title: PropTypes.string.isRequired,
    keyword: PropTypes.array,
    left: PropTypes.bool,
    right: PropTypes.bool,
}
LRecommendThemeHeader.defaultProps = {
    keyword: [],
    left: true,
    right: true
}
export default LRecommendThemeHeader