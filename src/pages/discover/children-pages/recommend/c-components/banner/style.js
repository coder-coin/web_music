import styled from 'styled-components'
import download from '@/assets/img/download.png'
import btn from '@/assets/img/banner-btn.png'
export const BannerWrapper = styled.div`
    background: url(${props => props.bgImage}) center center / 6000px;
    .banner {
        display: flex;
        position: relative;
        height: 285px;
    }
     .slick-dots {
       li {
        width: 20px;
         height: 20px;
         button {
        width: 20px;
        height: 20px;
        opacity: 1;
        transition: none;
        color: unset;
        background: url(${btn}) no-repeat 0 9999px;
        background-position: 3px -343px;
        &:hover {
          background-position: -16px -343px;
        }
       }
       &.slick-active {
        width: 20px;
        margin-right: 0;
        button {
        background: url(${btn}) no-repeat 0 9999px;
        background-position: -16px -343px;
      }
       }
      }
    .slick-dots-bottom {
         bottom: 10px;
       }
  }

`
export const BannerLeft = styled.div`
     width:730px;
    .banner-item {
        overflow: hidden;
        height: 285px;
        .image {
            height: 100%;
            width: 100%;
        }
    }
`
export const BannerRight = styled.div`
           position: absolute;
            top: 0;
            z-index: 20;
            right: -1px;
            width: 254px;
            height: 285px;
            background-image: url(${download}); 
        .download-btn {
            display: block;
            width: 215px;
            height: 56px;
            margin: 186px 0 0 19px;
            background-position: 0 60px;
            text-indent: -9999px;
            background-image: url(${download}); 
        }
        p {
            margin: 10px auto;
            text-align: center;
            color: #8d8d8d;
        }
`
export const BannerControl = styled.div`
        position: absolute;
        left: 0;
        right: 0;
        top: 40%;
        transform: translateY(-50%);
  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    background-image: url(${btn});
    background-color: transparent;
    cursor: pointer;
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
  .left {
    left: -68px;
    background-position: 0 -360px;
  }
  .right {
    right: -68px;
    background-position: 0 -508px;
  }
`