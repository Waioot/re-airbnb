import { memo, useState, useEffect } from "react";
import { OrderNotFullWrapper } from "./style";

import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import DatePicker from "@/base-ui/date-picker";
import OrderItem from "@/components/order-item";
import IconTriangleBottom from "@/assets/svg/icon-triangle-bottom";

const OrderNotFull = memo(() => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [openGuestPopup, setOpenGuestPopup] = useState(true);


  // 点击其他地方关闭日期选择器
  useEffect(() => {
    const handleClickOutside = (event) => {
      const calendar = document.querySelector(".calendar-wrapper");
      const dateSection = document.querySelector(".date-section");

      if (openDatePicker && calendar && dateSection) {
        if (
          !calendar.contains(event.target) &&
          !dateSection.contains(event.target)
        ) {
          setOpenDatePicker(false);
        }
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [openDatePicker]);

// 点击其他地方关闭房客信息
useEffect(() => {
  const handleClickOutside = (event) => {
    const guestPopup = document.querySelector(".guest-popup");

    if (openGuestPopup && guestPopup) {
      if (!guestPopup.contains(event.target)) {
        setOpenGuestPopup(false);
      }
    }
  };

  document.addEventListener("click", handleClickOutside);

  return () => {
    document.removeEventListener("click", handleClickOutside);
  };
}, [openGuestPopup]);


  const handleCloseDatePicker = () => {
    setOpenDatePicker(false);
  };

  const handleDateSectionClick = (e) => {
    e.stopPropagation();
  };

  return (
    <OrderNotFullWrapper>
      <div className="order-header">
        <span className="price-text">总价&nbsp;</span>
        <span className="price-num">¥ 15,971</span>
      </div>
      <div className="order-content">
        <div className="date-section" onClick={handleDateSectionClick}>
          <div className="check-in" onClick={() => setOpenDatePicker(true)}>
            <div className="label">入住日期</div>
            <div className="date">
              {checkInDate
                ? dayjs(checkInDate).format("YYYY/MM/DD")
                : "请选择入住日期"}
            </div>
          </div>
          <div className="check-out" onClick={() => setOpenDatePicker(true)}>
            <div className="label">退房日期</div>
            <div className="date">
              {checkOutDate
                ? dayjs(checkOutDate).format("YYYY/MM/DD")
                : "请选择退房日期"}
            </div>
          </div>
          {openDatePicker && (
            <div className="calendar-wrapper">
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
        <div className="guest-section">
          <div className="label">房客</div>
          <div 
            className="guest-info" 
            onClick={(e) => {
              e.stopPropagation();
              setOpenGuestPopup(!openGuestPopup);
            }}
          >
            <span className="text">2 位房客</span>
            <span className="icon">
              <IconTriangleBottom />
            </span>
          </div>
          {openGuestPopup && (
            <div 
              className="guest-popup" 
              onClick={e => e.stopPropagation()}
            >
              <OrderItem />
              <div className="notice">
                此房源最多可入住 4 名房客（不包括婴幼儿）。不允许携带宠物入住。
              </div>
              <div className="footer">
                <div className="btn" onClick={() => setOpenGuestPopup(false)}>关闭</div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="order-footer">
        <div 
          className="order-button"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            // 反转坐标以修正光晕移动方向
            e.currentTarget.style.backgroundPosition = `${100 - x}% ${100 - y}%`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundPosition = 'center';
          }}
        >
          预订
        </div>
        <span className="footer-text">您现在不会被收费</span>
      </div>
    </OrderNotFullWrapper>
  );
});

export default OrderNotFull;
