import React, { memo, useState } from 'react';
import { DatePickerWrapper } from './style';
import dayjs from 'dayjs';
import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';

const DatePicker = memo(
  ({
    isOpen = false,
    startDate,
    endDate,
    setStartDate,
    setEndDate,
    onClose,
    onChange,
  }) => {
    // 当前显示的月份（左侧日历）
    const [currentMonth, setCurrentMonth] = useState(dayjs());

    // 生成日历数据
    const generateCalendarDays = month => {
      const daysInMonth = month.daysInMonth();
      const days = [];
      const firstDayOfMonth = month.startOf('month');
      const firstDayWeek = firstDayOfMonth.day() || 7;

      // 填充前面的空白
      for (let i = 1; i < firstDayWeek; i++) {
        days.push({ isEmpty: true });
      }

      // 添加当月的日期
      for (let i = 1; i <= daysInMonth; i++) {
        const currentDay = month.date(i);
        const isDisabled = currentDay.isBefore(dayjs(), 'day');

        days.push({
          date: currentDay,
          isCurrentMonth: true,
          isToday: currentDay.isSame(dayjs(), 'day'),
          dayOfMonth: i,
          isDisabled,
          isStartDate: startDate && currentDay.isSame(startDate, 'day'),
          isEndDate: endDate && currentDay.isSame(endDate, 'day'),
          isInRange:
            startDate &&
            endDate &&
            currentDay.isAfter(startDate) &&
            currentDay.isBefore(endDate),
        });
      }

      // 填充后面的空白
      const totalDays = 42;
      while (days.length < totalDays) {
        days.push({ isEmpty: true });
      }

      return days;
    };

    // 处理日期点击
    const handleDateClick = day => {
      if (day.isDisabled || day.isEmpty) return;

      if (!startDate || (startDate && endDate)) {
        // 开始新的选择
        setStartDate(day.date);
        setEndDate(null);
      } else {
        // 已有开始日期，选择结束日期
        if (day.date.isBefore(startDate)) {
          // 如果点击的日期在开始日期之前，交换开始和结束日期
          setEndDate(startDate);
          setStartDate(day.date);
        } else {
          setEndDate(day.date);
        }
      }
    };

    // 处理清除
    const handleClear = () => {
      setStartDate(null);
      setEndDate(null);
      onChange?.(null, null);
    };

    // 处理关闭
    const handleClose = () => {
      onClose?.();
      if (startDate && endDate) {
        onChange?.(startDate, endDate);
      }
    };

    // 渲染日历主体
    const renderCalendarBody = month => {
      const days = generateCalendarDays(month);
      return (
        <div className='calendar-body'>
          {days.map((day, index) => (
            <div
              key={index}
              className={`calendar-day 
              ${day.isEmpty ? 'empty' : ''} 
              ${day.isToday ? 'today' : ''} 
              ${day.isStartDate ? 'start-date' : ''}
              ${day.isEndDate ? 'end-date' : ''}
              ${day.isInRange ? 'in-range' : ''}
              ${day.isDisabled ? 'disabled' : ''}`}
              onClick={() => handleDateClick(day)}
            >
              {!day.isEmpty && day.dayOfMonth}
            </div>
          ))}
        </div>
      );
    };

    // 处理月份切换
    const handleMonthChange = direction => {
      setCurrentMonth(prev => {
        if (direction === 'prev') {
          return prev.subtract(1, 'month');
        }
        return prev.add(1, 'month');
      });
    };

    // 渲染日历头部
    const renderHeader = () => {
      return (
        <div className='calendar-header'>
          <div className='switch-btn' onClick={() => handleMonthChange('prev')}>
            <IconArrowLeft />
          </div>
          <div className='month-info'>
            <span>{currentMonth.format('YYYY 年 M 月')}</span>
            <span>{currentMonth.add(1, 'month').format('YYYY 年 M 月')}</span>
          </div>
          <div className='switch-btn' onClick={() => handleMonthChange('next')}>
            <IconArrowRight />
          </div>
        </div>
      );
    };

    // 渲染星期标题
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

    return (
      <DatePickerWrapper>
        {renderHeader()}
        <div className='calendars-wrapper'>
          <div className='calendar'>
            {renderWeekDays()}
            {renderCalendarBody(currentMonth)}
          </div>
          <div className='calendar'>
            {renderWeekDays()}
            {renderCalendarBody(currentMonth.add(1, 'month'))}
          </div>
        </div>
        <div className='footer'>
          <button className='btn-clear' onClick={handleClear}>
            清除
          </button>
          <button className='btn-close' onClick={handleClose}>
            关闭
          </button>
        </div>
      </DatePickerWrapper>
    );
  }
);

export default DatePicker;
