import React, { memo } from 'react'
import { MineWrapper } from './style'
const LMine = memo(() => {
    return (
        <MineWrapper className='wrap-v2'>
            <div className='no-login mymusic_bg'>
                <div className='pic'>
                    <h2>登陆网易云音乐</h2>
                    <a href='/#' className='btn mymusic_bg'>立即登录</a>
                </div>

            </div>
        </MineWrapper>
    )
})

export default LMine