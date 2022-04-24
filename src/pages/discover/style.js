import styled from 'styled-components'

export const DiscoverWrapper = styled.div`
    .top {
        z-index: 90;
        height: 35px;
        box-sizing: border-box;
        background-color: #C20C0C;
        border-bottom: 1px solid #a40011;
       
    }
`
export const TopMenu = styled.div`
 .top-menu-list{
            display: flex;
            flex-flow: row;
            margin-left: 180px;

            li,a {
                height: 34px;
                text-align: center;
                em {
                display: inline-block;
                height: 20px;
                padding: 0 13px;
                margin: 7px 17px 0;
                border-radius: 20px;
                line-height: 21px;
                color: #FFF;

                &:hover {
                background: #9B0909;
                }
             }
            }
            a.active > em {
                background: #9B0909;
             }
         
        }
`
export const DiscoverContentWrapper = styled.div``