import styled from 'styled-components'
import sprite_icon from '@/assets/img/sprite_icon.png'
import state_bar from '@/assets/img/state_bar.png'
export const PlayerBarWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 53px;
  background-position: 0 0;
  background-repeat: repeat;
  z-index: 9999;

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    height: 47px;
  }
`

export const Control = styled.div`
  display: flex;
  width: 137px;
  align-items: center;
  i {
    cursor: pointer;
  }
  .prev, .next {
    width: 28px;
    height: 28px;
  }

  .prev {
    background-position: 0 -130px;
    &:hover {
      background-position: -30px -130px;
    }
  }

  .play {
    width: 36px;
    height: 36px;
    margin: 0 8px;
    background-position: 0 ${props => props.isPlaying ? "-165px" : "-204px"};
    &:hover {
      background-position: ${props => props.isPlaying ? '-40px -165px' : '-40px -204px'};
    }
  }

  .next {
    background-position: -80px -130px;
    &:hover {
      background-position: -110px -130px;
    }
  }
`

export const PlayInfo = styled.div`
  position: relative;
  display: flex;
  width: 642px;
  align-items: center;

  .image {
    width: 34px;
    height: 34px;
    border-radius: 5px;
  }
  .mask {
    position: absolute;
    top: 50%;
    left: 0px;
    transform: translateY(-50%);
    display: block;
    width: 34px;
    height: 34px;
    text-indent: -9999px;
  }
  .info {
    flex: 1;
    color: #a1a1a1;
    margin-left: 10px;

    .song {
      color: #e1e1e1;
      position: relative;
      top: 8px;
      left: 8px;

      .singer-name {
        color: #a1a1a1;
        margin-left: 10px;
      }
    }

    .progress {
      display: flex;
      align-items: center;

      .ant-slider {
        width: 493px;
        margin-right: 10px;

        .ant-slider-rail {
          height: 9px;
          background: url(${state_bar}) right 0;
        }

        .ant-slider-track {
          height: 9px;
          background: url(${state_bar}) left -66px;
        }

        .ant-slider-handle {
          width: 22px;
          height: 24px;
          border: none;
          margin-top: -7px;
          background: url(${sprite_icon}) 0 -250px;
        }
      }

      .time {
        .now-time {
          color: #e1e1e1;
        }
        .divider {
          margin: 0 3px;
        }
      }
    }
  }
`

export const Operations = styled.div`
  display: flex;
  position: relative;
  align-items: center;

  .btn {
    width: 25px;
    height: 25px;
    cursor: pointer;
    text-indent: -9999px;
  }
  .pic_in_pic {
    background-position: 0 0;
    &:hover {
      background-position-y:-25px;
    }
  }
  .favor {
    background-position: -88px -163px;
    &:hover {
      background-position: -88px -189px;
    }
  }

  .share {
    background-position: -114px -163px;
    &:hover {
      background-position: -114px -189px;
    }
  }

  .right {
    width: 126px;
    padding-left: 13px;
    background-position: -147px -248px;
    display: flex;
    .volume {
      background-position: -2px -248px;
      &:hover {
        background-position: -31px -248px;
      }
    }

    .loop {
      background-position: ${props => {
    switch (props.playerMode) {
      case 1:
        return "-66px -248px"
      case 2:
        return "-66px -344px"
      default:
        return "-3px -344px"
    }
  }};
  &:hover {
    background-position: ${props => {
    switch (props.playerMode) {
      case 1:
        return "-93px -248px"
      case 2:
        return "-93px -344px"
      default:
        return "-33px -344px"
    }
  }
  };
  }
    }

    .playlist {
        width: 59px;
        background-position: -42px -68px;
        display: block;
        padding-left: 21px;
        line-height: 27px;
        text-align: center;
        color: #666;
        text-shadow: 0 1px 0 #080707;
        text-indent: 0;
        text-decoration: none;
        &:hover {
          background-position: -42px -98px;
        }
    }
  }
`