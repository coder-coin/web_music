import styled from 'styled-components'

export const AlbumCoverWrapper = styled.div`
    width: ${props => props.width + "px"};
  .album-image {
    position: relative;
    width: ${props => props.width + "px"};
    height: ${props => props.size + "px"};
    margin-bottom: 7px;
    img {
      width: ${props => props.size + "px"};
      height: ${props => props.size + "px"};
    }
    .mask {   
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-position: 0 ${props => props.bgp};
      text-indent: -9999px;
    }
    &:hover .play-icon {
        position: absolute;
        right: 10px;
        bottom: 5px;
        left: 72px;
        width: 22px;
        height: 22px;
        background-position: 0 -85px;
        text-indent: -9999px;
    }  
  }
  .album-info {
    font-size: 12px;
    width: ${props => props.size};
    p {
        width: 90%;
        line-height: 18px;
        :first-of-type a {
          color: #000;
        }
    }
    .name {
      color: #000;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .artist {
      color: #666;
    }
  }
`