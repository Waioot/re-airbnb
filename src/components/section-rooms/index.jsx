import React, { memo } from 'react';

import { SectionRoomsWrapper } from './style';
import RoomItem from '../room-item';
const SectionRooms = memo(({ roomList }) => {
  return (
    <SectionRoomsWrapper>
      {roomList?.slice(0, 8).map(item => {
        return <RoomItem key={item.id} itemData={item} />;
      })}
    </SectionRoomsWrapper>
  );
});

export default SectionRooms;