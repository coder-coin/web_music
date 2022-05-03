import styled from 'styled-components'
export const RadioTopListWrapper = styled.div`
          width: 426px;
    .list {
        border: 1px solid #e2e2e2;
        border-top: none;
        .item {
            display: flex;
            align-items: center;
            width: 424px;
            height: 60px;
            padding: 10px 0;
            line-height: 40px;
            .rank {
                font-size: 14px;
                height: 40px;
                width: 47px;
                text-align: center;
                vertical-align: middle;
                line-height: normal;
                .index {
                    color: #da4545;
                    width: 100%;
                    display: block;
                    height: 14px;
                    text-align: center;
                    margin-top: 6px;
                }
                .state {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    .new {
                    display: inline-block;
                    overflow: hidden;
                    vertical-align: middle;
                    width: 16px;
                    height: 17px;
                    background-position: -67px -283px;
                }
                .up {
                    display: inline-block;
                    width: 6px;
                    height: 6px;
                    background-position: -74px -304px;
                }
                .down {
                    display: inline-block;
                    width: 6px;
                    height: 6px;
                    background-position: -74px -324px;
                }
                .no-change {
                    display: inline-block;
                    width: 6px;
                    height: 6px;
                    background-position: -74px -274px;
                }
                .rank-number {
                    line-height: normal;
                    font-size: 10px;
                }
                .rank-number-no-change {
                    color: #999;
                }
                .rank-number-down {
                    color: #4abbeb;
                }
                .rank-number-up {
                    color: #ba2226;
                }
                }
            
                }
            
            .img {
                width: 40px;
                height: 40px;
                img {
                    width: 100%;
                    height: 100%;
                    display: block;
                }
            }
            .info {
                width: 254px;
                margin: 1px 0 0 10px;
                line-height: 20px;
                a {
                    font-size: 12px;
                }
                .name {
                    width: 100%;
                    color: #333;
                }
                .description {
                    color: #999;
                }
            }
            .category {
                display: inline-block;
                text-align: center;
                vertical-align: middle;
                overflow: hidden;
                padding: 0 6px;
                border: 1px solid #999;
                line-height: 16px;
                line-height: 18px;
                color: #999;
                font-size: 12px;
            }
        }
        .bg {
            background: #f7f7f7;
        }
    }
`