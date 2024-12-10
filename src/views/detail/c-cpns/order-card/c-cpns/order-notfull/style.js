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
      grid-template-columns: 1fr 1fr;
      border-bottom: 1px solid #b0b0b0;

      .check-in,
      .check-out {
        position: relative;
        padding: 10px 12px;
        cursor: pointer;

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

      .order-date-popup {
        position: absolute;
        top: 80px;
        left: 30px;
        width: 100%;

        .order-date-picker {
          position: absolute;
          top: 0;
          right: 0;
          border-radius: 12px;
          border: 1px solid #eee;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          border-radius: 12px;
          box-sizing: border-box;
          padding: 20px;
          background-color: #fff; // 添加背景色
        }
      }
    }

    .guest-section {
      padding: 10px 12px;
      cursor: pointer;
      position: relative;

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

      .guest-info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 14px;
        color: #222;

        .icon {
          display: flex;
          align-items: center;
        }
      }

      .guest-popup {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: white;
        border-radius: 8px;
        box-shadow: 0 2px 16px rgba(0, 0, 0, 0.12);
        padding: 16px;

        .notice {
          font-size: 12px;
          color: #717171;
          margin: 16px 0;
        }

        .footer {
          display: flex;
          justify-content: flex-end;

          .btn {
            padding: 8px 16px;
            font-size: 14px;
            font-weight: 600;
            text-decoration: underline;
            cursor: pointer;

            &:hover {
              background-color: #f7f7f7;
              border-radius: 8px;
            }
          }
        }
      }
    }
  }
  .order-footer {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;

    .order-button {
      width: 100%;
      height: 48px;
      background: #e61e4d;
      border-radius: 8px;
      color: white;
      font-size: 16px;
      font-weight: 600;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: background-position 0.2s ease;

      &:hover {
        background-image: radial-gradient(
          circle,
          rgb(255, 56, 92) 0%,
          rgb(230, 30, 77) 27.5%,
          rgb(227, 28, 95) 40%,
          rgb(215, 4, 102) 57.5%,
          rgb(189, 30, 89) 75%,
          rgb(189, 30, 89) 100%
        );
        background-size: 200% 200%;
      }

      &:active {
        transform: scale(0.95);
      }
    }

    .footer-text {
      font-size: 14px;
      color: #222;
      text-align: center;
    }
  }
`;
