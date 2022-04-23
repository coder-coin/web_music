import styled from 'styled-components'
import footer_sprite_icon from '@/assets/img/sprite_footer_icon.png'
import footer_sprite_title from '@/assets/img/sprite_footer_title.png'
export const FooterWarpper = styled.div`
    position: relative;
    height: 172px;
    overflow: hidden;
    border-top: 1px solid #d3d3d3;
    background: #f2f2f2;
    .content {
        display: flex;
        justify-content: space-between;
    }
`
export const FooterWarpperLeft = styled.div`
    width: 520px;
    padding-top: 15px;
    line-height: 24px;
    .copy {
        display: flex;
        flex-flow: row;
        a {
            color: #999;
        }
        span {
            margin: 0 2px 0 4px;
            color: #c2c2c2;
        }
    }
    .footer-left-info-first {
        color: #666;
        span:first-of-type {
            margin-right: 14px;
        }
    }
    .footer-left-info-second {
        .police-link {
            margin-left: 5px;
        }
        .police-logo {
            width: 14px;
            height: 14px;
            background: url(https://s2.music.126.net/style/web2/img/3rd/police.png?1826a1847329f9748f174adcd11dfe98) no-repeat;
            background-size: cover;
            display: inline-block;
            margin-right: 2px;
            vertical-align: -2px;
        }
        .police-text {
            font-size: 12px;
        }
    }

`
export const FooterWarpperRight = styled.div`
        width: 420px;
        margin-top: 33px;
        .enter-list {
            display: flex;
            flex-flow: row;
            li:first-of-type {
                margin-left: 0;
            }
            .enter-list-item {
                width: 60px;
                height: 70px;
                margin-left: 30px;
                text-align: center;
                color: #666; 
                a {
                    display: block;
                    width: 50px;
                    height: 45px;
                    margin: 0 auto;
                    text-indent: -9999px;
                }
                .enter-icon {
                    background: url(${footer_sprite_icon}) no-repeat;
                    background-size: 110px 552px;
                }
                .enter-title {
                    background: url(${footer_sprite_title}) no-repeat;
                    background-size: 180px 139px;
                    display: inline-block;
                    margin: 5px 5px 0;
                    width: 52px;
                    height: 14px;
                }

                .logo-amped {
                    background-position: -63px -456.5px;
                }
                .logo-auth {
                    background-position: -63px -101px;
                }
                .logo-musician {
                    background-position: 0 0;
                }
                .logo-reward {
                    background-position: -60px -50px;
                }
                .logo-cash {
                    background-position: 0 -101px;
                }
                .title-amped {
                    background-position: 0 -108px;
                    margin-left: -6px;
                    width: 72px;
                }
                .title-auth {
                    background-position: -1px -91px;
                }
                .title-musician {
                    background-position: 0 0;
                }
                .title-reward {
                    background-position: 0 -54px;
                }
                .title-cash {
                    background-position: -1px -72px;
                }
            }
        }

`