import React, { memo } from "react";

const OrderItem = memo(() => {
  return (
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
  );
});

export default OrderItem;
