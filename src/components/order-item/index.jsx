import React, { memo } from "react";
import { ItemWrapper } from "./style";

const guestTitleMap = {
  adults: "成人",
  children: "儿童",
  infants: "婴儿",
  pets: "宠物",
};
const OrderItem = memo(({ title = "adults", desc = "13 岁及以上", count = 0, allowPets = true, handleGuestInfo }) => {

  return (
    <ItemWrapper>
      <div className="info">
        <div className="title">{guestTitleMap[title]}</div>
        <div className="desc">{desc}</div>
      </div>
      <div className="control">
        <button className={`btn ${!allowPets || count === 0 ? "disabled" : ""}`} onClick={() => handleGuestInfo(title, false)}>-</button>
        <span className="count">{count}</span>
        <button className={`btn ${!allowPets ? "disabled" : ""}`} onClick={() => handleGuestInfo(title, true)}>+</button>
      </div>
    </ItemWrapper>
  );
});

export default OrderItem;
