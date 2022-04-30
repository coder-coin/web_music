import styled from 'styled-components'
export const HotArtistsWrapper = styled.div`
    margin-top: 15px;
    .hot-artists-header {
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
    .hot-artists-list {
        margin: 6px 20px;
        a {
            text-decoration: none;
        }
        .list-item {
            display: flex;
            margin-top: 14px;
            background: #fafafa;
            .artist-info {
                width: 100%;
                padding-left: 14px;
                border: 1px solid #e9e9e9;
                border-left: none;
                .artist-name {
                    margin-top: 8px;
                    font-size: 14px;
                    font-weight: bold;
                    color: #333;
                }
                .artist-alias {
                    margin-top: 8px;
                }
            }
        }
    }
    .apply {
        display: flex;
        justify-content: center;
        margin: 20px;
        .apply-btn {
            color: #333;
            border-radius: 4px;
            padding: 0 5px 0 0;
            white-space: nowrap;
            width: 100%;
            background-position: right -100px;
            i {
                display: inline-block;
                text-align: center;
                height: 31px;
                line-height: 31px;
                width: 100%;
                background-position: 0 -59px;
                font-weight: bold;
                color: #333;
            }
        }
    }
`