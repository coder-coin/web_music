import styled from "styled-components"

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 5px;
  border-bottom: 2px solid #c20c0c;
  .left {
    display: flex;
    align-items: flex-end;
    .title {
      font-size: 20px;
      font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
    }
    .count {
        color: #666;
      margin-bottom: 5px;
      margin-left: 20px;
    }
  }
  .right {
    .count {
    font-weight: bold;
      color: #c20c0c;
    }
  }
`