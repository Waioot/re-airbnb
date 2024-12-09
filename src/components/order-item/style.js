import styled from "styled-components";

export const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8px 0;
  .info {
    display: flex;
    flex-direction: column;
    margin-right: 16px;
    .title {
      font-size: 16px;
      font-weight: 600;
      color: #222;
    }
    .desc {
      margin-top: 8px;
      font-size: 12px;
      color: #767676;
    }
  }
  .control {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;

    .btn {
      background: #fff;
      border: 1px solid #ddd;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      cursor: pointer;
    }
    .btn.disabled {
      opacity: 0.5;
      pointer-events: none;
      cursor: not-allowed;
      background-color: #ccc;
      border-color: #999;
      color: #666;
    }
  }
`;
