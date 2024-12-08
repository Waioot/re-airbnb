import styled from 'styled-components';

export const DatePickerWrapper = styled.div`
  width: 600px;
  padding: 20px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  position: absolute;
  /* top: 180px; */
  top: 300px;
  left: 10px;
  transform: translate(-50%, -50%);

  .calendars-wrapper {
    display: flex;
    justify-content: space-between;
  }

  .calendar {
    width: 280px;
    padding: 0 12px;
  }

  .calendar-header {
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 20px;
    padding: 22px 0 20px 0;
    position: relative;

    button {
      background: none;
      border: none;
      cursor: pointer;
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      position: absolute;
      transition: 0.2s ease;

      &:hover {
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        border-radius: 50%;
        background-color: #e0e0e0;
      }
    }

    button:first-child {
      left: 12px;
    }

    button:last-child {
      right: 12px;
    }

    span {
      font-size: 16px;
      font-weight: 500;
    }
  }

  .calendar-weeks {
    padding-bottom: 12px;
  }

  .calendar-weeks,
  .calendar-days {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    text-align: center;
  }

  .week-day {
    font-weight: bold;
    color: #6a6a6a;
    font-size: 12px;
    font-weight: 500;
  }

  .day,
  .empty-day {
    height: 40px;
    line-height: 40px;
    margin: 2px 0;
  }

  .day {
    cursor: pointer;
    position: relative;
    width: 40px; /* 固定宽度 */
    height: 40px; /* 固定高度 */
    line-height: 40px; /* 确保文本垂直居中 */
    box-sizing: border-box; /* 包含内边距和边框 */
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      border: 1px solid #000;
      border-radius: 50%;
    }
  }

  .day.selected {
    background-color: #000;
    border-radius: 50%;
    color: #fff;
  }

  .day.disabled {
    color: #ccc;
    cursor: not-allowed;
    &:hover {
      background-color: transparent;
    }
  }

  .footer {
    display: flex;
    justify-content: flex-end;
    gap: 12px;
    margin-top: 20px;
    padding-top: 12px;
    border-top: 1px solid #ebebeb;

    button {
      padding: 8px 16px;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-size: 14px;
      font-weight: 500;

      &.btn-clear {
        background-color: #fff;
        color: #222;
        &:hover {
          background-color: #f5f5f5;
        }
      }

      &.btn-close {
        background-color: #222;
        color: #fff;
        &:hover {
          background-color: #000;
        }
      }
    }
  }
`;
