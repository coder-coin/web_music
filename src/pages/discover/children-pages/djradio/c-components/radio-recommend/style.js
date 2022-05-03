import styled from 'styled-components'
export const RadioRecommendWrapper = styled.div`
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
            .img {
                margin-left: 20px;
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
                margin-left:10px;
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