import styled from 'styled-components'
export const HotAnchorsWrapper = styled.div`
    margin-top: 20px;
    .hot-anchor-header{
    display: flex;
    justify-content: space-between;
    height: 23px;
    margin: 0 20px;
    border-bottom: 1px solid #ccc;
    font-size: 12px;
    color: #333;
    .header-title {
        font-weight: bold;
    }
    }
    .hot-anchor-list {
        margin: 20px;
        .item {
            display: flex;
            flex-flow: row;
            margin-top: 10px;
            width: 210px;
            .anchor-info {
                padding-left: 14px;
                width: 160px;
                line-height: 21px;
                p {
                width: 100%;
                }
                .anchor-name {
                    color: #000;
                }
                .anchor-position {
                    color: #666;
                }
            }
        }
    }
`