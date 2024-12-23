import React, { memo } from 'react';

import { SectionRoomsWrapper } from './style';
import RoomItem from '../room-item';
const SectionRooms = memo(({ roomList, itemWidth, roomClick }) => {
  return (
    <SectionRoomsWrapper>
      {roomList?.slice(0, 8).map(item => {
        return (
          <RoomItem
            key={item.id}
            itemData={item}
            $itemWidth={itemWidth}
            roomClick={roomClick}
          />
        );
      })}
    </SectionRoomsWrapper>
  );
});

export default SectionRooms;
