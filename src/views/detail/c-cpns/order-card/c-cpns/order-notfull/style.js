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
        position: absolute;
        top: calc(100% + 12px);
        left: 50%;
        transform: translateX(-50%);
        z-index: 999;
        background-color: #fff;
        border-radius: 16px;
        box-shadow: 0 0 0 1px rgb(0 0 0 / 04%), 0 8px 28px rgba(0, 0, 0, 0.28);
        padding: 24px 32px;
        width: 600px;
        max-width: calc(100vw - 48px);

        .calendars-container {
          display: flex;
          gap: 24px;
          justify-content: center;

          & > div {
            .MuiDayCalendar-slideTransition {
              overflow: hidden !important;
            }
          }
        }

        &::before {
          content: '';
          position: absolute;
          top: -8px;
          left: 50%;
          transform: translateX(-50%) rotate(45deg);
          width: 16px;
          height: 16px;
          background-color: #fff;
          box-shadow: -1px -1px 0 0 rgb(0 0 0 / 04%);
        }
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
