import styled from 'styled-components';

export const DatePickerWrapper = styled.div`
  width: 100%;
  background-color: #fff;

  .picker-head {
    display: flex;
    flex-direction: column;

    .picker-head-title {
      font-size: 22px;
      font-weight: 500;
    }

    .from-to {
      padding-top: 8px;
      color: #6a6a6a;
      font-size: 14px;
      font-weight: 400;
    }
  }

  .calendars-wrapper {
    display: flex;
    justify-content: space-between;
  }

  .calendar {
    width: 280px;
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

  .calendar-weeks,
  .calendar-days {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    text-align: center;
    row-gap: 4px;
  }

  .week-day {
    font-weight: bold;
    color: #6a6a6a;
    font-size: 12px;
    font-weight: 500;
  }

  .calendar-days {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 4px;
  }

  .empty-day {
    width: 40px;
    height: 40px;
    margin: 0 auto;
  }

  .day,
  .empty-day {
    height: 40px;
    line-height: 40px;
    padding: 0;
    position: relative;
  }

  .day {
    cursor: pointer;
    position: relative;
    width: 40px;
    height: 40px;
    line-height: 40px;
    padding: 0;
    margin: 0 auto;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
  }

  .day:not(.selected):hover {
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border: 1.5px solid #000;
      border-radius: 50%;
    }
  }

  .day.in-range {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 100%;
      background-color: #f7f7f7;
      z-index: -2;
    }

    &.row-start::before {
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
    }

    &.row-end::before {
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
    }
  }

  .day.range-start {
    &::before {
      left: 50%;
      right: 0;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }

    &.row-end::before {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }

  .day.range-end {
    &::before {
      left: 0;
      right: 50%;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    &.row-start::before {
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
    }
  }

  .day.selected {
    color: #fff;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #000;
      border-radius: 50%;
      z-index: -1;
      width: 40px;
      height: 40px;
    }
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

    button {
      padding: 8px 16px;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-size: 14px;
      font-weight: 500;

      &.btn-clear {
        background-color: #fff;
        text-decoration: underline;
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
