import styled from 'styled-components'
export const MineWrapper = styled.div`
    background-color: #fff;
    border: 1px solid #d3d3d3;
    border-width: 0 1px;
    min-height: 700px;
    .no-login {
        width: 807px;
        height: 372px;
        margin: 0 auto 0;
        padding-top: 104px;
        background-position: 0 104px;
        .pic {
            display: block;
             h2 {
            height: 100px;
            text-indent: -9999px;
        }
        .btn {
            display: block;
            width: 167px;
            height: 45px;
            margin: 102px 0 0 482px;
            background-position: 0 9999px;
            text-indent: -9999px;
            &:hover {
                background-position: 0 -278px;
            }
        }
        }
       
    }
`