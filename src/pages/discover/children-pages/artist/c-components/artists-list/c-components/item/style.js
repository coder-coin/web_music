import styled from 'styled-components'

export const ItemWrapper = styled.div`
  width: 130px;
  margin-top: 15px;
  .image {
    position: relative;
    img {
      width: 130px;
      height: 130px;
    }
    .mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-position: 0 -680px;
    text-indent: -9999px;
    }
  }
  .info {
    margin: 10px 0;
    display: flex;
    .name {
      cursor: pointer;
      
      &:hover {
        color: red;
        text-decoration: underline;
      }
    }
    .icon {
      display: inline-block;
      width: 17px;
      height: 18px;
      background-position: 0 -740px;
      margin-left: 2px;
    }
  }
`