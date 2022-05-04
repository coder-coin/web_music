import React, { memo } from 'react'

import { HeaderWrapper } from './style'

const LPlayerThemeHeader = memo((props) => {
    const { title } = props

    return (
        <HeaderWrapper>
            <h3>{title}</h3>
        </HeaderWrapper>
    )
})
export default LPlayerThemeHeader