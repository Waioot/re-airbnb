import styled from 'styled-components';

export const OrderNotFullWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 24px;

  .order-header {
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: end;

    .price-text {
      font-size: 16px;
      font-weight: 400;
      color: #222;
    }
    .price-num {
      font-size: 22px;
      font-weight: 500;
      color: #222;
    }
  }

  .order-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    border: 1px solid #b0b0b0;
    border-radius: 8px;

    .date-section {
      position: relative;
      display: grid;
      min-height: 56px;
      grid-template-columns: 1fr 1fr;
      border-bottom: 1px solid #ebebeb;

      .check-in,
      .check-out {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: start;
        padding: 10px 12px;
        cursor: pointer;

        &:hover {
          background-color: #f7f7f7;
          border-radius: 8px;
        }

        .label {
          color: #222;
          font-size: 12px;
          font-weight: 600;
          margin-bottom: 4px;
        }

        .date {
          font-size: 14px;
          color: #222;
        }
      }
      .calendar-wrapper {
        position: relative;
      }
    }
    .label {
      color: #222;
      font-size: 10px;
      margin-bottom: 4px;
    }
    .guest-section {
      min-height: 56px;
    }
  }
`;
