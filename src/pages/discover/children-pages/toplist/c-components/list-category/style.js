import styled from 'styled-components'
export const ListCategoryWrapper = styled.div`
    .list-header {
        padding: 0 10px 12px 15px;
        font-size: 14px;
        color: #000;
        font-weight: bold;
        font-family: simsun;
    }
    .header-2 {
        margin-top: 20px;
    }
    .category-list {
        a {
            text-decoration: none;
        }
        .item {
            display: flex;
            align-items: center;
            padding: 10px 0 10px 20px;
            height: 62px;
            width: 100%;
            cursor: pointer;
            &:hover {
                background: #e6e6e6;
            }
            .left {
                width: 40px;
                height: 40px;
            }
              .item-info {
                padding-left: 10px;
                height: 42px;
                width: 100%;
                .top-name {
                    margin-bottom: 8px;
                    overflow: hidden;
                    color: #000;
                }
                .updateFrequency {
                    color: #999;
                }
            }
                
            
    
        }
        .active {
            background: #e6e6e6;
        }      
    }
`