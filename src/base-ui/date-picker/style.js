import styled from 'styled-components';

export const DatePickerWrapper = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 12px;

  .calendar-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;

    .switch-btn {
      cursor: pointer;
      padding: 8px;
      font-size: 20px;
      color: #222;
      &:hover {
        background-color: #f5f5f5;
        border-radius: 50%;
      }
    }

    .month-info {
      display: flex;
      gap: 100px;
      font-size: 16px;
      font-weight: 500;
    }
  }

  .calendars-wrapper {
    display: flex;
    gap: 24px;
  }

  .calendar {
    flex: 1;
  }

  .calendar-weeks {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    text-align: center;
    margin-bottom: 8px;

    .week-day {
      height: 40px;
      line-height: 40px;
      font-size: 12px;
      color: #717171;
    }
  }

  .calendar-body {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 2px;

    .calendar-day {
      height: 40px;
      line-height: 40px;
      text-align: center;
      position: relative;
      font-size: 14px;
      color: #222;
      z-index: 1;

      &:not(.empty) {
        cursor: pointer;

        &::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          transition: all 0.2s ease;
          border: 2px solid transparent;
          z-index: -1;
        }

        &.in-range {
          background-color: transparent;
          position: relative;

          &::after {
            content: '';
            position: absolute;
            top: 0;
            left: -1px;
            right: -1px;
            bottom: 0;
            background-color: #f7f7f7;
            z-index: -2;
          }

          &:hover {
            &::before {
              background-color: #eee;
              border-color: transparent;
            }
          }
        }

        &.start-date {
          color: #fff;
          font-weight: 500;

          &::before {
            background-color: #222;
            border-color: #222;
          }

          &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 50%;
            right: -1px;
            bottom: 0;
            background-color: #f7f7f7;
            z-index: -2;
          }

          &:hover::before {
            background-color: #000;
          }
        }

        &.end-date {
          color: #fff;
          font-weight: 500;

          &::before {
            background-color: #222;
            border-color: #222;
          }

          &::after {
            content: '';
            position: absolute;
            top: 0;
            left: -1px;
            right: 50%;
            bottom: 0;
            background-color: #f7f7f7;
            z-index: -2;
          }

          &:hover::before {
            background-color: #000;
          }
        }

        &:hover:not(.disabled):not(.start-date):not(.end-date)::before {
          border-color: #222;
        }

        &.disabled {
          color: #dddddd;
          cursor: not-allowed;

          &:hover::before {
            border-color: transparent;
          }
        }

        &.today:not(.start-date):not(.end-date) {
          font-weight: 500;

          &::before {
            border-color: #717171;
            border-width: 1px;
          }

          &:hover:not(.disabled)::before {
            border-color: #222;
            border-width: 2px;
          }
        }
      }

      &.empty {
        pointer-events: none;
        color: #dddddd;
      }
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
