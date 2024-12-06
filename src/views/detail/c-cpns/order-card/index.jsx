import { memo, useState } from "react";
import { OrderCardWrapper } from "./style";
import OrderNotFull from "./c-cpns/order-notfull";
import OrderFull from "./c-cpns/order-full";

const OrderCard = memo(() => {
  const [isOrderFull, setIsOrderFull] = useState(false);

  return (
    <OrderCardWrapper>
      {!isOrderFull && <OrderNotFull />}
      {isOrderFull && <OrderFull />}
    </OrderCardWrapper>
  );
});

export default OrderCard;
