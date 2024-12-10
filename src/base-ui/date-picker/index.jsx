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

      // 添加上个月的日期
      for (let i = 1; i < firstDayOfMonth; i++) {
        days.push(<div key={`empty-${i}`} className='empty-day'></div>);
      }

      // 添加当月的日期
      for (let i = 1; i <= daysInMonth; i++) {
        const currentDay = month.date(i);
        const isDisabled = currentDay.isBefore(dayjs(), 'day');
        const isSelected =
          (startDate && currentDay.isSame(startDate, 'day')) ||
          (endDate && currentDay.isSame(endDate, 'day'));
        const isInRange =
          startDate &&
          endDate &&
          ((currentDay.isAfter(startDate) && currentDay.isBefore(endDate)) ||
            currentDay.isSame(startDate, 'day') ||
            currentDay.isSame(endDate, 'day'));

        const isRangeStart = startDate && currentDay.isSame(startDate, 'day');
        const isRangeEnd = endDate && currentDay.isSame(endDate, 'day');

        // 计算在当前行的位置
        const currentPosition = days.length % 7;
        const isRowStart = currentPosition === 0;
        const isRowEnd = currentPosition === 6;

        days.push(
          <div
            key={i}
            className={`day 
              ${isDisabled ? 'disabled' : ''} 
              ${isSelected ? 'selected' : ''} 
              ${isInRange ? 'in-range' : ''}
              ${isRangeStart ? 'range-start' : ''}
              ${isRangeEnd ? 'range-end' : ''}
              ${isRowStart ? 'row-start' : ''}
              ${isRowEnd ? 'row-end' : ''}`}
            onClick={() => handleDateClick(currentDay)}
          >
            {i}
          </div>
        );
      }

      // 添加下个月的日期，确保总是显示6行
      const totalDays = 42; // 6行 * 7列
      const remainingDays = totalDays - days.length;
      for (let i = 1; i <= remainingDays; i++) {
        days.push(<div key={`next-${i}`} className='empty-day'></div>);
      }

      return <div className='calendar-days'>{days}</div>;
    };

    const handleClear = () => {
      setStartDate(null);
      setEndDate(null);
    };

    return (
      <DatePickerWrapper>
        <div className='picker-head'>
          <div className='picker-head-title'>
            {startDate && endDate
              ? `${dayjs(endDate).diff(startDate, 'day')}晚`
              : '选择日期'}
          </div>
          <div className='from-to'>
            {startDate && endDate
              ? `${dayjs(startDate).format('YYYY年M月D日')} - ${dayjs(
                  endDate
                ).format('YYYY年M月D日')}`
              : '添加日期以查看具体价格'}
          </div>
        </div>
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
            清除日期
          </button>
          {onClose && (
            <button className='btn-close' onClick={onClose}>
              关闭
            </button>
          )}
        </div>
      </DatePickerWrapper>
    );
  }
);

export default DatePicker;
