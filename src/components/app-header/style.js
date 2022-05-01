import styled from 'styled-components'

export const HeaderWrapper = styled.div`
    height: 70px;
    background-color: #242424;

    .content {
        height: 70px;

        display: flex;
        justify-content: space-between;
    }
    .bar-bottom {
        position: relative;
        height: 5px;
        background-color: #C20C0C;
        z-index: 90;
    }
`
export const HeaderWrapperLeft = styled.div`

    display: flex;
    .logo {
        float: left;
        display: block;
        width: 176px;
        height: 69px;
        background-position: 0 0;
        text-indent: -9999px;
        a {
        float: left;
        width: 100%;
        height: 100%;
        padding-right: 20px;
         }
    }
    .bar-item-list {
        display: flex;
        line-height: 70px;
        justify-content: space-between;
        font-size: 14px;
    }
    .select-item {
        position: relative;
        a {
            display: block;
            color: #CCC;
            padding: 0 19px;
            text-align: center;
        }

        &:hover a ,a.active {
            color: #fff;
            background-color: #000;
            text-decoration: none;
        }

        .active .icon {
            position: absolute;
            display: block;
            width: 12px;
            height: 7px;
            bottom: -1px;
            left: 50%;
            transform: translate(-50%,0);
            background-position: -226px 0;
        }
    }

`
export const HeaderWrapperRight = styled.div`
    display: flex;
    align-items: center;
    color: #ccc;
    font-size: 14px;

    .search {
        width: 158px;
        height: 32px;
        border-radius: 16px;

        input {
            &::placeholder {
                font-size: 12px;
            }
        }
    }

    .creator-center {
        width: 90px;
        height: 32px;
        line-height: 33px;
        text-align: center;
        border: 1px solid #666;
        border-radius: 16px;
        margin:0 0 0 12px;
        font-size: 12px;
        color: #CCCCCC;
        text-decoration: none;

        &:hover , &.active a{
            color: #fff;
            border-color: #fff;
        }
    }

    .login-btn {
        font-size: 12px;
        margin: 0 20px;
        &:hover {
            color: #999;
        }
    }

`