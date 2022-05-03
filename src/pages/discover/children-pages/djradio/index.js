import React, { memo } from 'react'
import LDjRadioCategory from './c-components/category'
import LDjRadioRecommend from './c-components/radio-recommend'
import LRadioTopList from './c-components/radio-toplist'
import { DjRadioWrapper, DjRadioContentWrapper, DjRadioListWrapper } from './style'
const LDjradio = memo(() => {
    return (
        <DjRadioWrapper>
            <DjRadioContentWrapper className='wrap-v2'>
                <LDjRadioCategory />
                <DjRadioListWrapper>
                    <LDjRadioRecommend />
                    <LRadioTopList />
                </DjRadioListWrapper>
            </DjRadioContentWrapper>
        </DjRadioWrapper>
    )
})

export default LDjradio