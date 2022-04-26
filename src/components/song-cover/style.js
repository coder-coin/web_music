import styled from 'styled-components'
export const SongCoverWrapper = styled.div`
    width: 140px;
    height: 204px;
    margin: 20px ${props => (props.right || 0)} 20px 0;
    .song-cover-top {
    position: relative;
    width: 140px;
    height: 140px;
    &>img {
        display: block;
        width: 100%;
        height: 100%;
    }

    a {
        cursor: pointer;
    }

    .top-icon-active {
        position: absolute;
        top: 0;
        left: 0;
        width: 40px;
        height: 40px;
        background-position: -135px -220px;
    }
    .top-icon-unactive{
        display: none;
    }
    .song-cover-mask {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-position: 0 0;
        text-indent: -9999px;
    }
    
    .song-cover-bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 27px;
        background-position: 0 -537px;
        color: #ccc;
        .headset-icon {
            display: inline-block;
            width: 14px;
            height: 11px;
            background-position: 0 -24px;
            margin:0 5px 0 10px;
        }
        .play-icon {
            display: inline-block;
            width: 16px;
            height: 17px;
            margin-right: 10px;
            background-position: 0 0;
            text-indent: -9999px;
        }
      
    }
  }
  .song-cover-description {
    font-size: 14px;
    color: #000;
    margin-top: 5px;
  }
  .song-cover-source {
    color: #666;
  }
`