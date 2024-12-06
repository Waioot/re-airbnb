import { memo } from "react";
import { OrderFullWrapper } from "./style";

const OrderFull = memo(() => {
  return (
    <OrderFullWrapper>
      <div className="order-full">
        <div className="order-title">已订满</div>
        <div className="order-button">申请</div>
      </div>
    </OrderFullWrapper>
  );
});

export default OrderFull;
