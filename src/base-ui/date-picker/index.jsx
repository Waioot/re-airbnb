import React, { memo, useState } from 'react';
import { DatePickerWrapper } from './style';
import dayjs from 'dayjs';
import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';

const DatePicker = memo(
  ({ startDate, endDate, setStartDate, setEndDate, onClose }) => {
    const [currentMonth, setCurrentMonth] = useState(dayjs());

    const handleMonthChange = direction => {
      setCurrentMonth(prev =>
        direction === 'prev' ? prev.subtract(1, 'month') : prev.add(1, 'month')
      );
    };

    const handleDateClick = day => {
      if (day.isBefore(dayjs(), 'day')) return;

      if (!startDate || (startDate && endDate)) {
        setStartDate(day);
        setEndDate(null);
      } else if (day.isBefore(startDate)) {
        setEndDate(startDate);
        setStartDate(day);
      } else {
        setEndDate(day);
      }
    };

    const renderHeader = (month, isLeft) => (
      <div className='calendar-header'>
        {isLeft && (
          <button onClick={() => handleMonthChange('prev')}>
            <IconArrowLeft />
          </button>
        )}
        <span>{month.format('YYYY 年 M 月')}</span>
        {!isLeft && (
          <button onClick={() => handleMonthChange('next')}>
            <IconArrowRight />
          </button>
        )}
      </div>
    );

    const renderWeekDays = () => {
      const weekDays = ['一', '二', '三', '四', '五', '六', '日'];
      return (
        <div className='calendar-weeks'>
          {weekDays.map(day => (
            <div key={day} className='week-day'>
              {day}
            </div>
          ))}
        </div>
      );
    };

    const renderDays = month => {
      const daysInMonth = month.daysInMonth();
      const firstDayOfMonth = month.startOf('month').day() || 7;
      const days = [];

      for (let i = 1; i < firstDayOfMonth; i++) {
        days.push(<div key={`empty-${i}`} className='empty-day'></div>);
      }

      for (let i = 1; i <= daysInMonth; i++) {
        const currentDay = month.date(i);
        const isDisabled = currentDay.isBefore(dayjs(), 'day');
        const isSelected =
          (startDate && currentDay.isSame(startDate, 'day')) ||
          (endDate && currentDay.isSame(endDate, 'day'));

        days.push(
          <div
            key={i}
            className={`day ${isDisabled ? 'disabled' : ''} ${
              isSelected ? 'selected' : ''
            }`}
            onClick={() => handleDateClick(currentDay)}
          >
            {i}
          </div>
        );
      }

      return <div className='calendar-days'>{days}</div>;
    };

    const handleClear = () => {
      setStartDate(null);
      setEndDate(null);
    };

    return (
      <DatePickerWrapper>
        <div className='calendars-wrapper'>
          <div className='calendar'>
            {renderHeader(currentMonth, true)}
            {renderWeekDays()}
            {renderDays(currentMonth)}
          </div>
          <div className='calendar'>
            {renderHeader(currentMonth.add(1, 'month'), false)}
            {renderWeekDays()}
            {renderDays(currentMonth.add(1, 'month'))}
          </div>
        </div>
        <div className='footer'>
          <button className='btn-clear' onClick={handleClear}>
            清除
          </button>
          <button className='btn-close' onClick={onClose}>
            关闭
          </button>
        </div>
      </DatePickerWrapper>
    );
  }
);

export default DatePicker;
