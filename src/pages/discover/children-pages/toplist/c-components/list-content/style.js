import styled from 'styled-components'
export const ListContentWrapper = styled.div``
export const ListContentHeaderWrapper = styled.div`
    padding: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .list-img {
        position: relative;
        padding: 3px;
        border: 1px solid #ccc;
        .mask {
            position: absolute;
            top: 0;
            right: 0;
            width: 150px;
            height: 150px;
            background-position: -230px -380px;
        }
    }
    .info {
        margin-left: 37px;
        width: 100%;
        .name {
            line-height: 24px;
            font-size: 20px;
            font-weight: normal;
        }
        .update-info {
            line-height: 35px;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            .time-icon {
            display: inline-block;
            width: 13px;
            height: 13px;
            background-position: -18px -682px;
        }
            .update-time {
                margin-left: 5px;
                counter-reset: #666;
            }
            .update-number {
                margin-left: 5px;
                color: #999;
            }
        }
        .btn-list {
            height: 31px;
            .play {
                color: #fff;
                background-position: right -428px;
            }
            .subscribed {

            }
            .share {

            }
            .download {

            }
            .comment {

            }
        }
    }
`
export const ListContentBodyWrapper = styled.div`
     padding: 40px;
     .play-list {
    table {
      width: 100%;
      border: 1px solid #d9d9d9;
      thead {
        th {
          height: 34px;
          line-height: 34px;
          background-image: url(${require("@/assets/img/sprite_table.png")});
          color: #666;
          border: 1px solid #ddd;
          border-width: 0 0 1px 1px;
          padding-left: 10px;
        }
        .ranking {
          width: 78px;
          border-left: none;
        }
        .duration {
          width: 91px;
        }
        .singer {
          width: 173px;
        }
      }
      tbody {
        td {
          padding: 6px 10px;
        }
        tr:nth-child(2n) {
          background-color: #fff;
        }
        tr:nth-child(2n+1) {
          background-color: #f7f7f7;
        }
        .rank-num {
          display: flex;
          .num {
            width: 25px;
            height: 18px;
            text-align: center;
            color: #999;
          }
          .new {
            width: 16px;
            height: 17px;
            margin-left: 12px;
            background-position: -67px -283px;
          }
        }
        .song-name {
          display: flex;
          align-items: center;
          img {
            width: 50px;
            height: 50px;
            margin-right: 10px;
          }
          .play {
            width: 17px;
            height: 17px;
            background-position: 0 -103px;
            text-indent: -9999px;
            cursor: pointer;
            &:hover {
                background-position:  0 -128px;
            }
          }
          .name {
            margin-left: 10px;
          }
          .alia {
           color: #aeaeae
          }
        }
      }
    }
  }
`