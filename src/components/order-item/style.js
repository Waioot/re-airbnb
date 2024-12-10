import styled from 'styled-components';

export const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 18px 0;
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
    .pets-desc {
      color: #222;
      font-size: 14px;
      font-weight: 500;
      text-decoration: underline;
    }
  }
  .control {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;

    .count {
      min-width: 20px;
      text-align: center;
      font-size: 16px;
    }

    .btn {
      background: #fff;
      border: none;
      outline: 1px solid #767676;
      border-radius: 50%;
      width: 32px;
      height: 32px;
      cursor: pointer;

      &.disabled {
        opacity: 0.3;
        cursor: not-allowed;
      }
    }
  }
`;
