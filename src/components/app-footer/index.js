import React, { memo } from 'react'
import { footerBarLinkList } from '@/common/local-data.js'

import { FooterWarpper, FooterWarpperLeft, FooterWarpperRight } from './style'
const LAppFooter = memo(() => {
    //获取底部连接列表项
    const getFooterBarListItem = (item, index) => {
        if (index <= 6) {
            return (
                <span key={item.link}>
                    <a href={item.link}>{item.title}</a>
                    <span>|</span>
                </span>
            )
        } else {
            return <a key={item.link} href={item.link}>{item.title}</a>
        }
    }
    //返回jsx
    return (
        <FooterWarpper>
            <div className='content wrap-v2'>
                <FooterWarpperLeft>
                    <p className='copy'>
                        {
                            footerBarLinkList.map((item, index) => {
                                return getFooterBarListItem(item, index)
                            })
                        }
                    </p>
                    <p className='footer-left-info-first'>
                        <span>网易公司版权所有©1997-2022</span>
                        <span>杭州乐读科技有限公司运营：</span>
                        <a href='https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/8282703158/452a/ca0c/3a10/caad83bc8ffaa850a9dc1613d74824fc.png'>浙网文[2021] 1186-054号</a>
                    </p>
                    <p className='footer-left-info-second'>
                        <a href='https://beian.miit.gov.cn/#/Integrated/index'>粤B2-20090191-18  工业和信息化部备案管理系统网站</a>
                        <a href='http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564'
                            className='police-link'>
                            <span className='police-logo'></span>
                            <span className='police-text'>浙公网安备 33010902002564号</span>
                        </a>
                    </p>
                </FooterWarpperLeft>
                <FooterWarpperRight>
                    <ul className='enter-list'>
                        <li className='enter-list-item'>
                            <a className='enter-icon logo-amped' href='https://web-amped.music.163.com/'>Amped Studio</a>
                            <span className='enter-title title-amped'></span>
                        </li>
                        <li className='enter-list-item'>
                            <a className='enter-icon logo-auth' href='https://music.163.com/st/userbasic#/auth'>用户认证</a>
                            <span className='enter-title title-auth'></span>
                        </li>
                        <li className='enter-list-item'>
                            <a className='enter-icon logo-musician' href='https://music.163.com/st/musician'>独立音乐人</a>
                            <span className='enter-title title-musician'></span>
                        </li>
                        <li className='enter-list-item'>
                            <a className='enter-icon logo-reward' href='https://music.163.com/web/reward'>赞赏</a>
                            <span className='enter-title title-reward'></span>
                        </li>
                        <li className='enter-list-item'>
                            <a className='enter-icon logo-cash' href='https://music.163.com/st/ncreator/revenue-plan'>视频奖励</a>
                            <span className='enter-title title-cash'></span>
                        </li>
                    </ul>
                </FooterWarpperRight>
            </div>

        </FooterWarpper>
    )
})

export default LAppFooter