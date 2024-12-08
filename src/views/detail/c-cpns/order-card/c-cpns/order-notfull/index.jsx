import { memo, useState, useEffect } from 'react';
import { OrderNotFullWrapper } from './style';

import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import DatePicker from '@/base-ui/date-picker';

const OrderNotFull = memo(() => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [openDatePicker, setOpenDatePicker] = useState(false);

  useEffect(() => {
    const handleClickOutside = event => {
      const calendar = document.querySelector('.calendar-wrapper');
      const dateSection = document.querySelector('.date-section');

      if (openDatePicker && calendar && dateSection) {
        if (
          !calendar.contains(event.target) &&
          !dateSection.contains(event.target)
        ) {
          setOpenDatePicker(false);
        }
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [openDatePicker]);

  const handleCloseDatePicker = () => {
    setOpenDatePicker(false);
  };

  const handleDateSectionClick = e => {
    e.stopPropagation();
  };

  return (
    <OrderNotFullWrapper>
      <div className='order-header'>
        <span className='price-text'>总价&nbsp;</span>
        <span className='price-num'>¥ 15,971</span>
      </div>
      <div className='order-content'>
        <div className='date-section' onClick={handleDateSectionClick}>
          <div className='check-in' onClick={() => setOpenDatePicker(true)}>
            <div className='label'>入住日期</div>
            <div className='date'>
              {checkInDate
                ? dayjs(checkInDate).format('YYYY/MM/DD')
                : '请选择入住日期'}
            </div>
          </div>
          <div className='check-out' onClick={() => setOpenDatePicker(true)}>
            <div className='label'>退房日期</div>
            <div className='date'>
              {checkOutDate
                ? dayjs(checkOutDate).format('YYYY/MM/DD')
                : '请选择退房日期'}
            </div>
          </div>
          {openDatePicker && (
            <div className='calendar-wrapper'>
              <DatePicker
                startDate={checkInDate}
                endDate={checkOutDate}
                setStartDate={setCheckInDate}
                setEndDate={setCheckOutDate}
                onClose={handleCloseDatePicker}
              />
            </div>
          )}
        </div>
        {/* <div className="guest-section">
            <div className="label">房客</div>
            <div className="guest-info">
              <span className="text">2 位房客</span>
              <span className="icon">▼</span>
            </div>
            <div className="guest-popup">
              <div className="item">
                <div className="info">
                  <div className="title">成人</div>
                  <div className="desc">13 岁及以上</div>
                </div>
                <div className="control">
                  <button className="btn">-</button>
                  <span className="count">2</span>
                  <button className="btn">+</button>
                </div>
              </div>
              <div className="item">
                <div className="info">
                  <div className="title">儿童</div>
                  <div className="desc">2-12 岁</div>
                </div>
                <div className="control">
                  <button className="btn">-</button>
                  <span className="count">0</span>
                  <button className="btn">+</button>
                </div>
              </div>
              <div className="item">
                <div className="info">
                  <div className="title">婴幼儿</div>
                  <div className="desc">2 岁以下</div>
                </div>
                <div className="control">
                  <button className="btn">-</button>
                  <span className="count">0</span>
                  <button className="btn">+</button>
                </div>
              </div>
              <div className="item">
                <div className="info">
                  <div className="title">宠物</div>
                  <div className="desc">需要携带服务类动物？</div>
                </div>
                <div className="control">
                  <button className="btn">-</button>
                  <span className="count">0</span>
                  <button className="btn">+</button>
                </div>
              </div>
              <div className="notice">
                此房源最多可入住 4 名房客（不包括婴幼儿）。不允许携带宠物入住。
              </div>
              <div className="footer">
                <div className="btn">关闭</div>
              </div>
            </div>
          </div> */}
      </div>
      <div className='order-footer'>
        <div className='order-button'>预订</div>
        <span>您现在不会被收费</span>
      </div>
    </OrderNotFullWrapper>
  );
});

export default OrderNotFull;
