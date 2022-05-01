import React, { memo } from 'react'
import { FriendWrapper } from './style'
const LFriend = memo(() => {
    return (
        <FriendWrapper className='wrap-v2'>
            <div className='no-login nologin_bg'>
            <div className='welcome'>
                <p>你可以关注明星和好友品味他们的私房歌单</p>
                <p>通过他们的动态发现更多精彩音乐</p>
            </div>
                   
                    <a href='/#' className='btn nologin_bg'>立即登录</a>
                </div>

        </FriendWrapper>
    )
})

export default LFriend