import { memo, useState, useEffect } from 'react';
import { OrderNotFullWrapper } from './style';

import useClosePopup from '@/hooks/useClosePopup';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import DatePicker from '@/base-ui/date-picker';
import OrderItem from '@/components/order-item';
import IconArrowUp from '@/assets/svg/icon-arrow-up';
import IconArrowDown from '@/assets/svg/icon-arrow-down';

const OrderNotFull = memo(() => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [openGuestPopup, setOpenGuestPopup] = useState(false);
  const [guestInfo, setGuestInfo] = useState({
    adults: 0,
    children: 0,
    infants: 0,
    pets: 0,
    allowPets: true,
  });

  // 点击其他地方关闭日期选择器
  useClosePopup(openDatePicker, setOpenDatePicker, 'order-date-popup');
  // 点击其他地方关闭房客信息
  useClosePopup(openGuestPopup, setOpenGuestPopup, 'guest-popup');

  const handleCloseDatePicker = e => {
    setOpenDatePicker(false);
    setOpenGuestPopup(false);
  };

  const handleDateSectionClick = e => {
    e.stopPropagation();
    setOpenDatePicker(pre => !pre);
    setOpenGuestPopup(false);
  };

  // 更新房客预定信息
  function handleGuestInfo(field, isAdd) {
    setGuestInfo(prev => ({
      ...prev,
      [field]: isAdd ? prev[field] + 1 : prev[field] - 1,
    }));
  }

  return (
    <OrderNotFullWrapper>
      <div className='order-header'>
        <span className='price-text'>总价&nbsp;</span>
        <span className='price-num'>¥ 15,971</span>
      </div>
      <div className='order-content'>
        <div className='date-section' onClick={handleDateSectionClick}>
          <div className='check-in'>
            <div className='label'>入住日期</div>
            <div className='date'>
              {checkInDate
                ? dayjs(checkInDate).format('YYYY/MM/DD')
                : '请选择入住日期'}
            </div>
          </div>
          <div className='check-out'>
            <div className='label'>退房日期</div>
            <div className='date'>
              {checkOutDate
                ? dayjs(checkOutDate).format('YYYY/MM/DD')
                : '请选择退房日期'}
            </div>
          </div>
          {openDatePicker && (
            <div className='order-date-popup'>
              <div
                className='order-date-picker'
                onClick={e => e.stopPropagation()}
              >
                <DatePicker
                  startDate={checkInDate}
                  endDate={checkOutDate}
                  setStartDate={setCheckInDate}
                  setEndDate={setCheckOutDate}
                  onClose={handleCloseDatePicker}
                />
              </div>
            </div>
          )}
        </div>
        <div
          className='guest-section'
          onClick={e => {
            e.stopPropagation();
            setOpenDatePicker(false);
            setOpenGuestPopup(pre => !pre);
          }}
        >
          <div className='label'>房客</div>
          <div className='guest-info'>
            <span className='text'>2 位房客</span>
            <span className='icon'>
              {openGuestPopup ? (
                <IconArrowUp width={16} height={16} />
              ) : (
                <IconArrowDown width={16} height={16} />
              )}
            </span>
          </div>
          {openGuestPopup && (
            <div className='guest-popup' onClick={e => e.stopPropagation()}>
              <OrderItem
                title='adults'
                desc='13 岁及以上'
                count={guestInfo.adults}
                handleGuestInfo={handleGuestInfo}
              />
              <OrderItem
                title='children'
                desc='2 - 12 岁'
                count={guestInfo.children}
                handleGuestInfo={handleGuestInfo}
              />
              <OrderItem
                title='infants'
                desc='2 岁以下'
                count={guestInfo.infants}
                handleGuestInfo={handleGuestInfo}
              />
              <OrderItem
                title='pets'
                desc='需要携带服务类动物？'
                count={guestInfo.pets}
                allowPets={false}
                handleGuestInfo={handleGuestInfo}
              />
              <div className='notice'>
                此房源最多可入住 4 名房客（不包括婴幼儿）。不允许携带宠物入住。
              </div>
              <div className='footer'>
                <div
                  className='btn'
                  onClick={e => {
                    e.stopPropagation();
                    setOpenGuestPopup(false);
                    setOpenDatePicker(false);
                  }}
                >
                  关闭
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className='order-footer'>
        <div
          className='order-button'
          onMouseMove={e => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            // 反转坐标以修正光晕移动方向
            e.currentTarget.style.backgroundPosition = `${100 - x}% ${
              100 - y
            }%`;
          }}
          onMouseLeave={e => {
            e.currentTarget.style.backgroundPosition = 'center';
          }}
        >
          预订
        </div>
        <span className='footer-text'>您现在不会被收费</span>
      </div>
    </OrderNotFullWrapper>
  );
});

export default OrderNotFull;
